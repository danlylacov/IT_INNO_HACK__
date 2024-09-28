import React, { useState } from 'react';

const CategoryTable = () => {
    const [categories, setCategories] = useState([
        { name: "Разработка", color: "#0000FF" },
        { name: "Дизайн", color: "#FFA500" },
        { name: "Тестирование", color: "#800080" },
    ]);

    // Функция для обновления категории
    const handleInputChange = (index, field, value) => {
        const newCategories = [...categories];
        newCategories[index][field] = value; // Обновляем соответствующее поле
        setCategories(newCategories); // Обновляем состояние

        // Выводим значения в консоль
        console.log(newCategories);
    };

    // Функция для добавления новой категории
    const addCategory = () => {
        const newCategory = { name: "", color: "#FFFFFF" }; // Новая категория с пустым именем и белым цветом
        setCategories([...categories, newCategory]); // Обновляем состояние
    };

    return (
        <div className="container p-3">
            <table className="table">
                <thead className="table-secondary">
                    <tr><th>Категория</th><th>Цвет</th><th></th></tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    value={category.name}
                                    onChange={(e) => handleInputChange(index, 'name', e.target.value)} // Обработчик изменения
                                />
                            </td>
                            <td>
                                <input
                                    type="color"
                                    className="form-control form-control-color"
                                    value={category.color}
                                    onChange={(e) => handleInputChange(index, 'color', e.target.value)} // Обработчик изменения
                                />
                            </td>
                            <td>
                                <button
                                    style={{ backgroundColor:'white', color:'red', border:'none', borderRadius:'1px', padding:'5px 10px' }}
                                    onClick={() => {
                                        const newCategories = categories.filter((_, i) => i !== index); // Удаляем категорию
                                        setCategories(newCategories); // Обновляем состояние
                                        console.log(newCategories); // Выводим обновленный массив в консоль
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
                onClick={addCategory}
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

export default CategoryTable;