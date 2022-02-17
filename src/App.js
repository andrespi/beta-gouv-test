import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import ImageSearchForm from "./components/ImageSearchForm";
import ImageSearch from "./components/ImageSearch";

function App() {

  return (
      <div className="container mx-auto">
          <ImageSearch/>
      </div>
  );
}

export default App;
