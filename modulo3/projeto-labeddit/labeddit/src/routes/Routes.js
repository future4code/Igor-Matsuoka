import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Header from "../components/Header/Header"

const RouterComponent = () => {
    return( 
        <Router>

        <Header/>

            <Routes>

                <Route path="/login" element={<LoginPage/>}/>   

                <Route path="/detalhe/:id" element={<PostDetailPage/>}/>

                <Route path="/" element={<FeedPage/>}/>

                <Route path="/cadastro" element={<SignUpPage/>}/>     

                <Route path="*" element={<ErrorPage/>}/>      

            </Routes>
        </Router>
    )
}

export default RouterComponent;