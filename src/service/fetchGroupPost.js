import {fetchTopPost} from "../action/homeAction"
const toppost = [
    {
        title: "A",
    },
    {
        title: "B",
    },
]

export default function fetchGroupPost() {
    return dispatch => {
        dispatch(fetchTopPost(toppost));
        return toppost;
    }
}