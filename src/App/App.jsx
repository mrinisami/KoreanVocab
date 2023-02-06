import React from "react";
import { Route, Routes, Redirect, Navigate } from "react-router";
import { RapMem } from "../RapMem";
import {WordMatching} from "../WordMatching";
import {NavBar} from "./NavBar/NavBar"

export const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/rapmem' element={<RapMem />}/>
                <Route path='/wordmatching' element={<WordMatching />}/>
                <Route path="*" element={<Navigate to="/rapmem" replace/>} />
            </Routes>
        </>
    )
}

