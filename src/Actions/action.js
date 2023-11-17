
export const GET_USER ='GET_USER';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const GET_USER_BY_NAME = 'GET_USER_BY_NAME';
export const GET_USER_BY_NAME_SUCCESS = 'GET_USER_BY_NAME_SUCCESS';
export const GET_USER_BY_NAME_FAILURE = 'GET_USER_BY_NAME_FAILURE';
export const DELETE_USER ='DELETE_USER';
export const GET_USER_BY_ID_SUCCESS = 'GET_USER_BY_ID_SUCCESS';
export const GET_USER_BY_ID_FAILURE = 'GET_USER_BY_ID_FAILURE';
export const GET_USER_SUCCESS='GET_USER_SUCCESS';
export const DELETE_USER_BY_ID_SUCCESS='DELETE_USER_BY_ID_SUCCESS';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

export const getUserFetch = ()=>({
    type: GET_USER
});
export const getUserbyId =(userId) =>({
    type : GET_USER_BY_ID,
    userId
});
export const getUserbyName =(userName) =>({
    type : GET_USER_BY_NAME,
    userName
});
export const deleteUserById =(Id) =>(
    {
    type : DELETE_USER,
    Id
});

export const createUser =(userdata)=>({
    type : CREATE_USER,
    userdata

});
export const createUserSuccess=(user)=>({
    type : CREATE_USER_SUCCESS,
    user
});
export const updateUser =(userId, userData)=>({
 type: UPDATE_USER,
 userId ,
 userData
});
export const updateUserSuccess=(user)=>({
    type : UPDATE_USER_SUCCESS,
    user
});