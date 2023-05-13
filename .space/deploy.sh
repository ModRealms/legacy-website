#!/bin/bash
export BRANCH_NAME=$(echo $JB_SPACE_GIT_BRANCH | cut -d'/' -f 3)
export REPOSITORY_NAME_LOWERCASE=$(echo $JB_SPACE_GIT_REPOSITORY_NAME | tr '[:upper:]' '[:lower:]')
export PROJECT_KEY_LOWERCASE=$(echo $JB_SPACE_PROJECT_KEY | tr '[:upper:]' '[:lower:]')
export REPOSITORY_NAME_SAFE=$(echo $REPOSITORY_NAME_LOWERCASE | tr '.' '-')
export REGISTRY_PATH=$SPACE_REGISTRY/p/$PROJECT_KEY_LOWERCASE/$REGISTRY_NAME/$REPOSITORY_NAME_LOWERCASE
export KUBE_NAMESPACE=$PROJECT_KEY_LOWERCASE-$REPOSITORY_NAME_SAFE-$BRANCH_NAME

if [ "$BRANCH_NAME" != "production" ]; then
    if [ "$INGRESS_HOST" == "$DOMAIN" ]; then # if the primary ingress
        export INGRESS_HOST="${BRANCH_NAME}.${INGRESS_HOST}" # develop.[ingress]
    else
        export INGRESS_HOST="${BRANCH_NAME}-${INGRESS_HOST}" # develop-[ingress]
    fi    
fi

curl -f -L -H "Authorization: Bearer $KUBE_AUTH_PASSWORD" "$KUBECONFIG_URL" -o .kubeconfig

helm upgrade $BRANCH_NAME .helm \
    --install \
    --kubeconfig .kubeconfig \
    --namespace $KUBE_NAMESPACE \
    --create-namespace \
    --set-string ingress.host="$INGRESS_HOST" \
    --set-string image.url="$REGISTRY_PATH:$BRANCH_NAME-$JB_SPACE_GIT_REVISION" \
    --set-string imageCredentials.password="$KUBE_AUTH_PASSWORD" \
    --set-string imageCredentials.username="$KUBE_AUTH_USER" \
    --set-string imageCredentials.registry="$SPACE_REGISTRY"