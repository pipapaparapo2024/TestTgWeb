import type { FC } from 'react'

interface Chat {
  id: number
  name: string
  lastMessage: string
  time: string
  unread: number
  avatar: string
}

const mockChats: Chat[] = [
  {
    id: 1,
    name: 'Алексей Петров',
    lastMessage: 'Привет! Как дела?',
    time: '14:30',
    unread: 2,
    avatar: '👨‍💼'
  },
  {
    id: 2,
    name: 'Мария Сидорова',
    lastMessage: 'Отправь мне файл, пожалуйста',
    time: '13:45',
    unread: 0,
    avatar: '👩‍💻'
  },
  {
    id: 3,
    name: 'Рабочий чат',
    lastMessage: 'Встреча в 15:00',
    time: '12:20',
    unread: 5,
    avatar: '👥'
  },
  {
    id: 4,
    name: 'Семейный чат',
    lastMessage: 'Ужин в 19:00',
    time: '11:15',
    unread: 0,
    avatar: '👨‍👩‍👧‍👦'
  }
]

export const ChatList: FC = () => {
  return (
    <div className="chat-list">
      <div className="chat-list-header">
        <h2>Чаты</h2>
        <button className="new-chat-btn">✏️</button>
      </div>
      <div className="chats">
        {mockChats.map((chat) => (
          <div key={chat.id} className="chat-item">
            <div className="chat-avatar">{chat.avatar}</div>
            <div className="chat-info">
              <div className="chat-header">
                <span className="chat-name">{chat.name}</span>
                <span className="chat-time">{chat.time}</span>
              </div>
              <div className="chat-preview">
                <span className="last-message">{chat.lastMessage}</span>
                {chat.unread > 0 && (
                  <span className="unread-count">{chat.unread}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 