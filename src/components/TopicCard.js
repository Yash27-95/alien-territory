import React from "react"

export default function TopicCard(props){
    
    return (
        <div className="topic-card-container">
            {props.data.map(topic => {
                return (
                    <div className="topic-card" key={topic.id}>
                        <div className="topic-img">
                            <img 
                                className="intro-img"
                                src={topic.intro_img1}
                            />
                        </div>
                        <div className="topic-intro">
                            <h4 
                                onClick={() => props.openTopic(topic.id)}
                            >
                                {topic.topic}
                            </h4>
                            <p>{topic.brief_description1}</p>
                            <p 
                                className="navigate-button"
                                onClick={() => props.openTopic(topic.id)}
                            >
                                Navigate
                            </p>
                        </div>
                    </div>
                ) 
            })}
        </div>
    )
}