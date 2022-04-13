import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Book from "./components/Book";
import Footer from "./components/Footer";
import Postblog from "./components/Postblog";
import Postbook from "./components/Postbook";
import Composeblogbit from "./components/Composeblogbit";
import Composebookbit from "./components/Composebookbit";
import {
  Routes, 
  Route
} from 'react-router-dom';

class App extends Component {

render(){
  return (
    <div>
        {/* <Navigation></Navigation> */}
        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/blogbits" element={<Blog/>} />
            <Route path="/bookbits" element={<Book/>} />
            <Route path="/postblog" element={<Postblog/>} />
            <Route path="/postbook" element={<Postbook/>} />
            <Route path="/composeblogbit" element={<Composeblogbit/>} />
            <Route path="/composebookbit" element={<Composebookbit/>} />
        </Routes>
        <Footer></Footer>
    </div>
  );}
}

export default App;
