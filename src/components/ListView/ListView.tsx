import Note from "../Notes/Note/Note";
import NoteModel from "../../models/NoteModel"

interface ListViewProps {
    notes: NoteModel[]
    deleteNote: (id: string) => void
}

export default function ListView({notes, deleteNote}: ListViewProps) {
    if (notes.length > 0) {
        const listNotes = notes.map(note => <Note key={note.id} note={note} deleteNote={deleteNote} />);
        return <ul className="render-list-comp">{listNotes}</ul>
    }
    return <h4>No notes</h4>
}