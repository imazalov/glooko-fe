import {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import * as React from 'react';
import { userService } from '../api/userService';

interface User {
    id: string;
    role: 'admin' | 'librarian' | 'customer';
    // Add additional user properties here
}

interface UserContextType {
    currentUser: User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
    getUsers: () => Promise<void>;
    users: User[];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface Props {
    children: ReactNode;
}

export const UserProvider:  React.FC<Props> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);

    const getUsers = async () => {
        const fetchedUsers = await userService.fetchUsers();
        setUsers(fetchedUsers);
    };

    useEffect(() => {
        // Fetch and set current user from backend or authentication context/state
        // Example: setCurrentUser(fetchedCurrentUser);
        getUsers();
    }, []);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, getUsers, users }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUsers = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUsers must be used within a UserProvider');
    }
    return context;
};
