import React, { useState } from 'react'

interface Message {
  id: number
  text: string
  time: string
  isOwn: boolean
  sender: string
}

const mockMessages: Message[] = [
  {
    id: 1,
    text: 'Привет! Как дела?',
    time: '14:30',
    isOwn: false,
    sender: 'Алексей Петров'
  },
  {
    id: 2,
    text: 'Привет! Все хорошо, спасибо! А у тебя как?',
    time: '14:32',
    isOwn: true,
    sender: 'Вы'
  },
  {
    id: 3,
    text: 'Отлично! Можешь помочь с проектом?',
    time: '14:33',
    isOwn: false,
    sender: 'Алексей Петров'
  },
  {
    id: 4,
    text: 'Конечно! Что нужно сделать?',
    time: '14:35',
    isOwn: true,
    sender: 'Вы'
  }
]

export const ChatWindow: React.FC = () => {
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Здесь можно добавить логику отправки сообщения
      setNewMessage('')
    }
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-user-info">
          <span className="user-avatar">👨‍💼</span>
          <div className="user-details">
            <span className="user-name">Алексей Петров</span>
            <span className="user-status">онлайн</span>
          </div>
        </div>
        <div className="chat-actions">
          <button className="action-btn">📞</button>
          <button className="action-btn">📹</button>
          <button className="action-btn">🔍</button>
          <button className="action-btn">⋮</button>
        </div>
      </div>
      
      <div className="messages-container">
        <div className="messages">
          {mockMessages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.isOwn ? 'own' : 'other'}`}
            >
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-time">{message.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="message-input">
        <button className="input-btn">📎</button>
        <input
          type="text"
          placeholder="Написать сообщение..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button className="input-btn">😊</button>
        <button 
          className="send-btn"
          onClick={handleSendMessage}
        >
          ➤
        </button>
      </div>
    </div>
  )
} 