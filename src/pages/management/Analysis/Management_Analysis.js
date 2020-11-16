/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import '../AdminLayout'
import Titlebar from 'components/management/Titlebar/Titlebar'
import Paginator from 'components/common/Paginator/ClientPaginator'
import UserItem from 'components/management/UserItem/UserItem'
// import { ClickAwayListener } from '@material-ui/core'
// import { getRoleNameByName, getRoleNameFilterByName } from 'utils/PermissionManagement'
import dropdown_btn from 'assets/images/dropdown_icon.png'
import white_dropdown_btn from 'assets/images/white_dropdown_icon.png'

//import for redux
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { management_getAllUsers, management_getAllRoles } from 'services/management_services/management_userAPIs'

class Analysis extends Component {
    constructor(props) {
        super();
        this.maxItemPerPage = 10;
        this.usersList = [];
        this.roleList = [];

        this.roleNameFilter = "All";
        this.roleFilterList = [
            {
                UserGroupID: 0,
                UserGroupName: "All"
            }
        ]

        this.isTheFirstTimeLoad = true;

        this.isChangeRoleConfirmationPopupOpen = false;
        this.isAnyChangeRoleFilterDropdownComboboxOpen = false;

        this.state = {
            currentInteractList: []
        }
    }

    componentDidMount() {
        this.props.management_getAllUsers();
        this.props.management_getAllRoles();
    }

    //client
    onPageChangeClient = (currentInteractList) => {
        this.setState({ currentInteractList: currentInteractList })
    }

    render() {

        let userItemList = <></>;
        // let searchDropdown = <></>;

        if (this.props.userList !== null && this.props.userList !== undefined
            && this.props.roleList !== null && this.props.roleList !== undefined) {
            this.usersList = this.props.userList;
            this.roleList = this.props.roleList;


            if (this.isTheFirstTimeLoad && this.roleList) {
                this.usersList = [...this.usersList];
                this.roleFilterList = this.roleFilterList.concat(...this.roleList)
                this.isTheFirstTimeLoad = false;
            }

            // searchDropdown = this.roleFilterList.map(role =>
            //     this.roleNameFilter === role.UserGroupName ?
            //         <div className="Activated_Dropdown_Combobox_Sub_Item"
            //             name="User_Role_Filter_Combobox_Item"
            //             id={"role-filter-dropdown-combobox-sub-item-" + role.UserGroupName}
            //             value={getRoleNameFilterByName(role.UserGroupName)}
            //             onClick={() => this.handleDropDownMenuItemClick(role.UserGroupName)}
            //             key={role.UserGroupID}>
            //             {getRoleNameFilterByName(role.UserGroupName)}

            //         </div>
            //         :
            //         <div className="Dropdown_Combobox_Sub_Item"
            //             name="User_Role_Filter_Combobox_Item"
            //             id={"role-filter-dropdown-combobox-sub-item-" + role.UserGroupName}
            //             value={getRoleNameFilterByName(role.UserGroupName)}
            //             key={role.UserGroupID}
            //             onClick={() => this.handleDropDownMenuItemClick(role.UserGroupName)}>
            //             {getRoleNameFilterByName(role.UserGroupName)}
            //         </div>
            // )
            this.isTheFirstTimeLoad = false;


            userItemList = this.state.currentInteractList.map((userItem) =>
                <UserItem
                    key={userItem.userID}
                    roleName={userItem.roleName}
                    roleID={userItem.roleId}
                    userID={userItem.id}
                    name={userItem.displayName}
                    username={userItem.username}
                    // nickName={userItem.displayName}
                    avatarUrl={userItem.avatar}
                    // avatarUrl='https://i.imgur.com/SZJgL6C.jpg'
                    email={userItem.email}
                    postCount={userItem.postCount}
                    docCount={userItem.documentCount}
                    score={userItem.score}

                    roleList={this.roleList}
                >
                </UserItem>
            )
        }

        return (



            <div>
                <Titlebar title="THỐNG KÊ" />
                <div className="Show_Layout">

                    <div className="flex_container justify_content_space_between margin_top_10px"  >
                        <div className="Number_Of_Item">
                            Tổng số:
                            &nbsp;
                            {this.usersList.length}
                        </div>

                        {userItemList}

                        <div>
                            <Paginator config={{
                                changePage: (currentInteractList) => this.onPageChangeClient(currentInteractList),
                                rawData: this.usersList,
                                maxItemPerPage: this.maxItemPerPage,
                                numPagesShown: 5,
                                bottom: "31px"
                            }}
                            />
                        </div>
                    </div >
                </div>
            </div>

        );
    }

    handleDropDownMenuItemClick = (roleName) => {
        let sub_dropdown_item_index = document.getElementsByName("User_Role_Filter_Combobox_Item");
        sub_dropdown_item_index.forEach.className = "Dropdown_Combobox_Sub_Item";
        this.roleNameFilter = roleName;
        // if (roleName === "All") {
        //     this.currentInteractList = this.usersList;
        //     this.closeChangeRoleFilterDropdownCombobox();
        //     return;
        // }
        // this.currentInteractList.splice(0, this.currentInteractList.length);
        // for (let i = 0; i < this.usersList.length; i++) {
        //     if (this.usersList[i].roleName === roleName)
        //         
        //         this.currentInteractList.push(this.usersList[i])
        // }
        this.closeChangeRoleFilterDropdownCombobox();
    }

    closeChangeRoleFilterDropdownCombobox = () => {
        this.isAnyChangeRoleFilterDropdownComboboxOpen = false; this.setState({});
    }

    handleDropDownMenuClick = (e, parent_id, show_text_id, dropdown_element_id, container_id) => {
        e.preventDefault();

        let parent_menu_item = document.getElementById(parent_id);
        let dropdown_element = document.getElementById(dropdown_element_id);
        let show_text = document.getElementById(show_text_id);
        let dropdown_container = document.getElementById(container_id);

        if (dropdown_container.style.display === "block") {
            dropdown_container.style.display = "none";
            parent_menu_item.style.background = "white";
            parent_menu_item.style.paddingLeft = "0px";
            show_text.style.color = "#363636";
            dropdown_element.src = dropdown_btn;
        }
        if (dropdown_container.style.display !== "block") {
            parent_menu_item.style.background = "#5279DB"
            dropdown_container.style.display = "block";
            parent_menu_item.style.paddingLeft = "10px";
            show_text.style.color = "white";
            dropdown_element.src = white_dropdown_btn;
        }

        this.isAnyChangeRoleFilterDropdownComboboxOpen = true;
        this.setState({});
    }
}

//#region for Redux
const mapStatetoProps = (state) => {

    return {
        userList: state.management_user.allUsers.accounts,
        roleList: state.management_user.allRoles
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    management_getAllUsers, management_getAllRoles
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Analysis));
//#endregion
