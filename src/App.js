import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import Home from "./components/Home.js";
import Nav from './components/Nav';
import Footer from './components/Footer';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact element={<Home />} path="/"></Route>
          <Route element={<AllPosts />} path="/articles"></Route>
          <Route element={<OnePost />} path="/:slug"></Route>
        </Routes>
        why are these routes not showing...
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
