import React from 'react';

const TopBar = () => {
    return (
        <div className="top-bar" style={{
            background: 'linear-gradient(to right, #7AFFC7, #00D015)',
            padding: '10px',
            color: 'white',
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: '10px',
            marginLeft: '10px'
        }}>
            <button className="btn position-relative">💬</button>
            <button className="btn">📂</button>
            <button className="btn">⬆️</button>
            <div className="user-avatar ms-3" style={{
                display: 'flex', // Используем Flexbox для выравнивания
                alignItems: 'center' // Центрируем по вертикали
            }}>
                <span className="username" style={{ marginRight: '10px' }}>username</span> {/* Добавляем отступ справа */}
                <div className="avatar-circle" style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#ddd',
                    borderRadius: '50%'
                }}></div>
            </div>
        </div>
    );
};

export default TopBar;