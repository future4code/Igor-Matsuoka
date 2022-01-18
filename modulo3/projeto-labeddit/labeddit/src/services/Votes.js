import axios from "axios"
import { BASE_URL } from "../constants/URLs"

export const createPostVote = (id, body) => {
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}

export const createCommentVote = (id, body) => {
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}

export const deletePostVote = (id) => {
    axios.delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}

export const deleteCommentVote = (id) => {
    axios.delete(`${BASE_URL}/comments/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}

export const changeCommentVote = (id, body) => {
    axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}

export const changePostVote = (id, body) => {
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}