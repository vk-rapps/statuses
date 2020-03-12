import * as types from './actionTypes';

const initialState = {
    loaded: false,
    list: [],
    selected: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.STATUSES_LOAD: {
            const { statuses } = action;
            return {
                ...state,
                loaded: true,
                list: statuses,
            };
        }

        case types.STATUSES_OPEN: {
            const { id } = action;
            return {
                ...state,
                selected: state.list.find((x) => x.id === id),
            };
        }

        default: return state;
    }
};
