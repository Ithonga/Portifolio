import React, { useEffect, useState } from "react";
import moment from "moment";
import { BeatLoader } from "react-spinners";

function ProgrammingNewsKenya() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to introduce a delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY;
      if (!apiKey) {
        console.error("API Key is missing. Check your .env file.");
        setError("API Key is missing. Please configure the environment.");
        setLoading(false);
        return;
      }

      const url = `https://newsdata.io/api/1/latest?country=ke&size=3&category=technology&apikey=${apiKey}`;

      let attempts = 3; // Number of retry attempts
      let success = false;

      for (let i = 0; i < attempts; i++) {
        try {
          setLoading(true);
          setError(null);

          const response = await fetch(url);
          if (!response.ok)
            throw new Error(`HTTP Error! Status: ${response.status}`);

          const data = await response.json();
          if (data.results && Array.isArray(data.results)) {
            setArticles(data.results);
            success = true;
            break; // Exit loop if successful
          } else {
            throw new Error("Unexpected API response format.");
          }
        } catch (err) {
          console.error(`Attempt ${i + 1}: Error fetching news -`, err.message);
          setError("Failed to load news. Retrying...");

          if (i < attempts - 1) {
            await delay(2000); // Wait 2 seconds before retrying
          }
        }
      }

      if (!success) {
        setError("Unable to fetch news after multiple attempts.😔😭");
      }

      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-black mb-6 border-b border-black">
        Latest Tech News
      </h1>

      {loading ? (
        <>
          <p className="text-center text-gray-500">
            Loading Tech News... <BeatLoader color="#ef4444" size={30} />
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="shadow-lg h-fit rounded-lg overflow-hidden animate-pulse bg-gray-200"
              >
                <div className="h-56 w-full bg-gray-300"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-400 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-400 rounded w-full"></div>
                  <div className="h-10 bg-gray-400 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles available.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="shadow-lg h-fit rounded-lg overflow-hidden"
            >
              <img
                src={article.image_url || "/backLogo.jpg"}
                alt={article.title || "News Image"}
                className="h-56 w-full object-cover transform transition duration-300 hover:scale-105"
                onError={(e) => (e.target.src = "/default-news.jpg")}
              />
              <div className="p-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    {article.pubDate
                      ? moment(article.pubDate).format("MMMM D, YYYY")
                      : "Unknown Date"}
                  </span>
                  <span>{article.source_id || "Unknown Source"}</span>
                </div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-xl font-semibold mt-2 hover:text-red-500">
                    {article.title?.slice(0, 50) || "No Title"}...
                  </h2>
                </a>
                <p className="text-gray-700 mt-2">
                  {article.description?.slice(0, 90) || "No Description"}...
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-red-500 animate-bounce p-2 rounded-lg hover:bg-red-600"
                  >
                    Read More
                  </a>
                  <div className="flex-col items-right">
                    <h2 className="text-sm text-gray-700 max-w-[80px]">
                      {article.source_name || "Unknown Author"}
                    </h2>
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
