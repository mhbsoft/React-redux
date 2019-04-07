
const ADD_GUN = '加机关枪'
const REM_GUN = '减机关枪'

//reducer， 拿到现在的状态，跟action
export function counter(state=0, action) {
    switch (action.type){
        case ADD_GUN:
            return state + 1;
        case REM_GUN:
            return state - 1;
        default:
            return 10;
    }
}

//创建action
//只要提交action， reducer就会执行
export function addGun() {
    return {type: ADD_GUN}
}
export function remGun() {
    return {type: REM_GUN}
}

export function addGunAsync() {
    return dispatch => {
        setTimeout(()=>{
            dispatch(addGun())
        }, 2000)
    }
}