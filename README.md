# Trigger a Lambda Function at a Specific Time with Jiter

### Prerequisites

Make sure you have installed `typescript` and the `aws-cdk` globally. You can find instructions for the AWS CDK [here](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

### Steps

1. Deploy the lambda function

   > cdk deploy

2. Get your API key from [https://app.jiter.dev](https://app.jiter.dev)

3. Modify the `index.ts` file with your API key and destination URL

4. Run the app to schedule your event
   > npx ts-node index.ts
