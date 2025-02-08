import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import CheckList from './CheckList.jsx'
import './CheckListStyle.css'

//Templates
//import './index.css'
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CheckList />
  </StrictMode>,
)
