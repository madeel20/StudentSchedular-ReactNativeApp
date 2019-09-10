import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ActivityReducer from './ActivityReducer';
import ActivitiesReducer from './ActivitiesReducer';
export default combineReducers ({
    auth: AuthReducer,
    activities: ActivitiesReducer,
    activity: ActivityReducer
});
