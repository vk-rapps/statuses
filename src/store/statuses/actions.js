import * as types from './actionTypes';

export const loadStatuses = (statuses = []) => {
    return {
        type: types.STATUSES_LOAD,
        statuses,
    };
};

export const openStatus = (id = null) => {
    return {
        type: types.STATUSES_OPEN,
        id,
    };
};
