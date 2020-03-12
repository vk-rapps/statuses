import * as types from './actionTypes';

export const loadProfile = (profile = {}) => {
    return {
        type: types.PROFILE_LOAD,
        profile,
    };
};
