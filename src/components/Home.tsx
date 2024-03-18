import * as React from 'react';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import BookTable from '../components/BookTable';
import UserSelect from '../components/UserSelect';

// Assuming User interface is defined somewhere
interface User {
    id: string;
    name: string;
    role: string;
}

interface Book {
    id: string;
    title: string;
    // Add other properties as needed
}

const HomePage: React.FC = () => {
    const { isAuthenticated } = useAuth();
    const [role, setRole] = useState<'admin' | 'librarian' | 'customer'>('customer');
    const [selectedUser, setSelectedUser] = useState<User | null>(null); // State to track the selected user
    const [books, setBooks] = useState<Book[]>([
        // Mock data or fetch from backend
        { id: '1', title: 'Book Title 1' },
        { id: '2', title: 'Book Title 2' },
    ]);
    const handleEdit = (bookId: string) => {
        // Handle edit action
        console.log(`Edit book with ID: ${bookId}`);
    };

    const handleDelete = (bookId: string) => {
        // Handle delete action
        console.log(`Delete book with ID: ${bookId}`);
    };

    useEffect(() => {
        // Fetch user role and books from backend or context/state
    }, []);

    // Handler for when a user is selected in the UserSelect component
    const handleUserSelect = (user: User) => {
        setSelectedUser(user);
        // Perform any additional actions required on user selection
    };

    return (
        <div>
            {isAuthenticated && (role === 'admin' || role === 'librarian') ? (
                <>
                    <UserSelect onChange={handleUserSelect} />
                    <BookTable books={books} onEdit={handleEdit} onDelete={handleDelete} />
                </>
            ) : (
                <p>Hello, {role === 'customer' ? 'name of the user' : 'admin/librarian'}</p>
            )}
        </div>
    );
};

export default HomePage;
