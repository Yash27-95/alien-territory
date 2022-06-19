import React from "react"

export default function News(props){
    const styles1 = {
        width: "100%"
    }
    // const styles2 = {
    //     margin: "1em 0 0 0",
    //     color: "green",
    //     fontSize: "0.6rem",
    //     fontWeight: "500",
    // }
    return (
        <div className="news-container">
            <h2 className="territories">{props.speceficName}</h2>
                {props.speceficData.map(obj => { 
                    return (
                        <div className="news" key={obj.id}>
                            <div className="news-img-container">
                                <img src={obj.card_img} className="news-img" style={styles1} />
                            </div>
                            <div className="news-headline-story">
                                <p className="latest-news">{obj.latest_news && "Latest News"}</p>
                                <h3 className="headline">{obj.headline}</h3>
                                <p className="story">{obj.text}</p>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}