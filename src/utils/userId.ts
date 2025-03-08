// src/utils/userId.ts
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'title_generator_unique_user_id';

/**
 * ユーザーIDを localStorage から取得し、存在しなければ新しく生成して保存する。
 * @returns {string} ユニークなユーザーID
 */
export function getOrCreateUserId(): string {
  let userId = localStorage.getItem(STORAGE_KEY);
  if (!userId) {
    userId = uuidv4();
    localStorage.setItem(STORAGE_KEY, userId);
  }
  return userId;
}
