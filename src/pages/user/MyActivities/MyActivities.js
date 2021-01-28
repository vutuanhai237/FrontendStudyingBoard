/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import AdminLayout from 'layouts/AdminSidebar'
import Titlebar from 'components/common/Titlebar/Titlebar'
import CustomModal from 'components/common/CustomModalPopup/CustomModal'
import gray_upload_icon from 'assets/images/gray_upload_icon.png'
import gray_write_icon from 'assets/images/gray_write_icon.png'

//import for Redux
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUser } from 'redux/services/userServices'
import { management_getAllRoles } from 'redux/services/userServices'

//import for role config
import { getRoleNameFilterByName } from 'utils/permissionUtils'

import Cookies from 'js-cookie'

class AccountInformation extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // (this.props);
        this.props.getCurrentUser();
    }

    render() {

        return (<> My activities</>);
    }
}
//#region for Redux
const mapStateToProps = (state) => {
    // (state);
    // console.log(state);
    return {
        roleList: state.user.allRoles,
        accountInformation: state.user.account
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentUser, management_getAllRoles
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountInformation));
 //#endregion