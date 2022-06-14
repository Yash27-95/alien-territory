import React from "react"
// import {nanoid} from "nanoid"
import data from "./data"
import Navbar from "./components/Navbar.js"
import TopicsMenu from "./components/TopicsMenu.js"
import Intro from "./components/Intro.js"
import TopicCard from "./components/TopicCard.js"
import Footer from "./components/Footer.js"
import SingleTopicCard from "./components/SingleTopicCard.js"
import News from "./components/News.js"
import LatestNews from "./components/LatestNews.js"
import "./style.css"

export default function App(){
    const [menuOpen, setMenuOpen] = React.useState(false)
    const [select, setSelect] = React.useState(false)
    const [topicData, setTopicData] = React.useState([])
    const [topicOpen, setTopicOpen] = React.useState(false)
    const [speceficData, setSpeceficData] = React.useState([])
    const [speceficName, setSpeceficName] = React.useState("")
    const [latestNewsOpen, setLatestNewsOpen] = React.useState(false)
    const [hottestNews, setHottestNews] = React.useState([])
    const [latestNewsOpenMenu, setLatestNewsOpenMenu] = React.useState(false)
    const [hottestNewsMenu, setHottestNewsMenu] = React.useState([])

    function handleMenu(){
        setMenuOpen(pre => !pre)
    }
    
    const openTopicFromMenu = (id) => {
        return data.filter(obj => {
            if(obj.id === id){
                if(!select){
                    setSelect(pre => !pre)
                    setTopicData(x => [...x, obj])
                    setLatestNewsOpen(false)
                    setHottestNews([]) 
                }else if(select && topicOpen){
                    setTopicOpen(false)
                    setSpeceficData([])
                    setLatestNewsOpen(false)
                    setHottestNews([])
                    topicData.shift()
                    setTopicData(x => [...x, obj])
                }else{
                    topicData.shift()
                    setTopicData(x => [...x, obj])
                }
            }      
        })
    }
    
    const openTopic = (id) => {
        setSelect(prev => !prev)
        return data.filter(obj => {
            return obj.id === id && setTopicData(x => [...x, obj])
        }) 
    }
    
    const handleLogoClick = () => {
        setSelect(false)
        setTopicData([])
        setTopicOpen(false)
        setSpeceficData([])
        setLatestNewsOpen(false)
        setHottestNews([])
        setLatestNewsOpenMenu(false)
        setHottestNewsMenu([])
    }
    
    const handleRead = (id) => {
        setTopicOpen(prev => !prev) 
        return topicData.map(obj => {
            return obj.types.filter(tObj => {
                if(tObj.id === id){
                    setSpeceficData(tObj.card)
                    setSpeceficName(tObj.name)
                }
            })
        })
    }
    
    const handleHottestNews = () => {
        setLatestNewsOpen(prev => !prev)
        return data.map(obj => {
            return obj.types.filter(tObj => {
                return tObj.hot_news &&
                    setHottestNews(z => [...z, tObj]) 
            })
        })
    }
    
    const openLatestNewsFromMenu = (id) => {
        return hottestNews.map(obj => {
           if(obj.id === id && !latestNewsOpenMenu){
               setLatestNewsOpenMenu(true)
               setHottestNewsMenu(obj.card)  
           }else if(obj.id === id && latestNewsOpenMenu){
               setHottestNewsMenu(obj.card)
           }
       }) 
    }
    
    const handleOverallNews = () => {
        setLatestNewsOpenMenu(false)
        setHottestNewsMenu([])
    }
    
    // console.log(hottestNews)
    // console.log(hottestNewsMenu)
    
    // console.log(speceficData)
    
    // console.log(select)
    
    return (
        <main className="container">
            <Navbar 
                menuOpen={menuOpen} 
                setMenuOpen={setMenuOpen} 
                handleMenu={handleMenu}
                select={select}
                topicData={topicData}
                handleLogoClick={handleLogoClick}
            />
            <TopicsMenu 
                menuOpen={menuOpen}
                data={data}
                openTopicFromMenu={openTopicFromMenu}
                latestNewsOpen={latestNewsOpen}
                hottestNews={hottestNews}
                openLatestNewsFromMenu={openLatestNewsFromMenu}
            />
            <div>
                {latestNewsOpen ?
                    <LatestNews
                        hottestNews={hottestNews}
                        latestNewsOpenMenu={latestNewsOpenMenu}
                        hottestNewsMenu={hottestNewsMenu}
                        handleOverallNews={handleOverallNews}
                    />
                :
                <div>
                {
                topicOpen ?
                    <News
                        speceficData={speceficData}
                        speceficName={speceficName} 
                    />
                :
                <div>
                    {
                    select ? 
                        <div className="body-container">
                        {topicData.map(obj => {
                            return (
                                <SingleTopicCard
                                    funFact={obj.brief_description2}
                                    introImg={obj.intro_img2}
                                    topicName={obj.topic}
                                    key={obj.id}
                                    id={obj.id}
                                    types={obj.types}
                                    handleRead={handleRead}
                                />
                            )
                        })} 
                        </div> 
                :
                    <div className="body-container">
                        <Intro handleHottestNews={handleHottestNews} />
                        <h3 className="territories">Territories</h3>
                        <TopicCard
                            data={data}
                            openTopic={openTopic} 
                        />
                    </div>
                }
                </div>
                }
                </div>
                }
            </div>
            <Footer /> 
        </main>
    )
}