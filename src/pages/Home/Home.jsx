import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "../library/Library";
import { useNavigate } from "react-router-dom";
import Feed from "../feed/feed";
import Player from "../player/player";
import Favourites from "../favourites/favourites";
import Trending from "../trending/trending";
import Sidebar from "../../components/sidebar";
import Login from "../auth/login";
import "./home.css"
import { setClientToken } from "../../spotify";



function Home() {
    
    const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
        const token1 = hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("token", token1);
        setToken(token1);
        setClientToken(token1);
    } else {
        setToken(token);
        setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
        <BrowserRouter>
            <div className='main-body'>
            
            
            <Sidebar />
                        
            <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/Feed" element={<Feed />} />
            <Route path="/Player" element={<Player />} />
            <Route path="/Favourites" element={<Favourites />} />
            <Route path="/Trending" element={<Trending />} />
            </Routes>

            </div>

        </BrowserRouter>
    )
}
export default Home