import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'test', age: 20 });
const root = document.getElementById('app');

if (root) {
  const userEdit = new UserEdit(
    document.getElementById('app'),
    user
  );
  
  userEdit.render();
} else {
  throw new Error('Root element not found');
}


