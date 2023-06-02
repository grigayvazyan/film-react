import './App.css';
import Section from './Componets/Section/Section';
import Footer from './Componets/Footer/Footer';
import FilmInfo from './Componets/FilmInfo/FilmInfo';
import { useState } from 'react';
import Header from './Componets/Header/Header';

function App() {

  const [id, setId] = useState(0)

  function changeId(newId){
    setId(newId)
  }

  return (
    <div className="App">
      <Header changeId={changeId}/>
      
      {id === 0 ? <><FilmInfo id={526896}/><Section changeId={changeId}/></> : <FilmInfo id={id}/> } 

      <Footer />


      
    </div>
  );
}

export default App;
