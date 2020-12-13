export const HOST = "bhtweb.herokuapp.com"
export const PORT = "localhost:8080/bhtweb"


export const summaryItemType = { approving: "APPROVING", normal: "NORMAL", mySelf: "MY_SELF" }
export const approvingType = { pending: "PENDING", notApproved: "NOT_APPROVED", waitingForFeedback: "WAITING_FOR_FEEDBACK"}

export function redirect(url) {
    const createHistory = require("history").createBrowserHistory;
    let history = createHistory();
    history.push(url);
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
}

//#endregion
// export const AppConsts = {
//     // userManagement: {
//     //     defaultAdminUserName: 'admin',
//     // },
//     // localization: {
//     //     defaultLocalizationSourceName: 'L11_HelloWork',
//     // },
//     authorization: {
//         encrptedAuthTokenName: 'enc_auth_token',
//     },
//     appBaseUrl: process.env.REACT_APP_APP_BASE_URL,
//     remoteServiceBaseUrl: process.env.REACT_APP_REMOTE_SERVICE_BASE_URL,
// };

// home



