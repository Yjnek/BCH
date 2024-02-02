
// Filename - App.js

import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Create from "./pages/create";
import Car from "./pages/car";
import Garage from './pages/garage';
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/create" element={<Create/>} />
                <Route exact path="/car" element={<Car/>} />
                <Route exact path="/garage" element={<Garage/>} />
            </Routes>
        </Router>
    );
}
 
export default App;
