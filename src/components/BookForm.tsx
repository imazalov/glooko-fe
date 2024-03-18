import * as  React from 'react';
import { useState } from 'react';
import { bookService } from '../api/bookService';

interface Props {
    onSubmit: () => void; // Callback to refresh the book list after a successful submit
}

const BookForm: React.FC<Props> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await bookService.addBook({ title });
        setTitle('');
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Book Title:</label>
                <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default BookForm;
