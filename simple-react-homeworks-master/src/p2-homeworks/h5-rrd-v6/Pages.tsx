import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import Error404 from "./pages/Error404";
import {PreJunior} from "./pages/PreJunior";
import {Junior} from "./pages/Junior";
import {SuperJunior} from "./pages/SuperJunior";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    SUPER_JUNIOR: '/super-junior'
}

function Pages() {
    return (
        <div >
            Routes выбирает первый подходящий роут
            <Routes>

                в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.SUPER_JUNIOR} element={<SuperJunior/>}/>

                он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
