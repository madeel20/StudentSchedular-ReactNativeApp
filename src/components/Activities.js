import React, {Component} from 'react';
import { View , Text } from 'react-native';
import ActivityList from './ActivityList';

class Activities extends Component {
    render(){
        return(
            <View>
               <ActivityList />
            </View>
        );
    }
}

export default Activities;