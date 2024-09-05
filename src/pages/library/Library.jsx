import React, { useEffect, useState } from "react";
import "../../shared/globalStyles.css"
import APIKit from "../../spotify" //APIKit is an alkias for apiClient
import "./library.css"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useNavigate } from "react-router-dom";

function Library(){

    const[playlists, setPlaylists] = useState(null)
    const navigate = useNavigate();

    useEffect(()=>{
        APIKit.get("me/playlists").then(function(res){
            setPlaylists(res.data.items)
            console.log(res.data.items)
        })

    },[])

    

    const playPlaylist = (id) =>{
        navigate("/player", {state: { id : id }})
    }
    

    return(
        <div className="screen-container">
            <div className="library-body">
                {playlists?.map((playlist) =>
                    <div className="playlist-card"
                        key={playlist.id}
                        onClick={() => playPlaylist(playlist.id)}
                    >
                        <img 
                            src={playlist.images[0].url} 
                            className="playlist-image" 
                            alt="Playlist-coverArt"
                        />
                        <p className="playlist-title">{playlist.name}</p>
                        <p className="playlist-subtitle">{playlist.tracks.total} songs</p>
                        <div className="playlist-fade">
                            <PlayCircleIcon fontSize="small" />
                        </div>
                    </div>
                )}
            </div>
        
        </div>

    )
}

export default Library