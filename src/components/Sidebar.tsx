import React from 'react'

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <button className="nav-item active">
          <span className="nav-icon">💬</span>
          <span className="nav-text">Чаты</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">👥</span>
          <span className="nav-text">Контакты</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">📞</span>
          <span className="nav-text">Звонки</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">📁</span>
          <span className="nav-text">Файлы</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">⭐</span>
          <span className="nav-text">Избранное</span>
        </button>
      </nav>
    </aside>
  )
} 