import { 
    ACTIVITY_UPDATE,
    ACTIVITY_SAVED,CREATING_ACTIVITY,
    ACTIVITY_FETCH_SUCCESS,
    ERROR_FILL_ALL_FIELDS,
    ERROR_DATE_EMPTY,
    ERROR_TIME_EMPTY } from './types';

import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export const activityFetch = () =>{
    const { currentUser } = firebase.auth();
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/activities`)
        .on('value', snapshot => {
            dispatch({ type: ACTIVITY_FETCH_SUCCESS , payload: snapshot.val() })
        });
    }
}

export const activityUpdate = ({ prop, value }) => {
    return {
        type: ACTIVITY_UPDATE,
        payload: { prop, value }
    }
}
export const activityCreate = ({name,details,date,time}) =>{
    if(name =="" || details=="")
    return {type: ERROR_FILL_ALL_FIELDS};
    else if(date=="Pick Date")
    return {type: ERROR_DATE_EMPTY}
    else if(time=="Pick Time")
    return {type: ERROR_TIME_EMPTY}

   const { currentUser } = firebase.auth();
   return(dispatch) => {
    dispatch({ type: CREATING_ACTIVITY });
    firebase.database().ref(`users/${currentUser.uid}/activities/`).push({
        name,details,date,time
    }).then(()=>{
        dispatch({ type: ACTIVITY_SAVED });
        Actions.pop();
    });
   }
}

export const activitySave = ({name,details,time,date,uid}) => {
    const { currentUser } = firebase.auth();
    return(dispatch) =>{
        firebase.database().ref(`users/${currentUser.uid}/activities/${uid}`)
        .set({ name,details,time,date})
        .then(()=> {
            dispatch({type: ACTIVITY_SAVED });
            Actions.reset("activityList");
         });
    }
}

export const activityClear = ()=>{
    return {
        type: ACTIVITY_SAVED
    }
}

export const activityDelete = ({ uid }) =>{
    const { currentUser } = firebase.auth();
    return()=>{
        firebase.database().ref(`users/${currentUser.uid}/activities/${uid}`)
        .remove().then(  Actions.reset("activityList"));
    }
}

