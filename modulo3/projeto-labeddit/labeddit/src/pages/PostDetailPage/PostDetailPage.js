import React from "react";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from '../../constants/URLs'
import CommentForm from "./PostPageUseForm";

const PostDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log(comments)

    const commentsArray = comments && comments.map((comment)=>{
        return <div key={comment.id}>
            {comment.username}
            {comment.body}
            {comment.createdAt}
        </div>
    })


    return (
        <div>
            <div>
            <CommentForm id={params.id}/>
            {commentsArray}
            </div>
        </div>
    )
}

export default PostDetailPage;