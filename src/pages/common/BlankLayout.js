/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'constants/constants.js'
// import resource image, icon

//import resource string

//import scss
import '../styles/LeftSidebarLayout.scss'
import 'styles/SimpleLabel.scss'

//import components
import PostsList from "pages/common/PostsList/PostsList"
import DocsList from "pages/common/DocsList/DocsList"

//import for Redux
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUser } from 'services/userServices'

class BlankLayout extends Component {
    constructor(props) {
        super(props);
        this.isTheFirstTimeLoaded = true;

    }

    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {

        if (this.props.accountInformation !== null && this.props.accountInformation !== undefined) {

            let { roleName, score, post_count, doc_count, username, avatarURL } = this.props.accountInformation;

            //#region  navigation region
            //#endregion

            return (
                <div className="normal-container">
                    <Router>
                        {/* Body Area */}
                        {/* <div className="blank-layout">
                        </div> */}

                        {/* Router Outlet */}
                        <div className="blank-layout-router-outlet" >
                            <Switch>
                                <Route exact path="/posts" component={PostsList} />
                                <Route exact path="/documents" component={DocsList} />
                                
                            </Switch>
                        </div>
                    </Router>
                </div >
            );
        }
        return <> </>

    }

    //#region for handle on scroll
    scrollFunction = () => {

    }
    //#endregion

}

//#region for redux
const mapStoreToProps = (store) => {
    // (state);
    return {
        accountInformation: store.user.account
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentUser
}, dispatch);

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(BlankLayout));
//#endregion