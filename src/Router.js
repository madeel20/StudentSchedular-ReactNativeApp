import React from 'react';
import {Router, Scene, Stack, Actions }  from 'react-native-router-flux';
import Activities from './components/Activities';
import Login from './components/Login';
import ActivityCreate from './components/ActivityCreate';
import ActivityView from './components/ActivityView';
import ActivityEdit from './components/ActivityEdit';

const RouterComponent = () => {
    return(
        <Router>
           
                    <Stack hideNavBar>
                        <Scene key="auth" initial >
                        <Scene key="login" component={Login} />
                        </Scene>
                        <Scene key="pages" >
                            <Scene key="activityList" title="My Activities" component={Activities} rightTitle="Add" onRight={()=>{ Actions.addActivity()}}/>
                            <Scene key="addActivity" title="Add Activity" component={ActivityCreate} />
                            <Scene key="activityView" title="View Activity" component={ActivityView} rightTitle="Edit" onRight={(props)=>{ Actions.editActivity(props)}} />
                            <Scene key="editActivity" title="Edit Activity" component={ActivityEdit} />
                            
                        </Scene>
                        
                    </Stack>
 
        </Router>
    )
}

export default RouterComponent;
