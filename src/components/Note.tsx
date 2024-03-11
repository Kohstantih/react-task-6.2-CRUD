import { NoteProps } from "../types/NoteProps";

export default function Note({ noteObj, delNote }: NoteProps) {
    return (
        <li key={noteObj.id} className="notes_item">
            <p className="content">
                {noteObj.content}
            </p>
            <button onClick={delNote} data-id={noteObj.id} type="button" className="del-note_btn">
                <i className="fa-solid fa-xmark transparent_item"></i>
            </button>
        </li>
    )
}