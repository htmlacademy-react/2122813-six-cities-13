import { SlicesName } from '../../const';
import { State } from '../../types/state';
import { UserInfo } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): string => state[SlicesName.User].authorizationStatus;
export const getUserData = (state: State): UserInfo | null => state[SlicesName.User].userData;
