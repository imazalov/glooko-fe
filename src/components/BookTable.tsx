import * as React from 'react';

interface Book {
    id: string;
    title: string;
    // Other book properties
}

interface Props {
    books: Book[];
    onEdit: (bookId: string) => void;
    onDelete: (bookId: string) => void;
}

const BookTable: React.FC<Props> = ({ books, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {books.map(book => (
                <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>
                        <button onClick={() => onEdit(book.id)}>Edit</button>
                        <button onClick={() => onDelete(book.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default BookTable;
