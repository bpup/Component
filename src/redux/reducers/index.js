import userInfo from './userreducer.js';
import count from './count.js';

export default function combineReducers(state = {}, action) {
    return {
        count: count(state.counter, action),
        userInfo: userInfo(state.userInfo, action)
    }
}
/*
* 初始化state
 */

