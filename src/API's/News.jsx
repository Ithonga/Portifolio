import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function Api() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!import.meta.env.VITE_NEWS_API_KEY) {
      console.error("API key is missing");
      return;
    }
  
    const abortController = new AbortController();
    
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=10&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
          {
            headers: {
              'Accept': 'application/vnd.newsapi-v3+json' // Specify API version
            },
            signal: abortController.signal // Pass the abort signal
          }
        );
        
        if (!response.ok) throw new Error("Failed to fetch news");
        const data = await response.json();
        setArticles(data.articles || []); // Ensure an array
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error("Error fetching news:", error);
        }
      }
    };
    
    fetchNews();
    
    return () => {
      abortController.abort(); // Abort the fetch on unmount
    };
  }, [import.meta.env.VITE_NEWS_API_KEY]); // Re-run if API key changes

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-black mb-6 border-b border-black">Latest Tech News</h1>
      
      {articles.length === 0 ? (
        <p className="text-center text-gray-500">Loading Tech News.<br></br>No articles available.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.url} className="shadow-lg rounded- overflow-hidden">
              <img
                src={article.urlToImage || "/default-news.jpg"}
                alt={article.title || "News Image"}
                className="h-56 w-full object-cover transform transition duration-300 hover:scale-105"
              />
              <div className="p-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{moment(article.publishedAt).format("MMMM D, YYYY")}</span>
                  <span>{article.source.name || "Unknown Source"}</span>
                </div>
                <Link to={article.url} target="_blank">
                  <h2 className="text-xl font-semibold mt-2 hover:text-red-500">
                    {article.title?.slice(0, 50) || "No Title"}...
                  </h2>
                </Link>
                <p className="text-gray-700 mt-2">
                  {article.description?.slice(0, 90) || "No Description"}...
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <Link
                    to={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-red-500 p-2 rounded-lg hover:bg-red-600"
                  >
                    Read More
                  </Link>
                  <h2 className="text-sm text-gray-700">
                    By: {article.author || "Unknown Author"}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Api;
