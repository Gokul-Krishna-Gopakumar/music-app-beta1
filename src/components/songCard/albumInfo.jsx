import React from "react";
import "./albumInfo.css"


function AlbumInfo({album}){

    const artists =[]
    album?.artists?.forEach(element => {
        artists.push(element.name)    
    });
    //console.log(album)

    return !album?(
        <>
        <div className="albumInfo-card-empty">
            <p className="empty-message">{`Currently not playing anything :(`}</p>    
        </div>
        </>
    ) : (
        <div className="albumInfo-card">
            <div className="albumName-container">
                <div className="marquee">
                    <p>{album?.name + " - " + artists?.join(",")}</p>
                </div>
            </div>
            <div className="album-info">
                <p>{`${album?.name} is a ${album?.album_type} by ${artists?.join(", ")} with ${album?.total_tracks} track(s)`}</p>
            </div>
            <div className="album-release">
                <p>Release Date: {album?.release_date} </p>
            </div>
    </div>
    )
}

export default AlbumInfo