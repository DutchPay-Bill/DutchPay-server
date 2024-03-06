// Define the user type
interface User {
    id: string;
    email: string;
    // Add more properties as needed
}

// Extend the Request object to include the user property
declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}