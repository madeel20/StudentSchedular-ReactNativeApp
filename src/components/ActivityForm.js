import React,{ Component } from 'React';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { activityUpdate } from '../actions';
import DateTimePicker from "react-native-modal-datetime-picker";
import { CardSection, Input } from './common';

class ActivityForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            isTimePickerVisible: false

        };
      }
      showDatePicker = () => {
        this.setState({ isDatePickerVisible: true });
      };
      hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false });
      };
      showTimePicker = () => {
        this.setState({ isTimePickerVisible: true });
      };
      hideTimePicker = () => {
        this.setState({ isTimePickerVisible: false });
      };
     
      handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.props.activityUpdate({ prop: 'date', value: date.toDateString() });
        this.hideDatePicker();
      };
      handleTimePicked = time => {
        console.log("A date has been picked: ", time);
        this.props.activityUpdate({ prop: 'time', value: time.toTimeString() });
        this.hideTimePicker();
      };
      renderError(){
        if(this.props.error){
            return  (
            <View style={{ backgroundColor: 'white' }}>  
                <Text style={styles.errorTextStyle}> 
                    {this.props.error}
                </Text>
            </View>
             ) ;         
        }
      }
    render(){
     
        return(
            <View>
                <CardSection>
                    <Input label="Name" placeholder="Name Your Activity"  value={this.props.name}
                    onChangeText={ (text) =>  this.props.activityUpdate({ prop: 'name', value: text })} />
                </CardSection>
                    <CardSection>
                    <Input label="Details:"  placeholder="Activity Details" value={this.props.details}
                    onChangeText={(text) =>  this.props.activityUpdate({ prop: 'details', value: text })} />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }} >
                        <Text style={styles.pickerLabel}>Date</Text>
                        <Button title={this.props.date} onPress={this.showDatePicker} />
                        <DateTimePicker
                        isVisible={this.state.isDatePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDatePicker}
                        mode="date"
                      
                        />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }} >
                        <Text style={styles.pickerLabel}>Time</Text>
                        <Button title={this.props.time} onPress={this.showTimePicker} />
                        <DateTimePicker
                        
                        isVisible={this.state.isTimePickerVisible}
                        onConfirm={this.handleTimePicked}
                        onCancel={this.hideTimePicker}
                        timePickerModeAndroid="default"
                        mode="time"
                        />
                </CardSection>
                {this.renderError()}
        
                     
                </View>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
    ,
    pickerLabel: {
      fontSize: 28,
      alignSelf: 'center'
  }
}
const mapsStateToProps = (state) => {
    const { name,details,date,time,error} = state.activity;
    return {name,details,date,time,error}
    
}
export default connect(mapsStateToProps, {activityUpdate})(ActivityForm);