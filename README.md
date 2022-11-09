# Trigger a Lambda Function at a Specific Time with Jiter

### Prerequisites

Make sure you have installed `typescript` and the `aws-cdk` globally. You can find instructions for the AWS CDK [here](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

### Steps

1. Install dependencies

   > npm install

2. Deploy the lambda function

   > cdk deploy

3. Get your API key from [https://jiter.dev](https://jiter.dev)

4. Modify the `index.ts` file with your API key and destination URL

5. Run the app to schedule your event
   > npx ts-node index.ts
