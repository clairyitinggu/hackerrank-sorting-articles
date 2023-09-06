import React, { useState, useEffect } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

let mostUpvoted = null;// prevent duplicate sorting
let mostRecent = null; // prevent duplicate sorting
const title = "Sorting Articles";

function App({ articles }) {
  const [data, setData] = useState(articles);

  const sortMostUpvoted = ()=> {
    //use .slice() here to make a shallow copy of articles/data, so updated data can be render
    //or use ... can also make a shallow copy
    if(mostUpvoted) {
      setData(mostUpvoted)
    } else {
      mostUpvoted = [...data].sort((a,b)=> b.upvotes - a.upvotes);
      setData(mostUpvoted);
    }
  
  }

  const sortMostRecent = ()=> {
    if(mostRecent){
      setData(mostRecent)
    }else{
      mostRecent = [...data].sort((a,b)=> new Date(b.date) - new Date(a.date));
      setData(mostRecent);
    }
    
  }

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light" >
          Sort By 
        </label>
        <button data-testid="most-upvoted-link" className="small" onClick={sortMostUpvoted}> 
          Most Upvoted
        </button>
        <button data-testid="most-recent-link" className="small" onClick={sortMostRecent}>
          Most Recent
        </button>
      </div>
      <Articles articles={data} />
    </div>
  );
}

export default App;