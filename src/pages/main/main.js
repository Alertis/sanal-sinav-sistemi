import React, { Component } from 'react';
import {connect} from 'react-redux'

import {fetchQuestions} from './action'
 
class Main extends Component {
    componentDidMount(){
        this.props.fetchQuestions();
    }
    componentWillReceiveProps(nextState){
        console.log(nextState)
    }
    render() {

        return(
            <div className="mainPage">
                Selam yo
            </div>
           
        );
    }
} 

const mapStateToProps = ({Questions}) => {
	return {
        Questions
	}
};

const mapDispatchToProps = {
    fetchQuestions
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
