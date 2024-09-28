import React, { useState } from 'react';

const PriorityTable = () => {
    const [priorities, setPriorities] = useState([
        { name: "Высокий", color: "#FF0000" },
        { name: "Средний", color: "#FFFF00" },
        { name: "Низкий", color: "#00FF00" },
    ]);

    // Функция для обновления приоритета
    const handleInputChange = (index, field, value) => {
        const newPriorities = [...priorities];
        newPriorities[index][field] = value; // Обновляем соответствующее поле
        setPriorities(newPriorities); // Обновляем состояние

        // Выводим значения в консоль
        console.log(newPriorities);
    };

    // Функция для добавления нового приоритета
    const addPriority = () => {
        const newPriority = { name: "", color: "#FFFFFF" }; // Новый приоритет с пустым именем и белым цветом
        setPriorities([...priorities, newPriority]); // Обновляем состояние
    };

    return (
        <div className="container p-3">
            <table className="table">
                <thead className="table-secondary">
                    <tr><th>Приоритет</th><th>Цвет</th><th></th></tr>
                </thead>
                <tbody>
                    {priorities.map((priority, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    value={priority.name}
                                    onChange={(e) => handleInputChange(index, 'name', e.target.value)} // Обработчик изменения
                                />
                            </td>
                            <td>
                                <input
                                    type="color"
                                    className="form-control form-control-color"
                                    value={priority.color}
                                    onChange={(e) => handleInputChange(index, 'color', e.target.value)} // Обработчик изменения
                                />
                            </td>
                            <td>
                                <button
                                    style={{ backgroundColor:'white', color:'red', border:'none', borderRadius:'1px', padding:'5px 10px' }}
                                    onClick={() => {
                                        const newPriorities = priorities.filter((_, i) => i !== index); // Удаляем приоритет
                                        setPriorities(newPriorities); // Обновляем состояние
                                        console.log(newPriorities); // Выводим обновленный массив в консоль
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
                onClick={addPriority}
                style={{
                    backgroundColor: '#28a745', // Зеленый цвет кнопки
                    color: 'white',
                    border: 'none',
                    borderRadius: '15px', // Скругленные края
                    padding: '10px 20px',
                    cursor: 'pointer',
                    marginTop: '10px' // Отступ сверху
                }}
            >
                Добавить
            </button>
        </div>
    );
};

export default PriorityTable;