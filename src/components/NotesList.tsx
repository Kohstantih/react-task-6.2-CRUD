import { NoteListProps } from "../types/NoteListProps";
import Note from "./Note";

export default function NotesList({ notes, delNote }: NoteListProps) {
    return (
        <ul className="notes_list">
            {notes.map((n) => <Note delNote={delNote} noteObj={n} />)}
        </ul>
    )
}