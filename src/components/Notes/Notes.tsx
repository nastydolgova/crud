import {useState} from "react";
import ListView from "../ListView/ListView";
import AddNote from "./AddNote/AddNote"

export default function Notes() {
    const [content, setContent] = useState('');
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        let response = await fetch("http://localhost:7070/notes");
        let notes = await response.json();
        setNotes(notes);
    }

    const addNote = async () => {
        await fetch("http://localhost:7070/notes", {
            method: "POST",
            body: JSON.stringify({
                id: notes.length,
                content: content
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setContent('');
        await fetchNotes();
    }

    const deleteNote = async (id: string) => {
            await fetch(`http://localhost:7070/notes/${id}`, {
            method: "DELETE"
        });
        await fetchNotes();
    }

    return (
        <div className="notes-comp">
            <div className="heading">
                <h3>Notes</h3>
                <div className="circle" onClick={() => fetchNotes()}>
                <span className="material-icons update">system_update_alt</span>
            </div>
        </div>
        <ListView notes={notes} deleteNote={deleteNote} />
        <AddNote content={content} setContent={setContent} addNote={addNote} />
        </div>
    )
}