import type { FC } from 'react'

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">📱</span>
          <span className="logo-text">Telegram Web</span>
        </div>
        <div className="header-actions">
          <button className="header-btn">🔍</button>
          <button className="header-btn">⚙️</button>
          <button className="header-btn">👤</button>
        </div>
      </div>
    </header>
  )
} 