import React from 'react'
import ContentS from '../Components/ContentS'
import Content from '../Components/content'
// import Content_function from '../Components/Content_function'
import Home from '../Components/Home'
import Topic from '../Components/topic'
import LoginForm from '../Components/Login/LoginForm'

const routes = [
    {
        path: "/product",
        element: <Content />,
        name: "Product"
    },
    {
        path: "/home",
        element: <Home />,
        name: "Home"
    },
    {
        path: "/topic",
        element: <Topic />,
        name: "Topic"
    },
    {
        path: "/products",
        element: <ContentS />,
        name: "Products"
    },
    {
        path: "/loginForm",
        element: <LoginForm />,
        name: "LoginForm"
    }
]

export default routes