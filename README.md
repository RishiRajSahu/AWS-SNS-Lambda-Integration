# AWS-SNS-Lambda-Integration
Demo App - SNS and Lambda Integration

## Prerequisites

Node.js >= v12.14.1


1. **ENV** Update 

```yml
environment:
  # AWS configuration
  AWS_ACCESS_KEY_ID: FAKE_ACCESS_KEY_ID
  AWS_SECRET_ACCESS_KEY: FAKE_SECRET_ACCESS_KEY
  AWS_REGION: FAKE_REGION
  
  # SNS Configuration
  SNS_REGION: <AWS_REGION>
  SNS_ACCOUNT_ID: <AWS_ACCOUNT_ID> # Dummy value in local setup
```


## Deploy lambda functions to aws

1. Install `serverless` globally. `npm i -g serverless`

2. In the `AWS-SNS-Lambda-Integration` directory run `npm i` to install required modules

3. Run `serverless deploy` to begin the deployment
