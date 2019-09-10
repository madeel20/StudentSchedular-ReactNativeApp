import React, { Component } from 'react';
import { FlatList,View } from 'react-native';
import { connect }  from 'react-redux';
import AwesomeButton from "react-native-really-awesome-button";
import LinearGradient from "react-native-linear-gradient";
import _ from 'lodash';
import { activityFetch } from '../actions';
import ListItem from './ListItem';

class ActivityList extends Component  {
    componentWillMount(){
        this.props.activityFetch();
    }
    renderRow(activity){
        return <ListItem activity={activity} />;
    }
    render(){
        const { activities } = this.props;
    return(
        <View>
        <FlatList
            scrollEnabled
            data={_.toArray(activities)}
            renderItem={({item}) => <ListItem activity={item} />}
            />
          
            </View>
    );
    }
}
const mapStateToProps = state => {
    const activities = _.map(state.activities, (val,uid)=>{
        return { ...val,uid }
    });
    return { activities };
}
export default connect(mapStateToProps, {activityFetch})(ActivityList);