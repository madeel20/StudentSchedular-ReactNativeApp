import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { connect } from 'react-redux';
import { loginUser, EmailChanged, passwordChanged} from '../actions';
import { Button, Header, Input, Spinner, Card, CardSection} from './common';

class Login extends Component {
    emailChanged(text){
        this.props.EmailChanged(text);
    }
    passwordChanged(text){
        this.props.passwordChanged(text);
    }
    onLoginClick(){
        const { email,password} = this.props;
        this.props.loginUser({email,password});
    }
    renderError(){
        if(this.props.error !== "")
        return <CardSection ><Text style={{ color:"red", fontSize: 18, textAlign: 'center', flex: 1}}> {this.props.error}</Text></CardSection>;
    }
    renderButton(){
       
        if(this.props.loading)
             return  <Spinner size="large" /> ;
        else
            return <Button buttonClickEvent={this.onLoginClick.bind(this)}>Log In</Button>;
   
    }
    render(){
        return(
        <View>
        <Header headerText="Log In "  />
        <Card>
            <CardSection>
                <Input label="Email" value={this.props.email} placeholder="abc@abc.com"  
                onChangeText={this.emailChanged.bind(this)} 
                 />
            </CardSection>
            <CardSection>
                <Input label="Password" placeholder="password"  value={this.props.password}
                onChangeText={this.passwordChanged.bind(this)} secureTextEntry />
            </CardSection>
            {this.renderError()}
            <CardSection>
                 {this.renderButton()}
            </CardSection>
        </Card>
        </View>
        );
    }
}
const mapSTateToProps = state =>{
    const {email,password,loading,error} = state.auth;
    return {email,password,loading,error}
}
export default connect(mapSTateToProps,{ loginUser, EmailChanged , passwordChanged})(Login);