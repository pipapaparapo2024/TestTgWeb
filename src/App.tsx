import { FC } from 'react'
import { Header } from './components/Header'
import { ChatList } from './components/ChatList'
import { ChatWindow } from './components/ChatWindow'
import { Sidebar } from './components/Sidebar'
import './App.css'

export const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <ChatList />
        <ChatWindow />
      </div>
    </div>
  )
}

export default App
