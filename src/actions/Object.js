
import * as ObjectTypes from '../contants/Object'
import * as ObjectSeverTypes from '../contants/objectServer'
export const SetnameGroup = (name) => {
    return (dispatch) => {
        dispatch(SetnameGroupStore(name))
     }
}
export const SetnameGroupStore = (name) => {
    return {
        type: ObjectTypes.SET_NAME_GROUP_STORE,
        name
     }
}
export const SetImageStore = (url, name) => {
    console.log(url , name)
    return {
        type: ObjectTypes.SET_IMAGE_STORE,
        url , name
     }
}
export const SetSelectStore = (value) => {
    return {
        type: ObjectTypes.SET_SELECT_STORE,
        value
     }
}
export const deteleListTrueStone = (id) => {
    return {
        type: ObjectTypes.DELETE_LIST_TRUE_STORE,
        id
     }
}
export const deteleListFalseStone = (id) => {
    return {
        type: ObjectTypes.DELETE_LIST_FALSE_STORE,
        id
     }
}
export const addListFalseStone = (id) => {
    return {
        type: ObjectTypes.ADD_LIST_FALSE_STORE ,
        id
     }
}
export const GetObjectStore = (data) => {
    return {
        type: ObjectTypes.GET_OBJECT_STORE,
        data
     }
}
export const SetImageSever = (file, name) => {
    console.log(file , name)
    return {
        type: ObjectSeverTypes.SET_IMAGE_SEVER,
        file , name
     }
}
