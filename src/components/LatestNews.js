import React from "react"

export default function LatestNews(props){
    const styles1 = {
        width: "100%"
    }
    const styles2 = {
        margin: "1em 0 0 0",
        color: "green",
        fontSize: "0.6rem",
        fontWeight: "500",
    }
    return (
        <div>
        {
            props.latestNewsOpenMenu ?
            <div className="news-container">
                {props.hottestNewsMenu.map(cObj => { 
                    return (
                        <div className="news" key={cObj.id}>
                            <div className="news-img-container">
                                { 
                                    cObj.latest_news && 
                                    <img src={cObj.card_img} className="news-img" style={styles1} />
                                }
                            </div>
                            <div className="news-headline-story">
                                <p style={styles2}>{cObj.latest_news && "Latest News"}</p>
                                {cObj.latest_news && <h3 className="headline">{cObj.headline}</h3>}
                                {cObj.latest_news && <p className="story">{cObj.text}</p>}
                            </div>
                        </div>
                    )
                })}
                <div className="latest-switch">
                    <button
                        onClick={() => props.handleOverallNews()} 
                    >
                        Overall Latest News
                    </button>
                </div>
            </div>
            :
            <div className="latest-news-container">
                {props.hottestNews.map(obj => {
                    return obj.card.map(cObj => {
                        return (
                        <div className="news" key={cObj.id}>
                                <div className="news-img-container">
                                    {cObj.latest_news && <img src={cObj.card_img} className="news-img" style={styles1} />}
                                </div>
                                <div className="news-headline-story">
                                    <p style={styles2}>{cObj.latest_news && "Latest News"}</p>
                                    {cObj.latest_news && <h3 className="headline">{cObj.headline}</h3>}
                                    {cObj.latest_news && <p className="story">{cObj.text}</p>}
                                </div>
                            </div>  
                        )
                    })
                })}
            </div>
        }
        </div>
    )
}