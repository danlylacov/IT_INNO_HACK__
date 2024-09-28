// Settings.js
import React from 'react';
import ProjectInput from './ProjectInput'; // Импортируйте ваш компонент ProjectInput
import { Outlet } from 'react-router-dom';

const Settings = () => {
    return (
        <div>
            <ProjectInput />
            {/* Outlet для отображения дочерних маршрутов */}
            <Outlet />
        </div>
    );
};

export default Settings;