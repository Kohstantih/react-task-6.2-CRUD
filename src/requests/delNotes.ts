export default function delNotes(id: string) {
    const response = fetch(`http://localhost:7000/notes/${id}`, {
        method: 'DELETE',
    });

    return response;
}