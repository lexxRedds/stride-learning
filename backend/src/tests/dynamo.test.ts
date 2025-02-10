import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

describe('DynamoDB Connection Test', () => {
  const client = new DynamoDBClient({ region: process.env.AWS_REGION });
  const dynamoDB = DynamoDBDocumentClient.from(client);

  it('should retrieve an item from DynamoDB', async () => {
    const command = new GetCommand({
      TableName: 'Feeds',
      Key: { primaryKey: 'feedId' },
    });

    const result = await dynamoDB.send(command);
    expect(result.Item).toBeDefined();
  });
});