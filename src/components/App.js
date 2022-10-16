import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listing,setListing] =useState([])
  
  useEffect(()=>{
    fetch("http://localhost:6001/listings")
      .then(resp =>resp.json)
      .then(setListing)

  },[]);

  return (
    <div className="app">
      <Header />
      <ListingsContainer />
    </div>
  );
}

export default App;
