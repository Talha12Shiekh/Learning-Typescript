import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import UseReducerComponent from "../components/UseReducerComponent.tsx"
import UseContextComp from "../components/UseContextComp.tsx"
import ChildrenComponent from "../components/ChildrenComponents.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App title="Hello world"/> */}
    <ChildrenComponent>
    <UseContextComp/>
    </ChildrenComponent>
  </StrictMode>,
)
