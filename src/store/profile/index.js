import * as types from './actionTypes';

const initialState = {
    loaded: false,
    profile: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.PROFILE_LOAD: {
            const { profile } = action;
            return {
                ...state,
                loaded: true,
                profile,
            };
        }

        default: return state;
    }
};
