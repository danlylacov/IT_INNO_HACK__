// DocumentEditor.js
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import DirectoryManager from './DirectoryManager';

const DocumentEditor = () => {
    const [editorContent, setEditorContent] = useState('Добро пожаловать в TinyMCE!');
    const [currentFolder, setCurrentFolder] = useState('');

    const handleSaveDocument = (folder, content) => {
        console.log(`Сохранен документ в ${folder}: ${content}`);
        localStorage.setItem('documentContent', content);
        alert(`Документ сохранен в ${folder}`);
    };

    const handleDocumentSelect = (folder) => {
        // Здесь можно загрузить содержимое документа из состояния или базы данных
        setCurrentFolder(folder);
        // Например:
        // setEditorContent(documents[folder]); // Если у вас есть состояние для хранения документов
    };

    return (
        <div className="container" style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
            {/* Боковая панель управления директориями */}
            <DirectoryManager onDocumentSelect={handleDocumentSelect} />

            {/* Основной контент */}
            <div className="content-area" style={{
                backgroundColor: '#D9D9D9',
                borderBottomRightRadius: '15px',
                borderTopRightRadius: '15px',
                padding: '20px',
                flexGrow: 1,
                height: '95%',
                marginTop: '20px',
                overflowY: 'auto' // Добавлено для вертикальной прокрутки
            }}>
                <h2>Редактор документов</h2>

                {/* Редактор TinyMCE */}
                <Editor
                    apiKey="ihvni4mz63s52goxv0dsfecj7c1s0tiwdrness27a5lvq4q2" // Замените на ваш API-ключ TinyMCE
                    value={editorContent}
                    init={{
                        height: 400,
                        menubar: false,
                        plugins: [
                            'autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | styleselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | link image | \
                            removeformat | help'
                    }}
                    onEditorChange={(content) => setEditorContent(content)}
                />

                <div className="row">
                    <div className="col-2">
                        <button type="button" className="button" onClick={() => handleSaveDocument(currentFolder, editorContent)} style={{ backgroundColor:'#28a745', color:'white', border:'none', borderRadius:'15px', padding:'10px 20px' }}>Сохранить</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DocumentEditor;