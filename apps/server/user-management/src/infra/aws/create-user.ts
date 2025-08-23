import type {
  Context as LambdaContext,
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from 'aws-lambda';

export const lambdaHandler = async (
  event: APIGatewayProxyEventV2,
  context: LambdaContext,
): Promise<APIGatewayProxyResultV2> => {
  await Promise.resolve(); // Added to satisfy linter rule

  const { body } = event;
  const { awsRequestId } = context;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'User created successfully',
      user: {
        id: '123',
        name: 'John Doe',
      },
      body,
      awsRequestId,
    }),
  };
};
