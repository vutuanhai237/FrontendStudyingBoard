import React, { Component } from 'react'
// import './PostBrowser.scss'
import 'components/common/Paginator/Paginator.scss'


class Paginator extends Component {
    constructor(props) {
        super(props);

        this.maxItemPerPage = 10; //số lượng tối đa item mỗi page
        this.numPageShown = 5; //số page được show trên thanh paginator, mặc định là 5, hiện tại chưa cho đổi.
        this.pageCount = 0;
        this.currentPage = 1;
        this.arrayShownPages = [1, 2, 3, 4, 5]; //define which number will be output
    }

    componentDidMount() {
    }

    // UI/UX when click on the pagination item
    onClickPaginationElement = (page_number, action) => {

        console.log(page_number);
        let arrayShownPages = this.arrayShownPages;

        //handler action
        switch (action) {
            case "first":
                page_number = 1;
                break;
            case "prev":
                if (page_number > 1)
                    page_number--;
                break;
            case "next":
                if (page_number < this.props.config.pageCount)
                    page_number++;
                break;
            case "last":
                page_number = this.props.config.pageCount;
                break;
            default:
                break;
        }

        if (!(this.props.config.pageCount < this.props.config.numPagesShown)) {
            //handler page click
            switch (page_number) {
                //set number of page in the midde => update array shown pages
                case 1:
                    arrayShownPages.splice(0, arrayShownPages.length);
                    arrayShownPages.push(page_number);
                    for (let i = 1; i < arrayShownPages.length; i++) {
                        arrayShownPages.push(page_number + i);
                    }
                    break;
                case 2:
                    arrayShownPages.splice(0, arrayShownPages.length);
                    arrayShownPages.push(page_number - 1);
                    arrayShownPages.push(page_number);
                    arrayShownPages.push(page_number + 1);
                    arrayShownPages.push(page_number + 2);
                    arrayShownPages.push(page_number + 3);
                    break;
                case this.props.config.pageCount:
                    arrayShownPages.splice(0, arrayShownPages.length);
                    arrayShownPages.push(page_number - 4);
                    arrayShownPages.push(page_number - 3);
                    arrayShownPages.push(page_number - 2);
                    arrayShownPages.push(page_number - 1);
                    arrayShownPages.push(page_number);
                    break;
                case this.props.config.pageCount - 1:
                    arrayShownPages.splice(0, arrayShownPages.length);
                    arrayShownPages.push(page_number - 3);
                    arrayShownPages.push(page_number - 2);
                    arrayShownPages.push(page_number - 1);
                    arrayShownPages.push(page_number);
                    arrayShownPages.push(page_number + 1);
                    break;
                default:
                    {
                        if (this.props.config.pageCount <= 5) {
                            break;
                        }
                        else {
                            arrayShownPages.splice(0, arrayShownPages.length);
                            arrayShownPages.push(page_number - 2);
                            arrayShownPages.push(page_number - 1);
                            arrayShownPages.push(page_number);
                            arrayShownPages.push(page_number + 1);
                            arrayShownPages.push(page_number + 2);
                        }
                    }
            }
        }
        //clear current list then add what we need
        this.currentPage = page_number;
        this.setState({});

    }

    render() {

        if (!this.props.config.numPagesShown) {
            this.config.numPageShown = 5;
        }

        let arrayShownPages = this.arrayShownPages;
        
        if (this.props.config) {
            if (this.props.config.pageCount < this.props.config.numPagesShown) {
                arrayShownPages.splice(0, arrayShownPages.length);
                for (let i = 1; i <= this.props.config.pageCount; i++) {
                    arrayShownPages.push(i);
                }
            }
            else {
                if (this.currentPage === 1) {
                    arrayShownPages.splice(0, arrayShownPages.length);
                    for (let i = 1; i <= this.props.config.numPagesShown; i++) {
                        arrayShownPages.push(i);
                    }
                }
            }

            let shownPages = arrayShownPages.map(page_number =>
                <div className="custom-page-item" id={page_number} key={page_number} >
                    {
                        page_number !== this.currentPage ?
                            < div className="deactivated-page" onClick={() => { this.onClickPaginationElement(page_number, ""); this.props.config.changePage(page_number); }}>
                                {page_number}
                            </div> :
                            <div className="activated-page" onClick={() => this.onClickPaginationElement(page_number, "")}>
                                {page_number}
                            </div>
                    }
                </div >
            );

            return (

                <div className="custom-paginator" >
                    <div className="first-page" onClick={() => { this.onClickPaginationElement(this.currentPage, "first"); this.props.config.changePage(1); }} > first</div>
                    <div className="prev-page" onClick={() => { this.onClickPaginationElement(this.currentPage, "prev"); this.props.config.changePage(this.currentPage); }}>Prev </div>
                    {shownPages}
                    <div className="next-page" onClick={() => { this.onClickPaginationElement(this.currentPage, "next"); this.props.config.changePage(this.currentPage) }}> Next</div>
                    <div className="last-page" onClick={() => { this.onClickPaginationElement(this.currentPage, "last"); this.props.config.changePage(this.props.config.pageCount); }}>last </div>
                </div>

            );
        }
        else return <></>;
    }


}
export default Paginator;

