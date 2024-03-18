import * as React from 'react';
import { useState, useEffect } from 'react';

// Import your User interface
// If you have a service to fetch users, import it here instead of using mock data

// Add this in your types.ts file or at the top of your UserSelect component file
interface User {
    id: string;
    name: string;
    role: 'admin' | 'librarian' | 'customer';
}

interface UserSelectProps {
    onChange: (user: User) => void; // Prop for handling user selection
}

const UserSelect: React.FC<UserSelectProps> = ({ onChange }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<string>('');

    // Mock function to fetch users - replace this with your actual data fetching logic
    const fetchUsers = async () => {
        // Mock users
        const mockUsers: User[] = [
            { id: '1', name: 'Alice', role: 'customer' },
            { id: '2', name: 'Bob', role: 'librarian' },
            { id: '3', name: 'Charlie', role: 'admin' },
        ];
        setUsers(mockUsers);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const userId = event.target.value;
        setSelectedUserId(userId);
        const selectedUser = users.find(user => user.id === userId);
        if (selectedUser) {
            onChange(selectedUser);
        }
    };

    return (
        <select value={selectedUserId} onChange={handleSelectionChange}>
            <option value="">Select a user...</option>
            {users.map(user => (
                <option key={user.id} value={user.id}>{user.name}</option>
            ))}
        </select>
    );
};

export default UserSelect;
