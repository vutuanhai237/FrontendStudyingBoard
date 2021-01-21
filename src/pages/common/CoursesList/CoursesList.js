/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

//styles
import 'layouts/Layout.scss'
import './CoursesList.scss'

//utils
import { summaryItemType } from 'constants.js'
import { getSearchParamByName, setSearchParam } from 'utils/urlUtils'

//services
import { getPostsList } from "redux/services/postServices"
import { getPostCategories } from "redux/services/postCategoryServices"

//components
import ComboBox from 'components/common/Combobox/Combobox';
import Loader from 'components/common/Loader/Loader'

//resource
import dropdownIcon from 'assets/icons/12x12/dropdown_12x12.png'

class PostsList extends Component {
    constructor(props) {
        super();

        this.maxItemPerPage = 5;
        // this.daiCuongSubjectList = [];
        // this.coSoNhomNganhSubjectList = [];
        // this.allSubjectList = [];

        this.falcutyFilter = [
            { id: 1, name: "Tất cả" },
            { id: 2, name: "Công nghệ phần mềm" },
            { id: 3, name: "Bộ môn toán/lý" }
        ]



    }

    componentDidMount() {
        let category = getSearchParamByName('category');
        if (!category) { setSearchParam('category', '1') }
    }

    //combobox
    onFilterOptionChanged = (selectedOption) => {
        setSearchParam("category", selectedOption.id);
        let category = getSearchParamByName('category');

        // co mot API de goi danh sach cac mon hoc theo muc

        this.setState({});
    }

    coursesTypeTitle = (title, subTitle) => {
        return <>


        </>
    }

    coursesTypeTitle2 = (title, subTitle) => {
        return <>


        </>
    }

    render() {

        let daiCuongSubjectList = <></>;
        let coSoNhomNganhSubjectList = <></>;
        let allSubjectList = <></>;



        if (this.props.daiCuongSubjectList) {
            daiCuongSubjectList = this.props.daiCuongSubjectList.map((subjectItem) => (
                {}
            ))
        }

        return (
            <div className="nm-bl-layout" >

                <div className="course-description">
                    <p>
                        Các khoá học  MIỄN PHÍ được biên soạn và cập nhật liên tục bởi các thành viên và cộng tác viên Ban học tập Đoàn khoa Công nghệ phần mềm. Nếu có bất kỳ góp ý nào cho các Khoá học hoặc có nguyên vọng đóng góp, tài trợ cho các khoá học,
                        vui lòng liên hệ email:&nbsp;
                    </p>
                    <a href="bht.cnpm.uit@gmail.com" className="margin-aut">bht.cnpm.uit@gmail.com</a>
                </div>

                <div className="decoration-line mg-bottom-10px" />
                {/* Đại cương */}
                <div className="course-type-title">
                    <div className="display-flex">
                        <div className="rect-decoration" />
                        <div>
                            <div className="title">
                                ĐẠI CƯƠNG:
                            </div>
                            <div className="sub-title">
                                Các năm học năm nhất, năm 2
                            </div>
                        </div>
                    </div>
                    <div className="show-all-button-container">
                        <div className="white-button">
                            <div className="display-flex">
                                <div className="show-all-text">
                                    Xem tất cả
                        </div>
                                <img className="show-all-icon icon-10x10" src={dropdownIcon} ></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cơ sở nhóm ngành */}
                <div className="course-type-title">
                    <div className="display-flex">
                        <div className="rect-decoration" />
                        <div>
                            <div className="title">
                                CƠ SỞ NHÓM NGÀNH:
                            </div>
                            <div className="sub-title">
                                Các năm học năm nhất, năm 2
                            </div>
                        </div>
                    </div>
                    <div className="show-all-button-container">
                        <div className="white-button">
                            <div className="display-flex">
                                <div className="show-all-text">
                                    Xem tất cả
                        </div>
                                <img className="show-all-icon icon-10x10" src={dropdownIcon} ></img>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    
                }

                {/* Danh sách môn học */}
                <div className="course-type-title">
                    <div className="display-flex">
                        <div className="rect-decoration" />
                        <div>
                            <div className="title">
                                DANH SÁCH MÔN HỌC:
                            </div>
                            <div className="sub-title">
                                Danh sách tất cả các môn học đã được biên soạn khoá học
                            </div>
                        </div>
                    </div>
                    <div className="show-all-combobox-container">
                        <div className="display-flex">
                            <div className="filter-label text-align-right mg-right-5px">Khoa/bộ môn:</div>
                            <div style={{ marginLeft: "5px" }}>
                                <ComboBox
                                    options={this.falcutyFilter}
                                    placeHolder="Chọn khoa/bộ môn"
                                    onOptionChanged={(selectedOption) => this.onFilterOptionChanged(selectedOption)}
                                    id="courses-list-falcuty-filter-combobox"
                                ></ComboBox></div>
                        </div>
                    </div>
                </div>




                <div className="mg-top-10px" />

                {
                    this.props.isListLoading ?
                        < Loader /> :
                        <>{ }</>
                }
            </div >
        );
    }
}

const mapStateToProps = (state) => {

    return {

        //Cac data
        daiCuongSubjectList: state.post.postsList.data,
        falcutyCategories: state.post_category.categories.data,
        coSoNhomNganhSubjectList: state.post_category.categories.data,
        allSubjectList: state.post_category.categories.data,

        //Cac thong tin loading
        isDaiCuongSubjectLoading: state.post.postsList.isLoading,
        isFalcutyCategoriesLoading: state.post_category.categories.isLoading,
        isCoSoNhomNganhSubjectLoading: state.post_category.categories.isLoading,
        isAllSubjectLoading: state.post_category.categories.isLoading,


    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostsList, getPostCategories
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsList));
