import React from "react"

export default function Intro(props){
    
    return (
        <div className="intro-container">
            <h2>You are in the Right Universe!</h2>
            <div className="btn-container">
                <button
                    className="intro-button"
                    onClick={() => props.handleHottestNews()}
                >
                Latest News
                </button>
            </div>
        </div>
    )
}