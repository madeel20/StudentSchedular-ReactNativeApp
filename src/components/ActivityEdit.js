import React,{Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { activityUpdate, activitySave, activityDelete } from '../actions';
import ActivityForm from './ActivityForm';
import { CardSection, Card , Button, Confirm } from './common';


class ActivityEdit extends Component {
    state = { visible: false }
    componentWillMount(){
       _.each(this.props.activity,(value,prop)=>{
           this.props.activityUpdate({prop,value});
       });
    }
    onSaveChangesPress(){
        const { name,time ,date,details} = this.props;
       this.props.activitySave({name,details,time ,date,uid: this.props.activity.uid });
    }
    onDeny(){
        this.setState({ visible: false });
    }
    onAccept(){
        this.props.activityDelete({ uid: this.props.activity.uid });
    }
    render(){
        return(
            <Card>
                <ActivityForm />
                <CardSection>
                    <Button buttonClickEvent={this.onSaveChangesPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection >
                    <Button buttonClickEvent={()=> this.setState({ visible: !this.state.visible }) }> Delete </Button>
                </CardSection>

                <Confirm visible={this.state.visible} onAccept={this.onAccept.bind(this)} onDeny={this.onDeny.bind(this)} >
                    Are you sure you want do this? 
                </Confirm>
            </Card>
        );
    }
}
const mapsStateToProps = (state) => {
    const { name,time ,date,details } = state.activity;
    return { name,time ,date,details}
}

export default connect(mapsStateToProps,{ activityUpdate,activitySave , activityDelete})(ActivityEdit);