import React from "react"

export default function TopicsMenu(props){
    return (
        <div>
            { 
            props.latestNewsOpen ?
            <div
                className="menu-container"
            >
                {props.menuOpen && 
                    props.hottestNews.map(obj => {
                    return (
                        <p
                            className="menu-topic"
                            key={obj.id}
                            onClick={() => props.openLatestNewsFromMenu(obj.id)}
                        >
                            {obj.name}
                        </p>
                    )
                })}
            </div>
            :   
            <div 
                className="menu-container"
            >
            {props.menuOpen && 
                props.data.map(topics => {
                    return (
                        <p 
                            className="menu-topic"
                            key={topics.id}
                            onClick={() => props.openTopicFromMenu(topics.id)}
                        >
                            {topics.topic}
                        </p>
                    )
                })
            }
            </div>
            }
        </div>
    )
}