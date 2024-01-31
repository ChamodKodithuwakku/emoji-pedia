import React from "react";
import Card from "./componets/Card";
import CardContent from "./CardContent";


function makeCard(content_huu){

  return(
    <Card 
    emoji = {content_huu.emoji}
    title = {content_huu.title}
    content = {content_huu.content}


  />
  )

}


function App() {
  return (
    <div className="App">
    <h1 className="header_of_the_page">emoji pedia</h1>
    <div className="card_container">
    
    {CardContent.map(makeCard)}
    </div>
     
    </div>
  );
}

export default App;
