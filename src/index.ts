import { User } from './models/User';

const user = User.buildUser({id: 1, name: 'newer name', age: 27});

// @ts-ignore
user.on('change', () => {
  console.log(user);
})
user.fetch();
