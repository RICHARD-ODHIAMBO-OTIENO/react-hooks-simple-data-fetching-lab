
import React, { useState, useEffect } from "react";

function App() {
    const [ imagePic, setImagePic] = useState([]);
    const [ isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
            setImagePic(data.message);
            setIsLoaded(true);

          });
    }, []);
   //shown when the data has not been loaded
   if (!isLoaded) return <p>Loading...</p>;

  return (
    <div>
      <img src={imagePic} alt="A Random Dog" />
    </div>
  );
}

export default App;
