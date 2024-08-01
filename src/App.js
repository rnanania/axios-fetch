// src/App.js
import React from 'react';
import './App.css';
import DataFetcher from './DataFetcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App with Axios</h1>
        <DataFetcher url="/api/posts" />
        <DataFetcher url="/api/posts-400" />
        <DataFetcher url="/api/posts-401" />
        <DataFetcher url="/api/posts-404" />
        <DataFetcher url="/api/posts-500" />
        <DataFetcher url="/api/posts-error" />
      </header>
    </div>
  );
}

export default App;
