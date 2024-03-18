// src/api/userService.ts
const API_URL = 'http://your-api-url.com/api/users'; // Update with your actual API URL

export const userService = {
    fetchUsers: async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const users = await response.json();
            return users; // Assuming the API returns the list of users directly
        } catch (error) {
            console.error('Failed to fetch users:', error);
            throw error;
        }
    },
};
