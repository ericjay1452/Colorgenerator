import React from "react"
import {SearchForm} from "./Component/SearchForm"
function App() {

 const MouseEffect = (bcg) =>{
    document.body.style.backgroundColor=`rgb(${bcg})`;
  
}
    return (
      <>
      <div className="w-full py-4 relative block">
        <section className="w-6/12 mx-auto mb-6">
          <h2 className="text-center text-2xl">Color Generator </h2>
        </section>
         <SearchForm MouseEffect = {MouseEffect}/>
      </div>
      </>
    );

}

export default App;
