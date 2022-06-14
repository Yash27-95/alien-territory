import React from "react"

export default function SingleTopicCard(props){
    const styles1 = {
        background: "#FFFAFA",
        width: "100%"
    }
    const styles2 = {
        margin: "1em 0 0 0",
        color: "gold"
    }
    return (
        <div className="single-topic-card">
            <div 
                className="single-topic-intro"
                style={styles1}
            >
                <img src={props.introImg} className="single-topic-intro-img"/>
                <p className="fun-fact">{props.funFact}, <span className="s_fact">"Fun Fact"</span></p>
            </div>
            <h3 className="territories">{props.topicName}</h3>
            <div className="topic-card-container">
                {props.types.map(type => {
                    return (
                        <div 
                            className="topic-card"
                            key={type.id}
                        >
                            <div className="topic-img">
                                <img 
                                    className="intro-img"
                                    src={type.img}
                                />
                            </div>
                            <div className="topic-intro">
                                <p style={styles2}>{type.hot_news && "Hot News"}</p>
                                <h4>{type.name}</h4>
                                <p>{type.description}</p>
                                <p 
                                    className="navigate-button"
                                    onClick={() => props.handleRead(type.id)}
                                >
                                    Read
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
} 