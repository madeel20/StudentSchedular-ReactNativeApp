import React , { Component } from 'react';
import { Text,View,TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection,Card,Button } from './common';


class ListItem extends Component {
    onViewClick(){
        Actions.activityView({ activity: this.props.activity });
    }
    render(){
        const { name, date, time } = this.props.activity; 
        return(
            <TouchableWithoutFeedback >
                <View>
                    <Card>
                        <CardSection style={{flexDirection:'row'}}>
                            <Text style={styles.labelStyle}> { name } </Text>                                         
                        </CardSection>
                        <CardSection style={{flexDirection:'column'}}>
                            <Text style={styles.dateTimeStyle}> { "Date: "+date} </Text> 
                            <Text style={styles.dateTimeStyle}> {"Time: "+time }</Text>
                        </CardSection>
                        <CardSection>
                            <Button buttonClickEvent={this.onViewClick.bind(this)}> View Details</Button>
                        </CardSection>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = {
    labelStyle : {
        fontSize: 25,
        flex:1,
        textAlign:'center'
    },
    dateTimeStyle:{
        fontSize:12,
        color: 'grey'
    }
}

export default ListItem;