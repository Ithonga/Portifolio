import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function ProgrammingNewsKenya() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY; // Store API key in .env
      const url = `https://newsdata.io/api/1/latest?country=us&category=technology&size=3&q=ai&apikey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results) {
          setArticles(data.results);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-black mb-6 border-b border-black">
        Latest Tech News
      </h1>

      {articles.length === 0 ? (
        <p className="text-center text-gray-500">
          Loading Tech News.{" "}
          <BeatLoader color="#ef4444" size={30} className="text-center" />
          <br></br>No articles available.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="shadow-lg h-fit rounded- overflow-hidden"
            >
              <img
                src={article.image_url || "/default-news.jpg"}
                alt={article.title || "News Image"}
                className="h-56 w-full object-cover transform transition duration-300 hover:scale-105"
              />
              <div className="p-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{moment(article.pubDate).format("MMMM D, YYYY")}</span>
                  <span>{article.source_id || "Unknown Source"}</span>
                </div>
                <Link to={article.link} target="_blank">
                  <h2 className="text-xl font-semibold mt-2 hover:text-red-500">
                    {article.title?.slice(0, 50) || "No Title"}...
                  </h2>
                </Link>
                <p className="text-gray-700 mt-2">
                  {article.description?.slice(0, 90) || "No Description"}...
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <Link
                    to={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-red-500 p-2 rounded-lg hover:bg-red-600"
                  >
                    Read More
                  </Link>
                  <div className="flex-col items-right ">
                    <h2 className="text-sm text-gray-700 max-w-[80px]">
                      By: {article.source_name || "Unknown Author"}
                    </h2>

                    <Link
                      to={article.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={article.source_icon || "/default-news.jpg"}
                        alt={article.title || "News Image"}
                        className="h-8 w-fit object-cover transform transition duration-300 hover:scale-105"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProgrammingNewsKenya;
