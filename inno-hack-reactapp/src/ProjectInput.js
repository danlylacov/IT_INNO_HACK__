import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom'; // Импортируем Link

const ProjectInput = () => {
    const navigate = useNavigate();
    const { projectName } = useParams(); // Получаем имя проекта из параметров

    // Состояние для имени проекта
    const [projectInput, setProjectInput] = useState('');

    // Используем useEffect для установки начального значения
    useEffect(() => {
        setProjectInput(projectName.replace(/-/g, ' ')); // Заменяем дефисы на пробелы
    }, [projectName]);

    // Обработчик изменения поля ввода
    const handleChange = (e) => {
        setProjectInput(e.target.value);
    };

    return (
        <div className="navigation">
            <h2>Работа с проектом: {projectName.replace(/-/g, ' ')}</h2> {/* Отображаем имя проекта */}
            <div className="row align-items-center">
                <div className="col-sm-4">
                    {/* Поле ввода с отслеживанием изменений */}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Имя проекта"
                        name="project-name"
                        value={projectInput} // Устанавливаем значение из состояния
                        onChange={handleChange} // Обработчик изменения
                    />
                </div>
                <div className="col-sm-8">
                    <div className="row" style={{ marginLeft: "60px" }}>
                        <div className="col-sm-4">
                            <Link className="nav-link" to={`/projects/${projectName}/settings/priorities`}>Приоритеты задач</Link>
                        </div>
                        <div className="col-sm-4">
                            <Link className="nav-link" to={`/projects/${projectName}/settings/participants`}>Участники</Link>
                        </div>
                        <div className="col-sm-4">
                            <Link className="nav-link" to={`/projects/${projectName}/settings/categories`}>Категории задач</Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ border: 0, height: "1px", backgroundColor: "#333" }} />
        </div>
    );
};

export default ProjectInput;