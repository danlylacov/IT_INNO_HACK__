import React, { useState } from 'react';
import Modal from 'react-modal';

// Настройка модального окна
Modal.setAppElement('#root');

const TaskTable = () => {
    const predefinedUsers = [
        { name: "John аикуципук", email: "john@example.com" },
        { name: "Mary кпукпикепукп", email: "mary@example.com" },
        { name: "July кпуиекпкеиркеруекркеи", email: "july@example.com" },
    ];

    const [tasks, setTasks] = useState([
        { name: "John аикуципук", email: "john@example.com", checked: true },
        { name: "Mary кпукпикепукп", email: "mary@example.com", checked: false },
        { name: "July кпуиекпкеиркеруекркеи", email: "july@example.com", checked: true },
    ]);

    const [selectedUser, setSelectedUser] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleAddTask = () => {
        const user = predefinedUsers.find(user => user.name === selectedUser);
        if (user) {
            setTasks([...tasks, { ...user, checked: false }]); // Добавляем новую задачу
            console.log(`Добавлена новая задача: ${user.name}, Email: ${user.email}`); // Выводим информацию в консоль
            setSelectedUser(''); // Сбрасываем выбор
            setShowModal(false); // Закрываем модальное окно
        }
    };

    return (
        <div className="container p-3">
            <table className="table">
                <thead className="table-secondary">
                    <tr><th>ФИО</th><th>почта</th><th>Ответственный</th><th></th></tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.name}</td>
                            <td>{task.email}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={task.checked}
                                    onChange={() => {
                                        const newTasks = [...tasks];
                                        newTasks[index].checked = !newTasks[index].checked; // Изменяем состояние чекбокса
                                        setTasks(newTasks); // Обновляем состояние
                                        console.log(`Чекбокс для ${task.name} изменен на ${newTasks[index].checked}`); // Выводим информацию о изменении чекбокса
                                    }}
                                />
                            </td>
                            <td>
                                <button
                                    style={{ backgroundColor:'white', color:'red', border:'none', borderRadius:'1px', padding:'5px 10px' }}
                                    onClick={() => {
                                        const newTasks = tasks.filter((_, i) => i !== index); // Удаляем задачу
                                        setTasks(newTasks); // Обновляем состояние
                                        console.log(`Задача ${task.name} удалена`); // Выводим информацию об удалении задачи
                                    }}
                                >
                                    ✖
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Кнопка Добавить */}
            <button
                onClick={() => setShowModal(true)}
                style={{
                    backgroundColor: '#28a745', // Зеленый цвет кнопки
                    color: 'white',
                    border: 'none',
                    borderRadius: '15px', // Скругленные края
                    padding: '10px 20px',
                    cursor: 'pointer'
                }}
            >
                Добавить
            </button>

            {/* Модальное окно */}
            <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)} style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                    width: '300px', // Ширина модального окна
                    backgroundColor: '#28a745', // Зеленый фон для модального окна
                    color: 'white' // Белый цвет текста в модальном окне
                }
            }}>
                <h2>Выберите ФИО</h2>
                <select
                    value={selectedUser}
                    onChange={(e) => {
                        setSelectedUser(e.target.value); // Обновляем выбранное значение
                        console.log(`Выбрано ФИО: ${e.target.value}`); // Выводим информацию о выбранном ФИО
                    }}
                    className="form-select"
                >
                    <option value="">Выберите ФИО</option>
                    {predefinedUsers.map((user, index) => (
                        <option key={index} value={user.name}>{user.name}</option>
                    ))}
                </select>
                <button
                    onClick={handleAddTask}
                    style={{
                        backgroundColor: '#28a745', // Зеленый цвет кнопки добавления
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '5px 10px',
                        marginTop: '10px',
                        cursor: 'pointer'
                    }}
                >
                    Добавить участника
                </button>
            </Modal>
        </div>
    );
};

export default TaskTable;