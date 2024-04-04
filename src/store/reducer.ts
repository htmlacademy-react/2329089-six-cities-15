import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const.ts';
import {appData} from './app-data/app-data.slice.ts';
import {userProcess} from './user-process/user-process.slice.ts';
import {appProcess} from './app-process/app-process.slice.ts';

export const reducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appProcess.reducer,
});
