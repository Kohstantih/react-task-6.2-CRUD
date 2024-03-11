export default function CreateNote({ addNote }: {addNote: React.FormEventHandler<HTMLFormElement>}) {
    return (
        <form onSubmit={addNote} className="enter_note_box">
            <textarea name="enter" className="enter_text"></textarea>
            <button type="submit" className="add_note_btn">
                <i className="fa-solid fa-paper-plane"></i>
            </button>
        </form>
    )
}