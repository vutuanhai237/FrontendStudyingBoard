/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import '../ManagementPage'
import Management_Titlebar from '../management_components/Management_Titlebar/Management_Titlebar'
import Paginator from '../../shared_components/Paginator/ClientPaginator'
import Management_UserItem from '../management_components/Management_UserItem/Management_UserItem'

//import for redux
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { management_getAllUsers } from '../../../service/management_services/management_userAPIs'

class Management_UserManagement extends Component {
    constructor(props) {
        super();
        this.maxItemPerPage = 10;
        this.usersList = [];
        
        this.state = {
            rolesList: [
                {
                    id: 0,
                    role: "Management"
                },
                {
                    id: 1,
                    role: "Collaborator"
                },
                {
                    id: 2,
                    role: "User"
                },
                {
                    id: 3,
                    role: "User"
                }
            ],
            currentInteractList: [],
            isChangeRoleConfirmationPopupOpen: false,

        }
    }

    componentDidMount() {
        this.props.management_getAllUsers();
    }

    //client
    onPageChangeClient = (currentInteractList) => {
        this.setState({ currentInteractList: currentInteractList })
    }

    render() {

        let userItemList = <></>;

        if (this.props.userList !== null && this.props.userList !== undefined) {
            this.usersList = this.props.userList;
        
            userItemList = this.state.currentInteractList.map((userItem) =>
                <Management_UserItem
                    key={userItem.userID}
                    role={userItem.roleName}
                    roleID={userItem.roleId}
                    userID={userItem.id}
                    name={userItem.displayName}
                    userName={userItem.userName}
                    // nickName={userItem.displayName}
                    // avatarUrl={userItem.avatar}
                    avatarUrl="https://i.imgur.com/SZJgL6C.jpg"
                    email={userItem.email}
                    postCount={userItem.postCount}
                    docCount={userItem.documentCount}
                    score={userItem.score}

                    rolesList={this.state.rolesList}
                >
                </Management_UserItem>
            )
        }

        return (
            <div>
                <Management_Titlebar title="QUẢN LÝ NGƯỜI DÙNG" />
                <div className="Management_Show_Port">

                    <div className="Number_Of_Item">
                        Tổng số:
                        <div style={{ width: "5px" }} />
                        {this.usersList.length}
                    </div>

                    {userItemList}

                    <Paginator config={{
                        changePage: (currentInteractList) => this.onPageChangeClient(currentInteractList),
                        rawData: [...this.usersList],
                        maxItemPerPage: this.maxItemPerPage,
                        numPagesShown: 5,
                        bottom: "31px"
                    }}
                    />
                </div>
            </div>
        );

    }
}

//#region for Redux
const mapStatetoProps = (state) => {
    // console.log("*");
    console.log(state);
    return {
        userList: state.management_user.allUsers.accounts
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    management_getAllUsers
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Management_UserManagement));
//#endregion
