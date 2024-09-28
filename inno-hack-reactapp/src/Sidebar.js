import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для навигации

const Sidebar = () => {
    const navigate = useNavigate(); // Создаем объект navigate для навигации
    const [projects, setProjects] = useState([
        { name: "Проект 1" },
        { name: "Проект 2" },
        { name: "Проект 3" }
    ]);

    const randomNames = ["Проект A", "Проект B", "Проект C", "Проект D", "Проект E"];

    const addRandomProject = () => {
        const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
        setProjects([...projects, { name: randomName }]);
    };

    const navigateToProject = (projectName) => {
        const formattedName = projectName.replace(/\s+/g, '-').toLowerCase();
        navigate(`/projects/${formattedName}`); // Перенаправляем на эндпоинт с названием проекта
    };

    const removeProject = (index) => {
        // Удаляем проект по индексу
        const newProjects = projects.filter((_, i) => i !== index);
        setProjects(newProjects);
    };

    return (
        <div className="col-auto sidebar" style={{
            width: '16vw',
            background: 'linear-gradient(to right, #59F992, #7AFFC7)',
            color: 'black',
            padding: '20px',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            borderRight: '1px solid #006323',
            height: '100%',
            marginTop: '20px',
            marginLeft: '20px',
            overflowY: 'auto', // Добавлено для вертикальной прокрутки
        }}>
            <div className="sidebar-header">
                <h4 style={{ color: 'black', display: 'inline-block' }}>Name of workspace</h4>

                <hr style={{ border: 0, height: '1px', backgroundColor: '#333' }} />
            </div>

            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#" style={{ color: 'black' }}>Мои задачи</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" style={{ color: 'black' }}>Все задачи</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" style={{ color: 'black' }}>Все проекты</a>
                </li>
                <hr style={{ border: 0, height: '1px', backgroundColor: '#333' }} />
            </ul>

            {/* Проекты */}
            <div className="projects">
                <h5 style={{ color: 'black' }}>Проекты</h5> {/* Заголовок черный */}
                <button
                    onClick={addRandomProject}
                    style={{
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '5px 10px',
                        marginLeft: '10px' // Отступ слева
                    }}
                >
                    +
                </button>
                <ul className="nav flex-column">
                    {projects.map((project, index) => (
                        <li key={index} className="nav-item" style={{ marginBottom: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span
                                    className="nav-link"
                                    style={{ color: 'black', cursor: 'pointer', flexGrow: 1 }}
                                    onClick={() => navigateToProject(project.name)} // Добавляем обработчик клика
                                >
                                    {project.name}
                                </span>
                                {/* Символ креста для удаления проекта */}
                                <span
                                    onClick={() => removeProject(index)}
                                    style={{
                                        color: 'red',
                                        cursor: 'pointer',
                                        marginLeft: '10px' // Отступ слева
                                    }}
                                >
                                    ✖
                                </span>
                            </div>
                            {/* Подменю для задач и настроек */}
                            <ul className="nav flex-column ms-3">
                                <li className="nav-item">
                                    <a className="nav-link" href={`/projects/${project.name.replace(/\s+/g, '-').toLowerCase()}/tasks`} style={{ color: 'black' }}>📌 Задачи</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={`/projects/${project.name.replace(/\s+/g, '-').toLowerCase()}/settings/participants`} style={{ color: 'black' }}>⚙️ настройки</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={`/projects/${project.name.replace(/\s+/g, '-').toLowerCase()}/editor`} style={{ color: 'black' }}>📄 документы</a>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;