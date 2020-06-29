

const fakeAccount = [
    {
        username: "1",
        password: "1",
    },
    {
        username: "2",
        password: "2",
    }
]


const initialState = {
    accounts: fakeAccount,
}

function LoginRegisterReducer(state = initialState, action) {
    switch (action.type) {
        case "register/add_account":
            let new_account = {username: action.payload.username, password: action.payload.password};
            state.accounts.push(new_account);
            return {...state, accounts: state.accounts};
        default:
            return initialState;
    }
}

export default LoginRegisterReducer;