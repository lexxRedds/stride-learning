import { QueryCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import dynamoDB from '../services/dynamo';

const resolvers = {
  Query: {
    getFeedsByUser: async (_: any, { userId }: { userId: string }) => {
      const params = {
        TableName: 'Feeds',
        IndexName: 'userId-index',
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
          ':userId': userId,
        },
      };

      const result = await dynamoDB.send(new QueryCommand(params));
      return result.Items;
    },
  },
  Mutation: {
    createFeed: async (
      _: any,
      {
        type,
        userId,
        targetType,
        targetId,
        value,
        level,
      }: {
        type: string;
        userId: string;
        targetType: string;
        targetId: string;
        value?: string;
        level?: number;
      }
    ) => {
      const feedId = crypto.randomUUID();
      const timestamp = new Date().toISOString();

      const params = {
        TableName: 'Feeds',
        Item: {
          feedId,
          type,
          userId,
          targetType,
          targetId,
          value,
          level,
          timestamp,
        },
      };

      await dynamoDB.send(new PutCommand(params));
      return params.Item;
    },
  },
};

export default resolvers;