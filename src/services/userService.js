import { v4 as uuidv4 } from 'uuid';

class UserService {

    getUsers() {
        const users = JSON.parse(localStorage.getItem('users'));
        return users || [];
    }
    addUser(user) {
        const users = this.getUsers();
        localStorage.setItem('users', JSON.stringify([...users, { id: uuidv4(), ...user }]));
    }

    getUserById(userId) {
        return this.getUsers().find(el => el.id === userId);
    };

    deleteUser(userId) {
        const users = this.getUsers();
        localStorage.setItem('users', JSON.stringify(users.filter(x => x.id !== userId)))
    };

    updateUser(userId) {
        const users = this.getUsers();
        const userToUpdate = users.find(u => u.id === userId);
        localStorage.setItem('users', JSON.stringify(users));
    };
};

export default UserService;