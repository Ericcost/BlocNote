import React from 'react';
import ReactMarkdown from 'react-markdown';

function Content( {activeNote, onEditNote} ) {
    
    const onEditFiled = (key, value) => {
        onEditNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        })
    };

    if(!activeNote) return <div className="no-active-note">No note selected</div>

    return (
        <div className='app-main'>
            <div className='app-main-note-edit'>
                <input type='text' id='title' value={activeNote.title} onChange={(e) => onEditFiled("title", e.target.value)} autoFocus />
                <textarea id='body' value={activeNote.body} onChange={(e) => onEditFiled("body", e.target.value)} placeholder='Write your note here...' />
            </div>
            <div className='app-main-note-preview'>
                <h1 className='preview-title'>{activeNote.title}</h1>
                <ReactMarkdown className='markdown-preview'>
                    {activeNote.body}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Content;
