#!/bin/bash
for try in `seq 1 3`; do
    yarn publish parsegraph-method-dev.tgz --no-git-tag-version --prepatch --preid "$*" && break
    echo "$try. Retrying..."
    sleep 3
done
exit 1
