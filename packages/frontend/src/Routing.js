import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Filter from "./pages/Filter";


export default function Routing() {
    return (

        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/Filter" element={<Filter/>} />
        </Routes>
        
    )
}