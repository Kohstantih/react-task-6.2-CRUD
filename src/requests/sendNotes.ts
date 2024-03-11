export default function sendNotes(note: string) {
    const response = fetch('http://localhost:7000/notes', {
        method: 'POST',
        body: note
    });

    return response;
}