import React, { Component } from 'react'
// import './Management_PostBrowser.scss'
import 'component/shared_components/Paginator/Paginator.scss'


class Paginator extends Component {
    constructor(props) {
        super(props);

        this.maxItemPerPage = this.props.config.maxItemPerPage; //số lượng tối đa item mỗi page
        this.numPageShown = this.props.config.numPagesShown; //số page được show trên thanh paginator, mặc định là 5, hiện tại chưa cho đổi.
        this.pageCount = this.props.config.pageCount;
        this.currentPage = 1;
        this.state = {
            arrayShownPages: [1, 2, 3, 4, 5], //define which number will be output
            currentPage: 1,
            // pageCount: 0,
        }
    }

    componentDidMount() {

        //initial array of page you want to render
        // if (this.props.config.pageCount < this.props.config.numPagesShown) {
        //     this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
        //     for (let i = 1; i <= this.props.config.pageCount; i++) {
        //         this.state.arrayShownPages.push(i);
        //     }
        // }
        // console.log(this.props.config.pageCount);
        // this.setState({});

    }

    // UI/UX when click on the pagination item
    onClickPaginationElement = (page_number, action) => {

        console.log(page_number);
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
                case this.props.config.pageCount:
                    this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
                    this.state.arrayShownPages.push(page_number - 4);
                    this.state.arrayShownPages.push(page_number - 3);
                    this.state.arrayShownPages.push(page_number - 2);
                    this.state.arrayShownPages.push(page_number - 1);
                    this.state.arrayShownPages.push(page_number);
                    break;
                case this.props.config.pageCount - 1:
                    this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
                    this.state.arrayShownPages.push(page_number - 3);
                    this.state.arrayShownPages.push(page_number - 2);
                    this.state.arrayShownPages.push(page_number - 1);
                    this.state.arrayShownPages.push(page_number);
                    this.state.arrayShownPages.push(page_number + 1);
                    break;
                default:
                    {
                        if (this.props.config.pageCount <= 5) {
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
        }
        //clear current list then add what we need
        this.currentPage = page_number;
        this.setState({});

    }

    render() {

        if (this.props.config.pageCount < this.props.config.numPagesShown) {
            this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
            for (let i = 1; i <= this.props.config.pageCount; i++) {
                this.state.arrayShownPages.push(i);
            }
        }
        else {
            if (this.currentPage === 1) {
                this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
                for (let i = 1; i <= this.props.config.numPagesShown; i++) {
                    this.state.arrayShownPages.push(i);
                }
            }
        }

        let shownPages = this.state.arrayShownPages.map(page_number =>
            <div className="Page_Item" id={page_number} key={page_number} >
                {
                    page_number !== this.currentPage ?
                        < div className="Deactivated_Page" onClick={() => { this.onClickPaginationElement(page_number, ""); this.props.config.changePage(page_number); }}>
                            {page_number}
                        </div> :
                        <div className="Activated_Page" onClick={() => this.onClickPaginationElement(page_number, "")}>
                            {page_number}
                        </div>
                }
            </div >
        );

        return (
            <div className="Paginator" style={{ position: "absolute", bottom: this.props.config.bottom }}>
                <div className="First_Page" onClick={() => { this.onClickPaginationElement(this.currentPage, "first"); this.props.config.changePage(1); }} > first</div>
                <div className="Prev_Page" onClick={() => { this.onClickPaginationElement(this.currentPage, "prev"); this.props.config.changePage(this.currentPage); }}>Prev </div>
                {shownPages}
                <div className="Next_Page" onClick={() => { this.onClickPaginationElement(this.currentPage, "next"); this.props.config.changePage(this.currentPage) }}> Next</div>
                <div className="Last_Page" onClick={() => { this.onClickPaginationElement(this.currentPage, "last"); this.props.config.changePage(this.props.config.pageCount); }}>last </div>
            </div>
        );

    }
}
export default Paginator;

