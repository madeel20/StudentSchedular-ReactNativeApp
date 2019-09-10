import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Card , CardSection , Button, Spinner } from './common';
import { activityUpdate, activityCreate , activityClear} from '../actions';
import ActivityForm from './ActivityForm';

class ActivityCreate extends Component {
    componentDidMount(){
        this.props.activityClear();
    }
    onSaveButtonClick(){
        
        const { name,details , date,time } = this.props;
 
        this.props.activityCreate({ name,details,date,time });
    }
    renderButton(){
        if(this.props.loading)
        return <Spinner size={'large'} />;

        
        return  <Button buttonClickEvent={this.onSaveButtonClick.bind(this)}> Save </Button>;
    }
    render(){
        console.log(this.props.employee);
        return(
          <Card>
                  <ActivityForm {...this.props} />
                  <CardSection>
                 {this.renderButton()}
                  </CardSection>
                  <CardSection>
                  
                  </CardSection>
          </Card>

        );
    }
}

const mapStateToProps = (state) => {
    const { name, details, date,time, loading } = state.activity;
    return { name, details, date,time,  loading };
}

export default connect(mapStateToProps, {activityUpdate, activityClear, activityCreate})(ActivityCreate) ;