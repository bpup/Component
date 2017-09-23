

function getUserInfoRequest() {
    return {
        type: 'GET_USER_INFO_REQUEST'
    }
}

function getUserInfoSuccess(userInfo) {
    return {
        type: 'GET_USER_INFO_SUCCESS',
        userInfo: userInfo
    }
}

function getUserInfoFail() {
    return {
        type: 'GET_USER_INFO_FAIL'
    }
}

export default function getUserInfo() {
    return function (dispatch) {
        dispatch(getUserInfoRequest());

        return fetch('http://localhost:8080/user.json')
            .then((response => {
                return response.json()
            }))
            .then((json) => {
                    dispatch(getUserInfoSuccess(json))
                }
            ).catch(
                () => {
                    dispatch(getUserInfoFail());
                }
            )
    }
}