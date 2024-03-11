import { ClickButtonType } from "./ClickButtonType"
import { NoteObj } from "./NoteObj"

export type NoteListProps = {
    notes: NoteObj[],
    delNote: ClickButtonType,
}