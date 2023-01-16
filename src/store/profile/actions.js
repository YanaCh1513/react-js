
export const ACTION_SWITCH_NAME = 'profile/switch_name'
export const ACTION_CHANGE_NAME = 'profile/change_name'
export const ACTION_MAKE_AUTH = 'profile/auth'

export const withPayLoad = (actionName, payload) => {
    return { type: actionName, payload: payload }
}

export const changeShowName = () => withPayLoad(ACTION_SWITCH_NAME)
export const changeName = (name) => withPayLoad(ACTION_CHANGE_NAME, name)
export const makeAuth = (isAuth) => withPayLoad(ACTION_MAKE_AUTH, isAuth)

export default {
    changeShowName,
    changeName,
    makeAuth
}

