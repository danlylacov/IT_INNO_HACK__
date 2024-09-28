// DirectoryManager.js
import React, { useState } from "react";

const DirectoryManager = ({ onDocumentSelect }) => {
    const [directories, setDirectories] = useState([]);
    const [newDirectoryName, setNewDirectoryName] = useState("");
    const [selectedDirectoryIndex, setSelectedDirectoryIndex] = useState(null);
    const [folders, setFolders] = useState({});
    const [documents, setDocuments] = useState({}); // Состояние для хранения документов

    const addDirectory = () => {
        if (newDirectoryName) {
            setDirectories([...directories, newDirectoryName]);
            setFolders({ ...folders, [newDirectoryName]: [] }); // Создаем пустой массив для новых папок
            setNewDirectoryName("");
        }
    };

    const removeDirectory = (index) => {
        const newDirectories = directories.filter((_, i) => i !== index);
        const newFolders = { ...folders };
        delete newFolders[directories[index]]; // Удаляем папки из состояния
        setDirectories(newDirectories);
        setFolders(newFolders);
        if (selectedDirectoryIndex === index) {
            setSelectedDirectoryIndex(null); // Сбрасываем выбранную директорию
        }
    };

    const addFolder = (directory) => {
        const folderName = prompt("Введите имя папки:");
        if (folderName) {
            setFolders({
                ...folders,
                [directory]: [...(folders[directory] || []), folderName],
            });
            // Инициализируем массив документов для новой папки
            setDocuments({ ...documents, [folderName]: "" });
        }
    };

    const removeFolder = (directory, folderIndex) => {
        const updatedFolders = folders[directory].filter((_, i) => i !== folderIndex);
        setFolders({ ...folders, [directory]: updatedFolders });
    };

    const selectDocument = (folder) => {
        onDocumentSelect(folder); // Передаем выбранный документ в родительский компонент
    };

    return (
        <div style={{ width: "20%", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "15px", marginRight: "20px" }}>
            <h4>Управление директориями</h4>
            <input
                type="text"
                value={newDirectoryName}
                onChange={(e) => setNewDirectoryName(e.target.value)}
                placeholder="Новая директория"
                style={{ marginBottom: "10px", padding: "5px" }}
            />
            <button onClick={addDirectory} style={{ backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px" }}>
                Добавить
            </button>
            <ul className="nav flex-column">
                {directories.map((directory, index) => (
                    <li key={index} className="nav-item">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span onClick={() => setSelectedDirectoryIndex(index)} style={{ cursor: "pointer" }}>
                                ☑ {directory}
                            </span>
                            <div>
                                <button onClick={() => removeDirectory(index)} style={{ backgroundColor: 'transparent', color: 'red', border: 'none' }}>
                                    ✖
                                </button>
                                <button onClick={() => addFolder(directory)} style={{ backgroundColor: "transparent", color: "black", border: "none" }}>
                                    ✚
                                </button>
                            </div>
                        </div>
                        {selectedDirectoryIndex === index && (
                            <ul className="nav flex-column ms-3">
                                {(folders[directory] || []).map((folder, folderIndex) => (
                                    <li key={folderIndex} className="nav-item">
                                        <span onClick={() => selectDocument(folder)} style={{ cursor: "pointer" }}>⇒ {folder}</span>
                                        <button onClick={() => removeFolder(directory, folderIndex)} style={{ backgroundColor: 'transparent', color: 'red', border: 'none' }}>
                                            ✖
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DirectoryManager;