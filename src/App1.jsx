import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';
const App=()=> {

  const [addItems,setItems]=useState([]);
  const addnote=(note)=>{
        setItems((prev)=>{
          return [...prev,note];
        });
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addnote} />
      
      {addItems.map((val,index)=>{
        return(
          <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          />
        );
      })}
      <Footer />
    </>
    
  );
}

export default App;
