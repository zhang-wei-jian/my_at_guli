import {v4 } from 'uuid'
export function getUserTempId(){
    let userTempId= localStorage.getItem('userTempId')
    if(!userTempId){
        localStorage.setItem('userTempId',v4())
    }
    return userTempId  
}
export function getToken(){
    return localStorage.getItem('token')
}
export function setToken(token){
    return localStorage.setItem('token',token)
}