/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import '../AdminPage'
import Admin_Titlebar from '../_component/Admin_Titlebar/Admin_Titlebar'
import Paginator from '../../shared_components/Paginator/ClientPaginator'
import Admin_UserItem from '../_component/Admin_UserItem/Admin_UserItem'

// import CustomModal from '../../shared_components/CustomModalPopup/CustomModal'

class Admin_UserManagement extends Component {
    constructor(props) {
        super();
        this.maxItemPerPage = 10;
        this.isAdminBrower = true;
        this.state = {
            usersList:
                [
                    {
                        "userID": 1,
                        "avatarUrl": "https://i.imgur.com/q54xYo3.png",
                        "name": "Nguyen Van Dong",
                        "nickName": "Tesla",
                        "email": "dongnv.since1999@gmail.com",
                        "score": "10^9",
                        "post_count": "300",
                        "doc_count": "0",
                        "role": "Admin",
                        "roleID": 1
                    },
                    {
                        "userID": 2,
                        "avatarUrl": "https://i.imgur.com/q54xYo3.png",
                        "name": "Nguyen Van Hai",
                        "nickName": "Tesla",
                        "email": "vutuanhai@gmail.com",
                        "score": "10",
                        "post_count": "200",
                        "doc_count": "0",
                        "role": "User",
                        "roleID": 0
                    },
                    {
                        "userID": 20,
                        "avatarUrl": "https://i.imgur.com/q54xYo3.png",
                        "name": "Phuc Nguyen Hong",
                        "nickName": "Tesla",
                        "email": "dongnv.since1999@gmail.com",
                        "score": "10^9",
                        "post_count": "300",
                        "doc_count": "0",
                        "role": "Admin",
                        "roleID": 1
                    },
                    {
                        "userID": 21,
                        "avatarUrl": "https://i.imgur.com/q54xYo3.png",
                        "name": "Luu Bieu Nghj",
                        "nickName": "Veg nai",
                        "email": "vutuanhai@gmail.com",
                        "score": "10",
                        "post_count": "200",
                        "doc_count": "0",
                        "role": "User",
                        "roleID": 0
                    }
                ],
            rolesList: [
                {
                    id: 0,
                    role: "Admin"
                },
                {
                    id: 1,
                    role: "Collaborator"
                },
                {
                    id: 2,
                    role: "User"
                }
            ],
            isChangeRoleConfirmationPopupOpen: false,
            
        }
    }

    componentDidMount() {
        this.fetchAllUserInPageOne();
        this.fetchAllRole();
    }

    fetchAllUserInPageOne = () => {
        //feta
    }

    fetchAllRole = () => {

    }

    onPageChange = () => {

    }

    render() {

        let usersList = this.state.usersList.map((userItem) =>
            <Admin_UserItem
                key={userItem.userID}
                role={userItem.role}
                roleID={userItem.roleID}
                userID={userItem.userID}
                name={userItem.name}
                userName={userItem.userName}
                nickName={userItem.nickName}
                avatarUrl={userItem.avatarUrl}
                email={userItem.email}
                postCount={userItem.post_count}
                docCount={userItem.doc_count}
                score={userItem.score}

                rolesList={this.state.rolesList}
            >
            </Admin_UserItem>
        )

        return (
            <div>
                <Admin_Titlebar title="QUẢN LÝ NGƯỜI DÙNG" />
                <div className="Admin_Show_Port">

                    <div className="Number_Of_Item">
                        Tổng số:
                        <div style={{ width: "5px" }} />
                        {this.state.usersList.length}
                    </div>

                    {usersList}


                    <Paginator config={{
                        changePage: (currentInteractList) => this.onPageChange(currentInteractList),
                        rawData: this.state.usersList,
                        maxItemPerPage: this.maxItemPerPage,
                        numPagesShown: 5,
                        bottom: "20px"
                    }}
                    />
                </div>
            </div>
        );
    }
}
export default Admin_UserManagement;