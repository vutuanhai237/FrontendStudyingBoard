/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import 'layouts/AdminLayout'
import Titlebar from 'components/common/Titlebar/Titlebar'
import dropdown_btn from 'assets/images/dropdown_icon.png'
import './CategoryManagement.scss'
import CustomModal from 'components/common/CustomModalPopup/CustomModal'
import { ClickAwayListener } from '@material-ui/core';

//import for Redux
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getDocCategories } from "redux/services/docCategoryServices";

//chuyen thanh chi xem nen chua co handle click cho cac item trong bang danh muc bai viet
class CategoryManagement extends Component {
    constructor(props) {
        super();

        //Post 
        this.isAddPostCategoryPopupOpen = false;
        this.isEditPostCategoryPopupOpen = false;
        this.isVerifyDeletePostCategoryPopupOpen = false;

        //Doc
        this.isAddDocCategoryPopupOpen = false;
        this.isEditDocCategoryPopupOpen = false;
        this.isVerifyDeleteDocCategoryPopupOpen = false;

        //Notify
        this.notifyHeader = "";
        this.notifyContent = "";
        this.isNotifySuccessOpen = false;
        this.isNotifyFailOpen = false;

        //for Edit and Delete, only choose 1 item in all table
        this.selected_category_id = "";
        this.selected_category_name = "";

        //for document category
        this.documentCategoriesList = [];

        this.state = {
            postCategoriesList:
                [
                    {
                        "id": 1,
                        "title": "Danh muc 1"
                    },
                    {
                        "id": 2,
                        "title": "Danh muc 2"
                    },
                    {
                        "id": 3,
                        "title": "Danh muc 3"
                    }
                ],
            canClickEditPostCategory: false,
            canClickDeletePostCategory: false,
            canClickEditDocCategory: false,
            canClickDeleteDocCategory: false,

        }
    }

    componentDidMount() {
        this.props.getDocCategories();
        

    }

    onPageChange = () => {

    }

    render() {

        if (this.props.categoryList !== null && this.props.categoryList !== undefined
            && this.props.subjectList !== null && this.props.subjectList !== undefined
            && this.props.semesterList !== null && this.props.semesterList !== undefined
        ) {

            this.documentCategoriesList = this.props.categoryList;
            this.documentSubjectList = this.props.subjectList;
            this.documentSemesterList = this.props.semesterList;

            return (
                <div>
                    <Titlebar title="QUẢN LÝ DANH MỤC" />
                    <div className="left-side-bar-layout-content-container">
                        {/* Danh mục bài viết */}
                        <div className="Category_Type_Dropdown" id="management-post-categories-dropdown" onClick={() => this.handlerCategoryTypeDropDownClick("management-post-categories-dropdown", "management-post-categories-container")}>
                            <div>
                                DANH MỤC BÀI VIẾT
                            </div>
                            <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-management-dropdown-btn-element" />
                        </div>

                        <div className="Category_Type_Dropdown_Container" id="management-post-categories-container">
                            <div className="Category_Component_List">
                                <div className="Category_Component">
                                    {/* Danh sach cac danh muc bai viet*/}
                                    <div className="Category_Dropdown margin_top_15px" id="management-post-category-dropdown" onClick={() => this.handlerCategoryTypeDropDownClick("management-post-category-dropdown", "management-post-category-container")}>
                                        <div className="Category_Dropdown_Title">
                                            Danh sách danh mục:
                                        </div>
                                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-management-dropdown-btn-element" />
                                    </div>

                                    <ClickAwayListener onClickAway={() => { this.closeAllPostCategoryListItemActivated() }}>
                                        <div className="Category_Dropdown_Container  margin-top-5px" id="management-post-category-container">
                                            <div className="Custom_Table_Layout">
                                                <div className="Custom_Table_Header">
                                                    <div className="Custom_Table_20percents_Header">Mã danh mục</div>
                                                    <div className="Custom_Table_80percents_Header">Tên danh mục</div>
                                                </div>

                                                {this.state.postCategoriesList.map(item =>
                                                    <div className="Custom_Table_Item" name="Post_Custom_Table_Item" key={item.id} id={"management-post-category-item-" + item.id} onClick={(e) => this.handlerPostCategoryItemClick(e, item.id, item.name)} >
                                                        <div className="Custom_Table_Item_20percents">{item.id}</div>
                                                        <div className="Custom_Table_Item_80percents">{item.title}</div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </ClickAwayListener>
                                    <div className="Category_Buttons_Layout">
                                        <button className="blue-button margin-right-5px" onClick={() => this.handlerClickAddPostCategory()}>Thêm</button>
                                        <button className="white-button margin-right-5px" disabled={!this.state.canClickEditPostCategory} onClick={() => this.handlerClickEditPostCategory()}>Sửa</button>
                                        <button className="red-button" disabled={!this.state.canClickDeletePostCategory} onClick={() => this.handlerClickDeletePostCategory()}>Xóa</button>
                                    </div>
                                </div>
                                <div style={{ height: "30px" }}></div>
                            </div>
                        </div>

                        <div style={{ height: "5px" }}></div>

                        {/* Danh mục tài liệu */}
                        <div className="Category_Type_Dropdown" id="management-parent-doc-categories-dropdown" onClick={() => this.handlerCategoryTypeDropDownClick("management-parent-doc-categories-dropdown", "management-parent-doc-categories-container")}>
                            <div>
                                DANH MỤC TÀI LIỆU
                        </div>
                            <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-management-dropdown-btn-element" />
                        </div>

                        <div className="Category_Type_Dropdown_Container" id="management-parent-doc-categories-container">
                            <div className="Category_Component_List margin-top-5px">
                                <div className="Category_Component">

                                    {/* Danh sach cac danh muc tai lieu*/}
                                    <div className="Category_Dropdown margin_top_15px" id="management-doc-categories-dropdown" onClick={() => this.handlerCategoryTypeDropDownClick("management-doc-categories-dropdown", "management-doc-categories-container")}>
                                        <div className="Category_Dropdown_Title">
                                            Danh sách danh mục:
                                        </div>
                                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-management-dropdown-btn-element" />
                                    </div>

                                    <ClickAwayListener onClickAway={() => { this.closeAllDocCategoryListItemActivated() }}>
                                        <div className="Category_Dropdown_Container  margin-top-5px" id="management-doc-categories-container">
                                            <div className="Custom_Table_Layout">
                                                <div className="Custom_Table_Header">
                                                    <div className="Custom_Table_20percents_Header">Mã danh mục</div>
                                                    <div className="Custom_Table_80percents_Header">Tên danh mục</div>
                                                </div>
                                                <div className="Custom_Table_Layout" >
                                                    {this.documentCategoriesList.map(item =>
                                                        <div className="Custom_Table_Item" name="Document-category_Custom_Table_Item" key={item.id} id={'management-doc-category-item-' + item.id} onClick={(e) => this.handerDocCategoryItemClick(e, item.id, item.name)}>
                                                            <div className="Custom_Table_Item_20percents">{item.id}</div>
                                                            <div className="Custom_Table_Item_80percents">{item.name}</div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* <div className="Category_Buttons_Layout" >
                                            <div className="blue-button margin-right-5px">Thêm</div>
                                            <div className="white-button margin-right-5px">Sửa</div>
                                            <div className="red-button">Xóa</div>
                                        </div> */}
                                        </div>
                                    </ClickAwayListener>

                                    {/* Danh sach cac mon hoc */}
                                    <div className="Category_Dropdown margin_top_15px" id="management-doc-subjects-dropdown" onClick={() => this.handlerCategoryTypeDropDownClick("management-doc-subjects-dropdown", "management-doc-subjects-container")}>
                                        <div className="Category_Dropdown_Title">
                                            Danh sách môn học:
                                        </div>
                                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-management-dropdown-btn-element" />
                                    </div>

                                    <ClickAwayListener onClickAway={() => { this.closeAllSubjectListItemActivated() }}>
                                        <div className="Category_Dropdown_Container  margin-top-5px" id="management-doc-subjects-container">
                                            <div className="Custom_Table_Layout">
                                                <div className="Custom_Table_Header">
                                                    <div className="Custom_Table_20percents_Header">Mã môn học</div>
                                                    <div className="Custom_Table_80percents_Header">Tên môn học</div>
                                                </div>
                                                <div className="Custom_Table_Layout">
                                                    {this.documentSubjectList.map(item =>
                                                        <div className="Custom_Table_Item" name="Subject_Custom_Table_Item" key={item.subjectId} id={'management-subject-item-' + item.subjectId} onClick={(e) => this.handerSubjectItemClick(e, item.subjectId, item.subjectName)}>
                                                            <div className="Custom_Table_Item_20percents">{item.subjectId}</div>
                                                            <div className="Custom_Table_Item_80percents">{item.subjectName}</div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* <div className="Category_Buttons_Layout" >
                                            <div className="blue-button margin-right-5px">Thêm</div>
                                            <div className="white-button margin-right-5px">Sửa</div>
                                            <div className="red-button">Xóa</div>
                                        </div> */}
                                        </div>
                                    </ClickAwayListener>

                                    {/* Danh sach cac hoc ky */}
                                    <div className="Category_Dropdown margin_top_15px" id="management-doc-semesters-dropdown" onClick={() => this.handlerCategoryTypeDropDownClick("management-doc-semesters-dropdown", "management-doc-semesters-container")}>
                                        <div className="Category_Dropdown_Title">
                                            Danh sách học kỳ:
                                        </div>
                                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-management-dropdown-btn-element" />
                                    </div>

                                    <ClickAwayListener onClickAway={() => { this.closeAllSemesterListItemActivated() }}>
                                        <div className="Category_Dropdown_Container  margin-top-5px" id="management-doc-semesters-container">
                                            <div className="Custom_Table_Layout">
                                                <div className="Custom_Table_Header">
                                                    <div className="Custom_Table_20percents_Header">Mã học kỳ</div>
                                                    <div className="Custom_Table_40percents_Header">Học kỳ</div>
                                                    <div className="Custom_Table_40percents_Header">Năm học</div>
                                                </div>
                                                <div className="Custom_Table_Layout">
                                                    {this.documentSemesterList.map(item =>
                                                        <div className="Custom_Table_Item" key={item.semesterId} name="Semester_Custom_Table_Item" id={'management-semester-item-' + item.semesterId} onClick={(e) => this.handerSemesterItemClick(e, item.semesterId, item.semesterNo)}>
                                                            <div className="Custom_Table_Item_20percents">{item.semesterId}</div>
                                                            <div className="Custom_Table_Item_40percents">{item.semesterNo}</div>
                                                            <div className="Custom_Table_Item_40percents">{item.academicYear}</div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="Category_Buttons_Layout" >
                                                <div className="blue-button margin-right-5px">Thêm</div>
                                                <div className="white-button margin-right-5px">Sửa</div>
                                                <div className="red-button">Xóa</div>
                                            </div>
                                        </div>
                                    </ClickAwayListener>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Popup for add new post category */}
                    <CustomModal
                        shadow={true}
                        type="custom"
                        title="Thêm danh mục bài viết"
                        open={this.isAddPostCategoryPopupOpen}
                        closeModal={() => { this.isAddPostCategoryPopupOpen = false; this.setState({}); }}
                    >
                        <div className="Custom_Modal_Body">
                            <div className="gray-label"> Tên danh mục mới: </div>
                            <input type="text" className="form-input" placeholder="Nhập tên danh mục ..." />
                        </div>

                        <div className="Custom_Modal_Footer">
                            <div className="gray-label">Xác nhận?</div>
                            <div style={{ display: "flex" }}>
                                <button className="blue-button margin-right-5px" onClick={() => this.handlerVerifyAddNewPostCategoryConfirmation()}>OK</button>
                                <button className="white-button" onClick={() => { this.isAddPostCategoryPopupOpen = false; this.setState({}) }}>Cancel</button>
                            </div>
                        </div>
                    </CustomModal>

                    {/* Popup for update a new post category */}
                    <CustomModal
                        shadow={true}
                        type="custom"
                        title="Cập nhật danh mục bài viết"
                        open={this.isEditPostCategoryPopupOpen}
                        closeModal={() => { this.isEditPostCategoryPopupOpen = false; this.setState({}); }}
                    >
                        <div className="Custom_Modal_Body">
                            <div className="gray-label"> Tên danh mục: </div>
                            <input type="text" className="form-input" defaultValue={this.selected_category_name} />
                        </div>

                        <div className="Custom_Modal_Footer">
                            <div className="gray-label">Xác nhận?</div>
                            <div style={{ display: "flex" }}>
                                <button className="blue-button margin-right-5px" onClick={() => this.handlerVerifyEditPostCategoryConfirmation()}>OK</button>
                                <button className="white-button" onClick={() => { this.isEditPostCategoryPopupOpen = false; this.setState({}) }}>Cancel</button>
                            </div>
                        </div>
                    </CustomModal>

                    {/* Popup for verifying delete post category */}
                    <CustomModal
                        shadow={true}
                        type="confirmation"
                        title={this.notifyHeader}
                        text={this.notifyContent}
                        open={this.isVerifyDeletePostCategoryPopupOpen}
                        closeModal={() => { this.isVerifyDeletePostCategoryPopupOpen = false; this.setState({}); }}
                    >
                        <button className="blue-button margin-right-5px" onClick={() => this.handlerVerifyDeletePostCategoryConfirmation()}>OK</button>
                        <button className="white-button" onClick={() => { this.isVerifyDeletePostCategoryPopupOpen = false; this.setState({}) }}>Cancel</button>
                    </CustomModal>

                    {/* Custom for notifing success */}
                    <CustomModal
                        open={this.isNotifySuccessOpen}
                        shadow={true}
                        title={this.notifyHeader}
                        text={this.notifyContent}
                        type="alert_success"
                        closeModal={() => { this.isNotifySuccessOpen = false; this.setState({}) }}
                    >
                    </CustomModal>

                    {/* Custom for notifing fail */}
                    <CustomModal
                        open={this.isNotifyFailOpen}
                        shadow={true}
                        title={this.notifyHeader}
                        text={this.notifyContent}
                        type="alert_fail"
                        closeModal={() => { this.isNotifyFailOpen = false; this.setState({}) }}
                    >
                    </CustomModal>

                </div >
            );
        }
        return <></>
    }


    //#region for dropdown UX. 
    handlerCategoryTypeDropDownClick = (dropdown_id, container_id) => {
        let dropdown = document.getElementById(dropdown_id);
        let container = document.getElementById(container_id);

        if (container.style.display === "none") {
            container.style.display = "block";
            dropdown.style.width = "100%";
        }
        else {
            container.style.display = "none";
            dropdown.style.width = "30%";
        }
    }

    //#endregion

    //#region for Post category area:
    handlerPostCategoryItemClick = (e, id, name) => {
        let all_item = document.getElementsByName("Post_Custom_Table_Item");

        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "Custom_Table_Item";
        }

        let category_item = document.getElementById("management-post-category-item-" + id);
        // category_item.className
        category_item.className = "Custom_Table_Item_Activated";

        this.selected_category_id = id;
        // this.selected_category_name = name;

        this.setState({
            canClickDeletePostCategory: true,
            canClickEditPostCategory: true
        });

    }

    closeAllPostCategoryListItemActivated = () => {
        let all_item = document.getElementsByName("Post_Custom_Table_Item");
        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "Custom_Table_Item";
        }
        this.setState({
            canClickDeletePostCategory: false,
            canClickEditPostCategory: false
        });
    }

    //Add post category area:
    handlerClickAddPostCategory = () => {
        this.isAddPostCategoryPopupOpen = true;
        this.setState({});
    }

    handlerVerifyAddNewPostCategoryConfirmation = () => {
        this.notifyHeader = "Thành công";
        this.notifyContent = "Thêm danh mục bài viết thành công!";
        this.isAddPostCategoryPopupOpen = false;
        this.isNotifySuccessOpen = true;
        this.setState({});
    }

    //Edit post category item
    handlerClickEditPostCategory = () => {
        this.isEditPostCategoryPopupOpen = true;
        this.setState({});
    }

    handlerVerifyEditPostCategoryConfirmation = () => {
        this.notifyHeader = "Thành công";
        this.notifyContent = "Cập nhật danh mục bài viết thành công!";
        this.isEditPostCategoryPopupOpen = false;
        this.isNotifySuccessOpen = true;
        this.setState({});
    }

    //Delete post category item
    handlerClickDeletePostCategory = () => {
        this.notifyHeader = "Xác nhận?";
        this.notifyContent = "Xác nhận xóa danh mục bài viết được chọn?";
        this.isVerifyDeletePostCategoryPopupOpen = true;
        this.setState({});
    }

    handlerVerifyDeletePostCategoryConfirmation = () => {
        this.notifyHeader = "Thành công";
        this.notifyContent = "Xóa danh mục bài viết thành công!";
        this.isVerifyDeletePostCategoryPopupOpen = false;
        this.isNotifySuccessOpen = true;
        this.setState({});
    }
    //#endregion

    //#region for Doc category area:
    handerDocCategoryItemClick = (e, id, name) => {
        let all_item = document.getElementsByName("Document-category_Custom_Table_Item");

        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "Custom_Table_Item";
        }

        let category_item = document.getElementById("management-doc-category-item-" + id);
        // category_item.className
        category_item.className = "Custom_Table_Item_Activated";

        this.selected_category_id = id;
        // this.selected_category_name = name;

        this.setState({
            canClickDeletePostCategory: true,
            canClickEditPostCategory: true
        });
    }

    closeAllDocCategoryListItemActivated = () => {
        let all_item = document.getElementsByName("Document-category_Custom_Table_Item");
        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "Custom_Table_Item";
        }
        this.setState({
            canClickDeleteDocCategory: false,
            canClickEditDocCategory: false
        });
    }

    handerSubjectItemClick = (e, id, name) => {
        let all_item = document.getElementsByName("Subject_Custom_Table_Item");

        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "Custom_Table_Item";
        }

        let category_item = document.getElementById("management-subject-item-" + id);
        // category_item.className
        category_item.className = "Custom_Table_Item_Activated";

        this.selected_category_id = id;
        // this.selected_category_name = name;

        this.setState({
            canClickDeleteSubject: true,
            canClickEditSubject: true
        });
    }

    closeAllSubjectListItemActivated = () => {
        let all_item = document.getElementsByName("Subject_Custom_Table_Item");
        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "Custom_Table_Item";
        }
        this.setState({
            canClickDeleteSubject: false,
            canClickEditSubject: false
        });
    }


    handerSemesterItemClick = (e, id, name) => {
        let all_item = document.getElementsByName("Semester_Custom_Table_Item");

        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "Custom_Table_Item";
        }

        let category_item = document.getElementById("management-semester-item-" + id);
        // category_item.className
        category_item.className = "Custom_Table_Item_Activated";

        this.selected_category_id = id;
        // this.selected_category_name = name;

        this.setState({
            canClickDeleteSemester: true,
            canClickEditSemester: true
        });
    }

    closeAllSemesterListItemActivated = () => {
        let all_item = document.getElementsByName("Semester_Custom_Table_Item");
        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "Custom_Table_Item";
        }
        this.setState({
            canClickDeleteSemester: false,
            canClickEditSemester: false
        });
    }
    //#endregion

}


//#region for Redux
const mapStateToProps = (state) => {
    return {
        categoryList: state.doc.categories,
        subjectList: state.doc.subjects,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getDocCategories,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryManagement));
//#endregion
