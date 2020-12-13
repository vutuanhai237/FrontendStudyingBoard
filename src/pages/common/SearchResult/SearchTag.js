import React, { Component } from "react";
import Tag from "components/common/Tag/Tag"
class SearchTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags:
                [
                    {
                        id: 1,
                        content: "tag1"
                    },
                    {
                        id: 2,
                        content: "tag2"
                    },
                    {
                        id: 3,
                        content: "tag2"
                    }
                ],
        }
    }

    navigateToSeachByTag = (id) => { window.location.pathname = `search-tag/${id}/post` }

    render() {

        return (
            <div className="margin-top-10px">
                {this.state.tags.map(item =>
                    <Tag isReadOnly={true} tag={item} onTagClick={(id) => this.navigateToSeachByTag(id)} />
                )
                }
            </div>
        );
    }
}

export default SearchTag;
