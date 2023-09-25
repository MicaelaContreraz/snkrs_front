import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  

 <BrowserRouter>
   <App />
 </BrowserRouter>
  
</Provider>

)
