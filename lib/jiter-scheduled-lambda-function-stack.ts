import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Runtime, CfnUrl, FunctionUrlAuthType } from "aws-cdk-lib/aws-lambda";

export class JiterScheduledLambdaFunctionStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myScheduledFunction = new NodejsFunction(
      this,
      "MyScheduledFunction",
      {
        functionName: "My Scheduled Function with Jiter",
        handler: "main",
        runtime: Runtime.NODEJS_16_X,
        entry: "../function.ts",
      }
    );

    const lambdaUrl = new CfnUrl(this, "MyScheduledFunctionUrl", {
      targetFunctionArn: myScheduledFunction.functionArn,
      authType: FunctionUrlAuthType.NONE,
    });
  }
}
