import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Reducers from './reducers';
import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './Router';
import  firebase  from 'firebase';

class App extends Component{
   
    componentDidMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyCY1fTNwLO3SUIO2ARvHvVh2cjerYzAQkA",
            authDomain: "studentschedulerapp.firebaseapp.com",
            databaseURL: "https://studentschedulerapp.firebaseio.com",
            projectId: "studentschedulerapp",
            storageBucket: "",
            messagingSenderId: "1045423866805",
            appId: "1:1045423866805:web:c67e1d2c4197757d"
          };
          // Initialize Firebase
          if(firebase.initializeApp(firebaseConfig))
                console.log("firebase connected!");
    }

    render(){
        return (
        <Provider store={createStore(Reducers,{},applyMiddleware(ReduxThunk))}>
                <RouterComponent />
            </Provider>
            
        );
    }
}

export default App;