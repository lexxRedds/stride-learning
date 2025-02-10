import Dexie from 'dexie';
import { IAuthState } from '@components/interfaces/auth';
// Define the database
export class AuthDatabase extends Dexie {
  auth!: Dexie.Table<IAuthState, string>; // Table name and primary key type

  constructor() {
    super('learningDB'); // Database name
    this.version(1).stores({
      auth: 'userId', // Primary key is userId
    });
  }
}

// Export an instance of the database
export const db = new AuthDatabase();