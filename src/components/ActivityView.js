import React ,{ Component } from 'react';
import {Text } from 'react-native';
import {Card,CardSection,Button,Confirm} from './common';

class ActivityView extends Component {
    
    render(){
        const { nameStyle , detailStyle}  = styles;
        const { name, details,time,date} = this.props.activity;
        return (
            <Card>
                <CardSection>
                     <Text style={nameStyle}> {name} </Text>
                </CardSection>
                <CardSection>
                     <Text style={detailStyle}> Details:  {details} </Text>
                </CardSection>
                <CardSection>
                     <Text> Time: {time} </Text>
                </CardSection>
                <CardSection>
                     <Text> Date: {date} </Text>
                </CardSection>
            </Card>
           
        );
    }
}
const styles = {
    nameStyle: {
        fontSize: 25,
        textAlign:'center',
        flex: 1
    },
    detailStyle: {
        textAlign:'left',
        flex: 1
    }
}

export default ActivityView;