import React, { Component } from 'react'
// import './Admin_PostBrowser.scss'
import '../../shared_components/Paginator/Paginator.scss'


class Paginator extends Component {
    constructor(props) {
        super(props);

        this.maxItemPerPage = this.props.config.maxItemPerPage; //item mỗi page
        this.numPageShown = this.props.config.numPageShown; //số page được show trên thanh paginator
        this.rawData = this.props.config.rawData; //array được truyền vào
        // this.min_top = this.props.config.min_top; //khoảng cách top tối thiểu

        this.state = {
            currentInteractList: [],
            arrayShownPages: [1, 2, 3, 4, 5], //define which number will be output
            currentPage: 1,
            pageCount: 0,
        }
    }

    componentDidMount() {
        //get true pageCount
        if (this.rawData.length % this.maxItemPerPage === 0) {
            this.rawData.pageCount = Math.floor(this.rawData.length / this.maxItemPerPage);
        }
        else {
            this.state.pageCount = Math.floor(this.rawData.length / this.maxItemPerPage) + 1;
        }

        //initial array of page you want to render
        if (this.state.pageCount < this.pageShowns) {
            this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
            for (let i = 1; i <= this.state.pageCount; i++) {
                this.state.arrayShownPages.push(i);
            }
            for (let i = this.pageShowns; i > this.state.pageCount; i--) {
                this.state.arrayShownPages.push("...");
            }
        }
        this.state.currentInteractList.splice(0, this.state.currentInteractList.length);

        //get true shown page //clear current list then add what we need
        if (1 === this.state.pageCount) {
            for (let i = 0; i < this.rawData.length; i++)
                this.state.currentInteractList.push(this.rawData[i])
        }
        else {
            for (let i = 0; i < this.maxItemPerPage; i++)
                this.state.currentInteractList.push(this.rawData[i])
        }
        this.setState(this.state);
    }

    onClickPaginationElement = (page_number, action) => {

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
                if (page_number < this.state.pageCount)
                    page_number++;
                break;
            case "last":
                page_number = this.state.pageCount;
                break;
            default:
                break;
        }

        //handler page click
        switch (page_number) {
            //set number of page in the midde => update array shown pages
            case 1:
                this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
                this.state.arrayShownPages.push(page_number);
                this.state.arrayShownPages.push(page_number + 1);
                this.state.arrayShownPages.push(page_number + 2);
                this.state.arrayShownPages.push(page_number + 3);
                this.state.arrayShownPages.push(page_number + 4);
                break;
            case 2:
                this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
                this.state.arrayShownPages.push(page_number - 1);
                this.state.arrayShownPages.push(page_number);
                this.state.arrayShownPages.push(page_number + 1);
                this.state.arrayShownPages.push(page_number + 2);
                this.state.arrayShownPages.push(page_number + 3);
                break;
            case this.state.pageCount:
                this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
                this.state.arrayShownPages.push(page_number - 4);
                this.state.arrayShownPages.push(page_number - 3);
                this.state.arrayShownPages.push(page_number - 2);
                this.state.arrayShownPages.push(page_number - 1);
                this.state.arrayShownPages.push(page_number);
                break;
            case this.state.pageCount - 1:
                this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
                this.state.arrayShownPages.push(page_number - 3);
                this.state.arrayShownPages.push(page_number - 2);
                this.state.arrayShownPages.push(page_number - 1);
                this.state.arrayShownPages.push(page_number);
                this.state.arrayShownPages.push(page_number + 1);
                break;
            default:
                {
                    if (this.state.pageCount <= 5) {
                        break;
                    }
                    else {
                        this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
                        this.state.arrayShownPages.push(page_number - 2);
                        this.state.arrayShownPages.push(page_number - 1);
                        this.state.arrayShownPages.push(page_number);
                        this.state.arrayShownPages.push(page_number + 1);
                        this.state.arrayShownPages.push(page_number + 2);
                    }
                }
        }

        //clear current list then add what we need
        this.state.currentInteractList.splice(0, this.state.currentInteractList.length);

        if (page_number === this.state.pageCount) {
            for (let i = (page_number - 1) * this.maxItemPerPage; i < this.rawData.length; i++)
                this.state.currentInteractList.push(this.rawData[i])
        }
        else {
            for (let i = (page_number - 1) * this.maxItemPerPage; i < (page_number - 1) * this.maxItemPerPage + this.maxItemPerPage; i++)
                this.state.currentInteractList.push(this.rawData[i])
        }

        this.setState({
            currentPage: page_number
        })
    }

    render() {

        // let passToParentData = this.state.currentInteractList;

        let shownPages = this.state.arrayShownPages.map(page_number =>
            <div className="Page_Item" id={page_number} key={page_number} >
                {
                    page_number !== this.state.currentPage
                        ?
                        <div className="Deactivated_Page" onClick={() => { this.props.config.changePage(this.state.currentInteractList); this.onClickPaginationElement(page_number, "") }}>
                            {page_number}
                        </div>
                        :
                        <div className="Activated_Page" onClick={() => this.onClickPaginationElement(page_number, "")}>
                            {page_number}
                        </div>
                }
            </div>
        );

        return (
            <div className="Paginator" style={{ position: "absolute", bottom: this.props.config.bottom }}>
                {/* {console.log(this.min_top)} */}
                <div className="First_Page" onClick={() => { this.props.config.changePage(this.state.currentInteractList); this.onClickPaginationElement(this.state.currentPage, "first") }} > first</div>
                <div className="Prev_Page" onClick={() => { this.props.config.changePage(this.state.currentInteractList); this.onClickPaginationElement(this.state.currentPage, "prev") }}>Prev </div>
                {shownPages}
                <div className="Next_Page" onClick={() => { this.props.config.changePage(this.state.currentInteractList); this.onClickPaginationElement(this.state.currentPage, "next") }}> Next</div>
                <div className="Last_Page" onClick={() => { this.props.config.changePage(this.state.currentInteractList); this.onClickPaginationElement(this.state.currentPage, "last") }}>last </div>
            </div>
        );
    }
}
export default Paginator;