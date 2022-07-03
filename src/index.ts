import { User } from './models/User';

const user = new User({name: 'new record', age: 7});

console.log(user.get('name'));

user.on('change', () => {
  console.log('change');
})
user.set({name: 'New name'});
