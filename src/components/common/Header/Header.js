import React, { Component } from "react";
import logo from 'assets/images/logo.png';
import upload_icon from 'assets/images/icon_upload.png';
import write_icon from 'assets/images/icon_write.png';
import "./Header.scss";
import "styles/SimpleButton.scss";
import LoginStatus from "./IsLoggedIn";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { getCurrentUser } from "redux/services/userServices"


import red_delete_icon from 'assets/images/red_delete_icon.png';
import search_icon from 'assets/images/search_icon.png';
import { ClickAwayListener } from '@material-ui/core'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: null,
            keywork: "",
            isQuickSearchShow: false,
            isCollapsedUserMenuOpened: false,
        }
        this.isHaveClickAwayQuickSearhResult = false;// dung de kiem tra neu bam ra ngoai search result lan 1

    }

    componentDidMount() {

        this.props.getCurrentUser();
        this.myInterval = null;

        function myTimer() {
            if (this.props.account === null) {
                this.setState({
                    account: null,
                });
            } else {
                console.log(this.props.account);
                this.setState({
                    account: this.props.account,
                });
                window.clearInterval(this.myInterval);
                this.myInterval = null;
                return;
            }
        }

        this.myInterval = setInterval(myTimer.bind(this), 2000);
    }



    handleClickAwayQuickSearchResult = () => {
        //Neu man hinh dang la chieu ngang va kich thuoc chieu ngang nho hon 992px thi khi bam ra ngoai, modal search khong bi huy
        if (window.innerWidth <= 992 &&
            window.innerHeight <= window.innerWidth)
            return;
        this.handleCancelQuickSearch();
    }

    render() {

        //for login
        let loginStatus;
        // if (this.state.account === null) {
        //     loginStatus = <Nav.Link className="menu-item"
        //         href="/login" > Đăng nhập </Nav.Link>
        // } else {
        //     loginStatus = <LoginStatus account={this.state.account} id="login"
        //         className="float-right" />
        // }

        //for quick search
        let quickSearchResult = {
            post: ["Post 1", "Post 2", "Post 3"],
            doc: ["Doc 1", "Doc 2", "Doc 3"],
            tag: ["Tag 1", "Tag 2", "Tag 3"]
        };

        return (
            <div className="Header_Wrapper"  >
                <div className="Header" id="header" >

                    {/* Begin lv1: contain logo and searchbar */}
                    {/* Begin lv2: searchbar */}
                    <div className="Header_Begin_Lv1" >
                        <div className="Header_Begin_Lv2" id="header-begin-lv2" >
                            <img className="App_Logo" src={logo} alt="logo" />
                            {/* Duoi 576 */}
                            <div className="Search_Box_Port_Small" >
                                <form className="Search_Box_Inner_Port" autoComplete="off" onSubmit={(e) => this.handleSearch(e.target.value)} >
                                    <input className="Search_Box_Text_Field" id="search-box-text-field-small" type="text" placeholder="Search..." onChange={() => this.handleQuickSearch()} />
                                    <div className="Search_Image_Button_Port"
                                        id="search-image-button-port" > <img className="Search_Image_Button"
                                            src={search_icon}
                                            alt="*"
                                            onClick={
                                                (e) => this.handleSearch(e.target.value)}
                                        />
                                    </div>
                                </form>
                            </div>

                            {/* 576 -> 992 */}
                            <div className="Search_Box_Port_Normal" >
                                <form className="Search_Box_Inner_Port"
                                    autoComplete="off"
                                    onSubmit={(e) => this.handleSearch(e.target.value)} >
                                    <input className="Search_Box_Text_Field" id="search-box-text-field-normal"
                                        type="text"
                                        placeholder="SearchA..."
                                        onChange={() => this.handleQuickSearch()} />
                                    <div className="Search_Image_Button_Port" id="search-image-button-port" ><img className="Search_Image_Button" src={search_icon} alt="*" onClick={(e) => this.handleSearch(e.target.value)} />
                                    </div>
                                </form >
                            </div>

                            {/*> 992 */}
                            <div className="Search_Box_Port_Big" >
                                <form className="Search_Box_Inner_Port" autoComplete="off" onSubmit={(e) => this.handleSearch(e.target.value)} >
                                    <input className="Search_Box_Text_Field" id="search-box-text-field-small" type="text" placeholder="Search..." onChange={() => this.handleQuickSearch()} />
                                    <div className="Search_Image_Button_Port"
                                        id="search-image-button-port" > <img className="Search_Image_Button"
                                            src={search_icon}
                                            alt="*"
                                            onClick={
                                                (e) => this.handleSearch(e.target.value)}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <ClickAwayListener onClickAway={() => this.handleClickAwayQuickSearchResult()}>
                            <div className="Result_Port" id="quick-search-result-port">
                                <div className="Sub_Result_Port_Container" id="quick-search-sub-result-port-container" >
                                    <div className="Cancel_Button_Port" id="quick-search-cancel-button-port" >
                                        <img className="Cancel_Button" id="quick-search-cancel-button" onClick={() => { this.handleCancelQuickSearch() }} src={red_delete_icon} />
                                    </div>
                                    <div className="Sub_Result_Port" id="quick-search-post-result-port">
                                        <div className="Sub_Result_Title">BÀI VIẾT</div>
                                        {quickSearchResult.post.map(result =>
                                            <div className="display-flex margin-top-5px"><img className="Result_Image margin-right-5px" />
                                                <div className="Result_Title">{result}
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                    <div className="Sub_Result_Port" id="quick-search-doc-result-port">
                                        <div className="Sub_Result_Title margin-top-5px">TÀI LIỆU</div>
                                        {quickSearchResult.doc.map(result =>
                                            <div className="display-flex margin-top-5px">
                                                <img className="Result_Image margin-right-5px" />
                                                <div className="Result_Title">{result}</div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Sub_Result_Port margin-top-5px" id="quick-search-tag-result-port">
                                        <div className="Sub_Result_Title margin-top-5px ">TAGS</div>

                                        {quickSearchResult.tag.map(result =>
                                            <div className="display-flex margin-top-5px">
                                                <img className="Result_Image margin-right-5px" />
                                                <div className="Result_Title">{result}</div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </ClickAwayListener>
                    </div>

                    {/* 
                <ClickAwayListener onClickAway={
                    () => this.handleClickAwayQuickSearchResult()} >
                    <div className="Result_Port_Normal" id="quick-search-result-port" >
                        <div className="Sub_Result_Port_Container"
                            id="quick-search-sub-result-port-container" >
                            <div className="Cancel_Button_Port"
                                id="quick-search-cancel-button-port" > <img className="Cancel_Button" id="quick-search-cancel-button"
                                    onClick={() => { this.handleCancelQuickSearch() }}
                                    src={red_delete_icon}
                                />
                            </div>
                            <div className="Sub_Result_Port" id="quick-search-post-result-port" >
                                <div className="Sub_Result_Title" > BÀI VIẾT </div>
                                {quickSearchResult.post.map(result =>
                                    <div className="display-flex margin-top-5px" >
                                        <img className="Result_Image margin-right-5px" />
                                        <div className="Result_Title" > {result} </div> </div>)
                                } </div>
                            <div className="Sub_Result_Port" id="quick-search-doc-result-port" >
                                <div className="Sub_Result_Title margin-top-5px" > TÀI LIỆU </div> {quickSearchResult.doc.map(result =>
                                    <div className="display-flex margin-top-5px" >
                                        <img className="Result_Image margin-right-5px" />
                                        <div className="Result_Title" > {result} </div> </div>)
                                } </div>
                            <div className="Sub_Result_Port margin-top-5px" id="quick-search-tag-result-port" >
                                <div className="Sub_Result_Title margin-top-5px " > TAGS </div> {quickSearchResult.tag.map(result =>
                                    <div className="display-flex margin-top-5px" >
                                        <img className="Result_Image margin-right-5px" />
                                        <div className="Result_Title" > {result} </div> </div>)
                                } </div>
                        </div>
                    </div>
                </ClickAwayListener> */}



                    <div className="Header_End_Lv1">
                        <div className="Header_Menu_Item_Container" >
                            <div className="Header_Menu_Item" > TÀI LIỆU </div>
                            <div className="Header_Menu_Item" > BÀI VIẾT </div>
                            <div className="Header_Menu_Item" > HỌC TẬP </div>
                            <div className="Header_Menu_Item" > HỎI ĐÁP </div>
                            <div className="Header_Menu_Item" > QUẢN LÝ </div>

                        </div>

                        <div className="Header_End_Lv2" > <img className="Header_Image_Button"
                            src={upload_icon} />
                            <img className="Header_Image_Button" src={write_icon} />
                            <button className="blue-button margin_auto min_width_fit_content" > Đăng nhập </button>
                        </div>
                        <div className="Header_End_Lv2_Collapse"
                            onClick={this.state.isCollapsedUserMenuOpened ?
                                () => this.handleCloseCollapsedUserMenu()
                                : () => this.handleOpenCollapsedUserMenu()} >
                            <div className="Menu_Icon" >
                                <div className="Menu_Icon_Part" />
                                <div className="Menu_Icon_Part" />
                                <div className="Menu_Icon_Part" />
                            </div>
                        </div>

                    </div>

                    <div className="Collapsed_User_Menu_Port" id="collapsed-user-menu-port" >
                        <div className="Collapsed_User_Menu" id="collapsed-user-menu" >
                            <div className="justify-content-space-between" >
                                <div className="display-flex" > <img className="Collapsed_User_Menu_Image_Button"
                                    src={upload_icon} />
                                    <div>
                                        <button className="Collapsed_User_Menu_Button" > Đăng nhập </button>
                                    </div>
                                    <div className="Logined_Menu" >
                                        <div className="Collapsed_User_Menu_Item" > Trang cá nhân </div>
                                        <div className="Collapsed_User_Menu_Item" > Thông báo... </div>
                                        <div className="Collapsed_User_Menu_Item" > Bài viết của tôi </div>
                                        <div className="Collapsed_User_Menu_Item" > Tài liệu của tôi </div>
                                        <div className="Collapsed_User_Menu_Item" > Đăng xuất </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    //reach when click X or click over of quick search result
    handleCancelQuickSearch = () => {
        let quickSearchResultPort = document.getElementById("quick-search-result-port");
        let quickSearchCancelButton = document.getElementById("quick-search-cancel-button");
        let quickSearchSubResultPortContainer = document.getElementById("quick-search-sub-result-port-container");
        let quickSearchSubResultPortsHTMLColection = document.getElementsByClassName("Sub_Result_Port");
        quickSearchResultPort.style.padding = "0px";
        quickSearchResultPort.style.height = "0px";
        quickSearchResultPort.style.borderTop = "0px";
        quickSearchSubResultPortContainer.style.padding = "0px";
        quickSearchSubResultPortContainer.style.height = "0px";
        quickSearchSubResultPortContainer.style.borderRadius = "0px";
        document.getElementById("quick-search-sub-result-port-container").style.overflow = "hidden";
        document.getElementById("quick-search-cancel-button-port").style.display = "none";

        this.setState({ isQuickSearchShow: false });
        Array.from(quickSearchSubResultPortsHTMLColection).forEach(item => item.style.display = "none");
    }

    handleOpenCollapsedUserMenu = () => {

        let collapsedMenuPort = document.getElementById("collapsed-user-menu-port");
        let collapsedMenu = document.getElementById("collapsed-user-menu");
        collapsedMenu.style.width = document.getElementById("search-image-button-port").offsetWidth + document.getElementById("search-box-text-field-small").offsetWidth + "px";

        collapsedMenuPort.style.height = "30vh";
        collapsedMenu.style.height = "28vh";
        collapsedMenuPort.style.padding = "5px";
        collapsedMenu.style.padding = "5px"
        collapsedMenu.style.borderRadius = "5px";
        let collapsedMenuItemHTMLCollection = document.getElementsByClassName("Collapsed_User_Menu_Item");
        Array.from(collapsedMenuItemHTMLCollection).forEach(item => item.style.display = "flex");

        Array.from(document.getElementsByClassName("Collapsed_User_Menu_Image_Button")).forEach(item => item.style.display = "block");
        Array.from(document.getElementsByClassName("Collapsed_User_Menu_Button")).forEach(item => item.style.display = "flex");
        this.setState({ isCollapsedUserMenuOpened: true });
    }

    handleCloseCollapsedUserMenu = () => {
        let collapsedMenuPort = document.getElementById("collapsed-user-menu-port");
        let collapsedMenu = document.getElementById("collapsed-user-menu");
        collapsedMenuPort.style.height = "0vh";
        collapsedMenuPort.style.padding = "0px";
        collapsedMenu.style.height = "0px"
        collapsedMenu.style.padding = "0px"
        collapsedMenu.style.borderRadius = "0px";
        let collapsedMenuItemHTMLCollection = document.getElementsByClassName("Collapsed_User_Menu_Item");

        Array.from(collapsedMenuItemHTMLCollection).forEach(item => item.style.display = "none");
        Array.from(document.getElementsByClassName("Collapsed_User_Menu_Image_Button")).forEach(item => item.style.display = "none");
        Array.from(document.getElementsByClassName("Collapsed_User_Menu_Button")).forEach(item => item.style.display = "none");

        this.setState({ isCollapsedUserMenuOpened: false });
    }

    handleSearch = (keyword) => {
        console.log(keyword);
        if (keyword.length === 0) return;

    }

    // reach when text in search box change
    handleQuickSearch = () => {
        //  if search box is empty => return from call API
        let searchBoxTextField;
        if (window.innerWidth >= 768)
            searchBoxTextField = document.getElementById("search-box-text-field-normal");
        else
            searchBoxTextField = document.getElementById("search-box-text-field-small");
        if (searchBoxTextField.value.length === 0) return;

        // if result is showing => skip
        if (!this.state.isQuickSearchShow) {
            document.getElementById("quick-search-result-port").style.borderTop = "1px #c4c4c4 solid";
            document.getElementById("quick-search-result-port").style.padding = "5px";
            document.getElementById("quick-search-cancel-button").style.display = "flex";
            document.getElementById("quick-search-sub-result-port-container").style.padding = "6px";
            Array.from(document.getElementsByClassName("Sub_Result_Port")).forEach(item => item.style.display = "flex");
            this.setState({
                isQuickSearchShow: true
            });
            document.getElementById("quick-search-cancel-button-port").style.display = "flex";
            document.getElementById("quick-search-sub-result-port-container").style.borderRadius = "5px";
        }

        //  if screen width is small than 768 => search result port's width will be equal to search port else equal to 100%    
        if (window.innerWidth >= 768) {
            document.getElementById("quick-search-result-port").style.width = document.getElementById("search-image-button-port").offsetWidth + document.getElementById("search-box-text-field-normal").offsetWidth + "px";
            document.getElementById("quick-search-result-port").style.marginLeft = document.getElementById("search-box-text-field-normal").getBoundingClientRect().left + "px";
            console.log(document.getElementById("search-box-text-field-normal"));
            document.getElementById("quick-search-result-port").style.height = "50vh";
            document.getElementById("quick-search-sub-result-port-container").style.height = "48vh";
        } else {
            document.getElementById("quick-search-sub-result-port-container").style.height = window.innerHeight - document.getElementById("header-begin-lv2").offsetHeight - 11 + "px";
            document.getElementById("quick-search-result-port").style.height = window.innerHeight - document.getElementById("header-begin-lv2").offsetHeight - 10 + "px";
            document.getElementById("quick-search-result-port").style.width = "100%";
        }
        document.getElementById("quick-search-sub-result-port-container").style.overflow = "scroll";
        document.getElementById("quick-search-sub-result-port-container").style.overflowX = "hidden";
    }

}

const mapStateToProps = (state) => {
    return {
        account: state.user.account,
    };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentUser,
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Header)
);