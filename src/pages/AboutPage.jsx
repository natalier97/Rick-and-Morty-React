import React from "react";



// -AboutPage.jsx should render general about me information about the show. (Maybe use an API to render this information?)
function AboutPage() {
  return (
    <React.Fragment>
      <h1 className="p-4 mt-20 text-3xl font-bold text-blue-300">
        {" "}
        About Rick N Morty:{" "}
      </h1>
      <h2 className="p-4 mt-20 bg-blue-200 bg-opacity-50">
        {" "}
        "Rick and Morty" is an American animated science fiction sitcom created
        by Justin Roiland and Dan Harmon. The show premiered on December 2,
        2013, on Adult Swim, a nighttime programming block on Cartoon Network.
        The series follows the misadventures of an eccentric and alcoholic
        scientist named Rick Sanchez and his good-hearted but easily influenced
        grandson, Morty Smith. Together, they embark on various adventures
        across different dimensions, planets, and timelines, often encountering
        bizarre and fantastical creatures, as well as dealing with complex and
        philosophical themes. The show is known for its dark humor, satirical
        take on science fiction tropes, and exploration of existential themes
        such as the meaning of life, free will, and the nature of reality. It
        has received critical acclaim for its clever writing, imaginative
        storytelling, and inventive use of science fiction concepts. "Rick and
        Morty" has gained a dedicated fanbase and has become a cultural
        phenomenon since its debut, spawning merchandise, video games, and a
        passionate online community. It has also won several awards, including a
        Primetime Emmy Award for Outstanding Animated Program.
      </h2>
    </React.Fragment>
  );
}

export default AboutPage;
