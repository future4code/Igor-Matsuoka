import React, { useState, useEffect } from "react";
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URLs'
import { Post } from "../../Post/Post";
import { goToPostDetail } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import PostForm from "./FeedPageUseForm";
import { createPostVote, deletePostVote, changePostVote } from "../../services/Votes";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Footer from './StyledFeedPage'


const FeedPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)

    const vote = (id, vote) => {
        const body = {
            direction: vote
        }
        if (vote === 1 && !upVote && !downVote) {
            setUpVote(true)
            createPostVote(id, body)
        } else if (vote === -1 && !upVote && !downVote) {
            setDownVote(true)
            createPostVote(id, body)
        } else if (vote === 1 && upVote) {
            setUpVote(false)
            deletePostVote(id)
        } else if (vote === -1 && downVote) {
            setDownVote(false)
            deletePostVote(id)
        } else if (vote === 1 && downVote) {
            setUpVote(true)
            setDownVote(false)
            changePostVote(id, body)
        } else {
            setUpVote(false)
            setDownVote(true)
            changePostVote(id, body)
        }
    }

    useEffect(() => {
        setInitialVote()
    }, [posts])

    const setInitialVote = () => {
        if (posts.userVote === 1) {
            setUpVote(true)
        } else if (posts.userVote === -1) {
            setDownVote(true)
        } 
    }

    const onClickPost = (id) => {
        goToPostDetail(navigate, id)
    }

    const postsCards = posts.map((post)=>{
        return <div key = {post.id}>
            <Post
            username = {post.username}
            title = {post.title}
            body = {post.body}
            createdAt = {post.createdAt}
            commentCount = {post.commentCount}
            userVote={post.userVote}
            onClick = {() => onClickPost(post.id)}
            />
            <Footer>
            <Stack spacing={2} direction="row">
            <p>{post.commentCount === null ? 0 : post.commentCount}</p> Comentários
            {upVote ? (<Button size="small" variant="contained" onClick={() => vote(post.id, 1)}>UP</Button>) : (<Button  size="small" variant="outlined" onClick={() => vote(post.id, 1)}>UP</Button>)}
            <p>{post.voteSum === null ? 0 : post.voteSum}</p>
            {downVote ? (<Button variant="contained"  size="small" onClick={() => vote(post.id, -1)}>DOWN</Button>) : (<Button variant="outlined"  size="small" onClick={() => vote(post.id, -1)}>DOWN</Button>)}
            </Stack>
            </Footer>
            </div>
    })

    return <div>    
        <PostForm/>
        {postsCards}
    </div>
}

export default FeedPage;