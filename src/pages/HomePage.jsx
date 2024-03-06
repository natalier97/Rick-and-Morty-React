import React from "react";
import YouTube from "react-youtube";

function HomePage() {




  const videoID = "a_-hFU5rJUg";


  return (
    <React.Fragment>
      <h2 className="font-bold text-red-500 p-4 mt-16 flex flex-wrap justify-center text-7xl mb-8">
        {" "}
        You better watch RICK N MORTY!!
      </h2>
      <div className="flex justify-center">
        <YouTube videoId={videoID} />
      </div>
      <a href="https://www.adultswim.com/streams/rick-and-morty">
        <h1 className="font-bold text-red-500 p-4 mt-16 flex flex-wrap justify-center text-7xl mb-8 bg-blue-300 border rounded-md">
          {" "}
          24/7 LIVE STREAM{" "}
        </h1>
      </a>
    </React.Fragment>
  );
}

export default HomePage;
