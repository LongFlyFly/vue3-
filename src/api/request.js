import axios from "axios";

// const http = axios.create({})
let baseUrl = 'http://localhost:3000'


//分页
export function getData(url,page,limit){
    return axios.get(`${baseUrl}/${url}?_page=${page}&_limit=${limit}`)
}

// 模糊查询接口，后面带有值
export function getSearch(url,canShu){
    return axios.get(`${baseUrl}/${url}?name_like=${canShu}`)
}


export function getGirl(url){
    return axios.get(`${baseUrl}/${url}`)
}

export function getBoy(url){
    return axios.get(`${baseUrl}/${url}`)
}

export function getDecoration(url){
    return axios.get(`${baseUrl}/${url}`)
}

export function getAbulans(url){
    return axios.get(`${baseUrl}/${url}`)
}

export function getFoot(url){
    return axios.get(`${baseUrl}/${url}`)
}

export function getHome(url){
    return axios.get(`${baseUrl}/${url}`)
}

export default {
    getData,getGirl,getBoy,getDecoration,getAbulans,getFoot,getHome,getSearch
}
