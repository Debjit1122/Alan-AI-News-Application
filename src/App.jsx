import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";


const alanKey =
  "4238b676ca7964c57d64c1b6dc0be4922e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <div
        style={{
          padding: "0 5%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg"
          alt="logo"
          style={{
            height: "27vmin",
            borderRadius: "20%",
            padding: "0 5%",
            margin: "3% 0",
          }}
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
