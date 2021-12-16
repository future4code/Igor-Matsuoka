import React from "react";
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URLs'
import { Post } from "../../Post/Post";
import { goToPostDetail } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import PostForm from "./FeedPageUseForm";

const FeedPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const onClickPost = (id) => {
        goToPostDetail(navigate, id)
    }

    const postsCards = posts.map((post)=>{
        return <Post
        key = {post.id}
        username = {post.username}
        title = {post.title}
        body = {post.body}
        createdAt = {post.createdAt}
        voteSum = {post.voteSum}
        commentCount = {post.commentCount}
        onClick = {() => onClickPost(post.id)}
        />
    })

    return <div>
        <PostForm/>
        {postsCards}
    </div>
}

export default FeedPage;