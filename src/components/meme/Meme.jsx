import React from "react";
import "./meme.css";
// import memesData from '../../assests/memesData.js'

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeData, setAllMemeData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeData(data.data.memes));
  }, []);

  console.log(allMemeData);

  function getMemesImage() {
    const randomNumber = Math.floor(Math.random() * allMemeData.length);

    const randomMemeImage = allMemeData[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomMemeImage,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="form">
        <input
          type="text"
          name="topText"
          value={meme.topText}
          className="form--input"
          id="meme_uppertext"
          placeholder="Top text"
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          value={meme.bottomText}
          className="form--input"
          id="meme_lowertext"
          placeholder="Bottom text"
          onChange={handleChange}
        />

        <button className="form--button" onClick={getMemesImage}>
          Get a new Meme Image 🖼️
        </button>
      </div>
      {/* <img src={imgUrl} className="meme--image" alt="" /> */}
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}

export default Meme;
