import React, {createContext, useState, useEffect} from "react"

export const StateContext = createContext({})



function StateContextProvider({children}){


    const [picdatanew, setPicdatanew] = useState();
 
 useEffect(() => {
        fetch("https://pixabay.com/api/?key=17706064-dbf47c15f3ffee1df9f90dd47&q=donald+trump&image_type=all&per_page=50")
          .then(function (response) {
            return response.json();
          })
          .then(function (rep) {
            const memes = rep.hits;
            //console.log(memes)
            //setPics(memes);
            setPicdatanew(memes);
            //setZz(Math.floor(Math.random() * memes.length - 1));
          });
      }, []);  

return (
    <StateContext.Provider value={{picdatanew}}>
        {children}
    </StateContext.Provider>
    );
}

export default StateContextProvider