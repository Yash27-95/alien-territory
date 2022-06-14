import React from "react" 

export default function Navbar(props){
    return (
        <nav className="navbar">
            <h3 onClick={() => props.handleLogoClick(false)}>Alien Territory</h3>
            <h4>{props.select && props.topicData[0].topic}</h4>
            {props.menuOpen ?
            <div 
                className="menux"
                onClick={(e) => props.handleMenu()}
                >
                    <div className="first-line-x">
                    </div>
                    <div className="third-line-x">
                    </div>
                </div> :
                <div 
                className="menu"
                onClick={(e) => props.handleMenu()}
                >
                    <div className="first-line">
                    </div>
                    <div className="second-line">
                    </div>
                    <div className="third-line">
                    </div>
                </div> }
        </nav>
    )
}