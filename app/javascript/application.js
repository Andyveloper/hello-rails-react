// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import Greetings from "./api";

function App() {
  return <Greetings />;
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);