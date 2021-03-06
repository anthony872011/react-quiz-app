
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import React, { useState } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Result from './Pages/Result/Result';
import Quiz from './Pages/Quiz/Quiz';

function App() {
  const [name, setName] = useState("");
  const fetchQuestions = () => {

  }
  return (
    <BrowserRouter>
    <div className="app" style= {{backgroundImage: "url(./ques1.png)"}}> 
    <Header />
    <Switch>
        <Route path='/' exact>
          <Home 
          name={name} 
          setName = {setName} 
          fetchQuestions={fetchQuestions}
          />
        </Route>
        <Route path='/quiz' exact>
          <Quiz />
        </Route>
        <Route path='/result' exact>
          <Result />
        </Route>
      </Switch>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
