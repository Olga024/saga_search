import { createAction } from '@reduxjs/toolkit';
import type { TSkill } from './reducer';

export const searchSkills = createAction<string>("SEARCH_SKILLS"); // Экшен поиска
export const receiveSkills = createAction<TSkill[]>('RECEIVE_SKILLS'); // Экшен получения результатов
export const searchFailed = createAction<Error>("SEARCH_FAILED"); // Экшен ошибки