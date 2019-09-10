import { 
    ACTIVITY_UPDATE,
    ACTIVITY_SAVED,
    CREATING_ACTIVITY,
    ACTIVITY_FETCH_SUCCESS,
    ERROR_FILL_ALL_FIELDS,
    ERROR_DATE_EMPTY,
    ERROR_TIME_EMPTY } from '../actions/types';
const INITIAL_STATE = {
    name: '',
   details: '',
    date: 'Pick Date',
    time: 'Pick Time',
    loading: false,
    error: ''
}
export default ( state = INITIAL_STATE, action ) => {
    console.log(action);
    switch(action.type){
        case ERROR_FILL_ALL_FIELDS:
        return {...state, error: 'Fill all the fields!'}
        case ERROR_DATE_EMPTY:
            return {...state, error: 'Date is required!'}
        case ERROR_TIME_EMPTY:
            return {...state, error : 'Time is requried!'}
        case ACTIVITY_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
        
        case CREATING_ACTIVITY:
            return {...state, loading: true}
        case ACTIVITY_SAVED:
        return INITIAL_STATE;
        default:
            return state;
    }
}