import User from '../entities/User';
import Validation from '../utils/validation';

class UserRepository {

  create(userData) {
    const { name, email, password } = userData;
    const user = new User(name, email, bcrypt(password));

    user.save();

    return user;
  }
}
