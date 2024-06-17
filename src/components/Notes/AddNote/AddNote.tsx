interface AddNoteProps {
    content: string
    setContent: (value: string) => void
    addNote: () => void
}

export default function AddNote({content, setContent, addNote} : AddNoteProps) {
    return (
        <div className="add-note">
            <label htmlFor="note">New note</label>
            <textarea
                id="note"
                name="note"
                value={content}
                onChange={event => setContent(event.target.value)}
            />
            <div onClick={addNote}>
                <span>Добавить</span>
            </div>
        </div>
    )
}