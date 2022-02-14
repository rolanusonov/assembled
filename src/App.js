import React from "react";
import './App.css';
import Header from "./companets/Header";
import {Routes, Route,} from "react-router-dom"
import Home from "./companets/Home";
import About from "./companets/About";
import Blog from "./companets/Blog";
import Meat from "./companets/Meat";
import Recipes from "./companets/Recipes";
import Support from "./companets/Support";
function App() {
    return (
        <div className="App">

            <Header/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/meat" element={<Meat/>}/>
                <Route path="/recipes" element={<Recipes/>}/>
                <Route path="/support" element={<Support/>}/>

            </Routes>

        </div>
    );
}

export default App;
