import axios from "axios"
import { BASE_URL } from "../constants/URLs"

export const createPostVote = (id, body) => {
    console.log(body)
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res.data)
        console.log(body)
    })
    .catch((err)=>{
        console.log(err.data)
    })
}

export const createCommentVote = (id, body) => {
    console.log(body)
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res.data)
        console.log(body)
    })
    .catch((err)=>{
        console.log(err.data)
    })
}

export const changeCommentVote = (id, body) => {
    console.log(body)
    axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res.data)
        console.log(body)
    })
    .catch((err)=>{
        console.log(err.data)
    })
}

export const changePostVote = (id, body) => {
    console.log(body)
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res.data)
        console.log(body)
    })
    .catch((err)=>{
        console.log(err.data)
    })
}

export const deletePostVote = (id, body) => {
    console.log(body)
    axios.delete(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res.data)
        console.log(body)
    })
    .catch((err)=>{
        console.log(err.data)
    })
}

export const deleteCommentVote = (id, body) => {
    console.log(body)
    axios.delete(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res.data)
        console.log(body)
    })
    .catch((err)=>{
        console.log(err.data)
    })
}