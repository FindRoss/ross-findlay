import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllPosts from "./components/AllPosts.js";
import SinglePost from "./components/SinglePost.js";
import Home from "./components/Home.js";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Projects from './components/Projects';

import './App.css';

// nice design i could use: https://reactrouter.com/

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact element={<Home />} path="/"></Route>
          <Route exact element={<Projects />} path="/projects"></Route>
          <Route element={<AllPosts />} path="/articles"></Route>
          <Route element={<SinglePost />} path="/:slug"></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
