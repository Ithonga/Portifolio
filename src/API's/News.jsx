import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function Api() {
  const [articles, setArticles] = useState([]);

  //this is a fetch request using useEffect that fetches articles from news api
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=10&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-1 ">
      <h1 className="text-3xl font-bold text-black mb-6 mx-3 border-b border-black">Latest Tech News</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div key={article.url} className=" m-3 shadow-lg">
            <img
              src={article.urlToImage ? article.urlToImage : "./backLogo.jpg"}
              alt={article.title}
              className="h-56 w-full object-cover overflow-hidden "
            />
            <div className="p-6 justify-between mt-3">
              <div className="flex justify-between">
                <h2 className="text-gray-500 text-sm">
                  {moment(article.publishedAt).format("MMMM D, YYYY")}
                </h2>
                <h2 className="text-black text-sm">{article.source.name?article.source.name : "Unknown Source"}</h2>
              </div>
              <Link to={article.url} target="_blank">
                <h2 className="text-black text-xl font-semibold mt-2 hover:text-red-500">
                  {article.title?article.title.slice(0, 50) : "Unknown Title"}...
                </h2>
              </Link>
              <p className="text-gray-700 mt-2">
                {article.description?article.description.slice(0, 90) : "Unknown Description"}...
              </p>
              <div className="mt-4 flex items-center justify-between">
                <Link to={article.url} target="_blank" rel="noopener noreferrer" className="text-white bg-red-500 p-2 rounded-lg">
                  Read More
                </Link>
                <h2 className="text-sm text-gray-700">By: {article.author?article.author : "Unknown Author"}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api;
