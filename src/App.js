import React, { useState, useEffect } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {

  const [data, setData] = useState(articles);
  useEffect(()=>{
   sortMostRecent();
   sortMostUpvoted();
  },[])

  const sortMostUpvoted = ()=> {
    //use .slice() here to make a shallow copy of articles/data, so updated data can be render
    const upvoted = data.slice().sort((a,b)=> b.upvotes - a.upvotes);
    setData(upvoted);
  }

  const sortMostRecent = ()=> {
    const recent = data.slice().sort((a,b)=> new Date(b.date) - new Date(a.date));
    setData(recent);
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