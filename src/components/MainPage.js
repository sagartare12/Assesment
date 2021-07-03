import React from 'react'

const MainPage = () => {
    return (
        <div className="main_page">
            <div className="navbar"></div>
            <span className="list"> 
            <div className="symbol">◂ </div> Videos</span>
            <input type="text" placeholder="Insert URL here"/>
            <button>Upload</button>
        </div>
    )
}

export default MainPage
