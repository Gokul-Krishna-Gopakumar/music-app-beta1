import React, { useEffect, useState } from "react";
import "./sidebar.css"
import SidebarButton from "./sidebarButton";
import ViewComfyRoundedIcon from '@mui/icons-material/ViewComfyRounded'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded'
import LogoutIcon from '@mui/icons-material/Logout';
import apiClient from "../../spotify";

function Sidebar() {

    const [image,setImage]=useState("https://images.unsplash.com/photo-1635107510862-53886e926b74?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

    useEffect(() => {
        apiClient.get("me").then(res =>{ 
            setImage(res.data.images[0].url);
        })

    },[]);


    return(
        
       
        
        <div className='sidebar-container'>

            <img 
                className="profile-img"
                src={image} />
           
            <div>
                <SidebarButton title="Feed" to="/Feed" icon={<ViewComfyRoundedIcon fontSize="large"/>} />
                <SidebarButton title="Trending" to="/Trending" icon={<AutoGraphRoundedIcon fontSize="large"/>}/>
                <SidebarButton title="Player" to="/Player" icon={<PlayArrowRoundedIcon fontSize="large"/>}/>
                <SidebarButton title="Favourites" to="/Favourites" icon={<FavoriteRoundedIcon fontSize="large"/>}/>
                <SidebarButton title="Library" to="/" icon={<LibraryMusicRoundedIcon fontSize="large"/>}/>
            </div>

            <SidebarButton title="Sign Out" to="" icon={<LogoutIcon />} />
        </div>


    )   

}
export default Sidebar