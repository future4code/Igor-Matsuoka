import React from "react";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from '../../constants/URLs'

const PostDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log(comments)

    return (
        <div>
            <div>
            <p>{comments && comments.username && comments.title && comments.body}</p>
            </div>
            Post Detail
        </div>
    )
}

export default PostDetailPage;