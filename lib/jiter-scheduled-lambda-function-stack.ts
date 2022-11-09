import * as path from "path";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import {
  Runtime,
  FunctionUrlAuthType,
  FunctionUrl,
} from "aws-cdk-lib/aws-lambda";
import { CfnOutput } from "aws-cdk-lib";

export class JiterScheduledLambdaFunctionStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myScheduledFunction = new NodejsFunction(
      this,
      "MyScheduledFunction",
      {
        functionName: "My-Scheduled-Function-with-Jiter",
        handler: "main",
        runtime: Runtime.NODEJS_16_X,
        entry: path.join(__dirname, `../function.ts`),
      }
    );

    const functionUrl = new FunctionUrl(this, "MyFunctionUrl", {
      authType: FunctionUrlAuthType.NONE,
      function: myScheduledFunction,
    });

    new CfnOutput(this, "URLValue", {
      value: functionUrl.url,
    });
  }
}
