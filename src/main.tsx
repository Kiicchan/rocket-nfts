import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMClient from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<React.StrictMode><App /></React.StrictMode>, rootElement);
} else {
  ReactDOMClient.createRoot(rootElement).render(<React.StrictMode><App /></React.StrictMode>);
}
