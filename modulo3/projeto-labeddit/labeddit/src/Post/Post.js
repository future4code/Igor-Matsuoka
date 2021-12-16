import React from "react";
import { PostContainer, PostHeader, PostMedia, PostFooter, Comments } from "./StyledPost";


export const Post = (props) => {
   
    return( 
    <PostContainer onClick={props.onClick}>

        <PostHeader>
            {props.username}
        </PostHeader>

        <PostMedia>
            <b>{props.title}</b>
            <p>{props.body}</p>
            <p>{props.createdAt}</p>
        </PostMedia>
        
        <PostFooter>
            <Comments>
            {props.commentCount} Comentários
            </Comments>
            {props.voteSum} Votes
        </PostFooter>

    </PostContainer>
    
    )
}