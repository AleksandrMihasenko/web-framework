import { User } from './models/User';

const user = new User({ name: 'Aleks', age: 20 });
user.set({ name: 'Aleksandr', age: 30 });
console.log(user.get('name'));
