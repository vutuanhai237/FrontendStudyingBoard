
const fakeWallPaper = [
    {
        title: "WallPage 1",
        caption: "ABCDDDDÂDDDDDDDDDDDDDDDDDDDĐ",
        assets: 'https://static1.bestie.vn/Mlog/ImageContent/201902/bi-quyet-giup-ban-tro-thanh-co-gai-diu-dang-nu-tinh-c59b59.jpg',
        date: "21.02.2020"
    },
    {
        title: "WallPage 2",
        caption: "2222222222222222",
        assets: 'https://static1.bestie.vn/Mlog/ImageContent/201902/bi-quyet-giup-ban-tro-thanh-co-gai-diu-dang-nu-tinh-c59b59.jpg',
        date: "21.02.2020"
    }
    
]


const initialState = {
    topWallPaper: fakeWallPaper,
}

function HomeReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default HomeReducer;