import { ClickButtonType } from "../types/ClickButtonType";

export default function Header({ refreshNotes }: {refreshNotes: ClickButtonType}) {
    return (
        <div className="header">
            <h1 className="title">Notes</h1>
            <button onClick={refreshNotes} type="button" className="refresh_btn">
                <i className="fa-solid fa-arrows-rotate"></i>
            </button>
        </div>
    )
}