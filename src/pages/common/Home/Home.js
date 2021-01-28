/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

//styles
import 'layouts/Layout.scss'
import './Home.scss'

//utils
import { itemType } from 'constants.js'
import { getSearchParamByName, setSearchParam } from 'utils/urlUtils'

//services

//components
import Loader from 'components/common/Loader/Loader'
import SubjectItem from 'components/course/SubjectItem'

class Home extends Component {
    constructor(props) {
        super();
        this.falcutyFilter = [
            { id: 1, name: "Tất cả" },
            { id: 2, name: "Công nghệ phần mềm" },
            { id: 3, name: "Bộ môn toán/lý" }
        ]
    }

    componentDidMount() {

        //get 4 loai

    }

    //combobox
    onFilterOptionChanged = (selectedOption) => {
        setSearchParam("category", selectedOption.id);

    }

    render() {

        let newestPostsList = <></>;
        let trendingDocumentsList = <></>;
        let newActicity = <></>;
        let allSubjectList = <></>;

        // if (!this.props.newestPostData) {
        //     console.log(this.props.daiCuongSubjectList)
        //     newestPostsList =
        //         <div className="subject-item-container">
        //             {this.props.newestPostsListData.map(subjectItem => {
        //                 return <SubjectItem
        //                     id={subjectItem.id}
        //                     image={subjectItem.image}
        //                     name={subjectItem.name}
        //                     type={itemType.normal}
        //                 ></SubjectItem>
        //             }
        //             )}
        //         </div>
        // }
        // else {
        //     newestPostsList = <Loader />
        // }

        return (
            <div className="nm-bl-layout" >
                <div className="decoration-line mg-bottom-10px" />
                {/* Đại cương */}
                <div className="course-type-title" >
                    <div className="d-flex">
                        <div className="rect-decoration" />
                        <div>
                            <div className="title">
                                BÀI VIẾT MỚI NHẤT:
                            </div>
                            {/* <div className="sub-title">
                                Các năm học năm nhất, năm 2
                            </div> */}
                        </div>
                    </div>
                </div>

                <div>
                    {newestPostsList}
                </div>

                {/* Cơ sở nhóm ngành */}
                <div className="course-type-title">
                    <div className="d-flex">
                        <div className="rect-decoration" />
                        <div>
                            <div className="title">
                                CƠ SỞ NHÓM NGÀNH:
                            </div>
                            {/* <div className="sub-title">
                                Các năm học năm nhất, năm 2
                            </div> */}
                        </div>
                    </div>
                </div>

                <div>
                    {/* {coSoNhomNganhSubjectList} */}
                </div>

                {/* Danh sách môn học */}
                <div className="course-type-title">
                    <div className="d-flex">
                        <div className="rect-decoration" />
                        <div>
                            <div className="title">
                                DANH SÁCH MÔN HỌC:
                            </div>
                            {/* <div className="sub-title">
                                Danh sách tất cả các môn học đã được biên soạn khoá học
                            </div> */}
                        </div>
                    </div>

                </div>

                <div>
                    {/* {allSubjectList} */}
                </div>

                <div className="mg-top-10px" />

            </div >
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        // trendingDocumentsList: state.home.
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
