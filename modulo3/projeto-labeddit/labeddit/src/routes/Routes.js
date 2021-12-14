import React from "react";
import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"


const RouterComponent = () => {
    return( 

            <Routes>

                <Route path="/login" element={<LoginPage/>}/>   

                <Route path="/detalhe/:id" element={<PostDetailPage/>}/>

                <Route path="/" element={<FeedPage/>}/>

                <Route path="/cadastro" element={<SignUpPage/>}/>     

                <Route path="*" element={<ErrorPage/>}/>      

            </Routes>
    
    )
}

export default RouterComponent;