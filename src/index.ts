import { UserEdit } from './views/UserEdit';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';

const user = User.buildUser({ name: 'NAME', age: 20 });
const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();
} else {
  throw new Error('Root element not found');
}

const userList = new UserList();
userList.render();
