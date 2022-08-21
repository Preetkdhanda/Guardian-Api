import React, { useEffect, useState } from "react";
import NewsList from "../components/NewsList";


const News = () => {

    const [news, setNews] = useState([])
    const [selectedNews, setSelectedNews]= useState(null)

    useEffect(()=>{

        getNews()
    },[])

    const getNews=()=>{
        fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
        .then(respone => respone.json())
        .then(newsLog => processData(newsLog))
    }

    const processData = (data) =>{
        const newsLog = data.map((SingleNews)=>{
            return{
                headline : SingleNews.response.results.webTitle,
                section : SingleNews.respone.results.sectionName
            }

        })
        setNews(newsLog)
        ;

    }

    const onNewsSelected = function(news){

        setSelectedNews(news);
    }

    return(
        <>
        <h2>Today's Headlines</h2>
            <NewsList news={news} onNewsSelected={onNewsSelected}/>
        </>

    )
};

export default News;