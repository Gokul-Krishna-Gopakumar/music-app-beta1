import React, { useState } from "react";
import "./queue.css"
import { duration } from "@mui/material";

function Queue({tracks, setCurrentIndex}){
   
    console.log(tracks)

    const song_mins=0
    const song_sec=0
    
    
    /*const duration_calc = (tracks) =>{
        song_mins = (tracks?.track?.duration_ms)/60000
        song_sec = Math.ceil((song_mins - Math.floor(song_mins)) * 60)
        document.getElementsByClassName('track-duration').innerHTML = song_mins + ':' +song_sec
    }*/

    
   
    return(
        <div className="queue-container flex">
            <div className="queue flex">
                <p className="next">Up Next</p>
                <div className="queue-list">
                    {
                        tracks?.map((track, index) =>(
                            <div 
                                className="queue-item flex" 
                                onClick={() => setCurrentIndex(index)}>
                                <p className="track-name">{track?.track?.name}</p>
                                <p className="track-duration">{(track?.track?.duration_ms)}</p>
                            </div>
                        ))
                    }
                </div>  
            </div>
        </div>
    )
}

export default Queue