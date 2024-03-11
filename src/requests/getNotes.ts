export default function getNotes() {
    const response = fetch('http://localhost:7000/notes');

    return response;
}