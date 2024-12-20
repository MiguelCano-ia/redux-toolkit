import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { StrictMode } from 'react'
import { TodoApp } from './TodoApp.tsx'
// import { PokemonApp } from './PokemonApp.tsx'
// import App from './App.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ store }>
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </StrictMode>,
)
