import "./Main.css";
import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote }) => {
    const onEditNote = (key, value) => {
        onUpdateNote({
            ...activeNote,
            id: activeNote.id,
            [key]: value,
            modDate: Date.now()
        })
    }
    if (!activeNote) {
        return <div className="no-active-note">Note is not selected</div>
    }
    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input id="title" type="text" placeholder="Title" value={activeNote.title} onChange={(e) => onEditNote("title", e.target.value)} />
                <textarea id="content" placeholder="Write your note here..." value={activeNote.content} onChange={(e) => onEditNote("content", e.target.value)} />
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <div className="markdown-preview">
                    <ReactMarkdown>{activeNote.content}</ReactMarkdown>
                </div>

            </div>
        </div >
    )
}

export default Main