import { User } from './models/User';

const user = new User({name: 'new record', age: 7});

user.events.on('change', () => {
  console.log('events');
});

user.events.trigger('change');
