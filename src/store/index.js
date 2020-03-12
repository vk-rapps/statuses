import { combineReducers } from 'redux';

import profile from './profile';
import statuses from './statuses';

export default combineReducers({
    profile,
    statuses,
});
