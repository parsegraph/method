#!/bin/bash
for `seq 1 3`; do
    yarn publish parsegraph-method-dev.tgz --no-git-tag-version --prepatch --preid "$*" && break
    echo "Retrying..."
    sleep 3
done

