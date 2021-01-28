// Document by VTH
// function: shows the top of posts in home page.
// props from parent: none
// state: expand or not
// dependency component: summary post
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";

class NewDocumentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: "block",
        };
    }

    componentDidMount() {
        this.props.getPostNewests();
    }

    render() {
     
        return (

            <div>
              
            
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
     
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(NewDocumentsList)
);

