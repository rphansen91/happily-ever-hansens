#!/bin/bash

if [[ "$1" != "" ]]; then
    S3BUCKETNAME="$1"
else
    echo ERROR: Failed to supply S3 bucket name
    exit 1
fi

aws s3 sync build s3://$S3BUCKETNAME --acl public-read --delete --cache-control max-age=31536000,public
aws s3 cp s3://$S3BUCKETNAME/service-worker.js s3://$S3BUCKETNAME/service-worker.js --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type application/javascript --acl public-read
aws s3 cp s3://$S3BUCKETNAME/index.html s3://$S3BUCKETNAME/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read

