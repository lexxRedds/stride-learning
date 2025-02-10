import { db } from './indexedDB';
import { IAuthState } from '@components/interfaces/auth';

export async function loadPersistedAuth(): Promise<IAuthState | null> {
  try {
    const persistedAuth = await db.auth.toArray();
    return persistedAuth[0] || null;
  } catch (error) {
    console.error('Error loading persisted user data:', error);
    return null;
  }
}