import NoteModel from "../../../models/NoteModel"

interface NoteProps {
    note: NoteModel
    deleteNote: (id: string) => void
}

export default function Note({note: {content, id}, deleteNote} : NoteProps) {
    return (
        <div className="note-comp">
            <div>{content}</div>
            <div className="circle close" onClick={() => deleteNote(id)}>
                <span className="material-icons">close</span>
            </div>
        </div>
    )
}