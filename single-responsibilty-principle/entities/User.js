import DBAdapter from '../infraestructure/DBAdapter';

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  save() {
    DBAdapter.create('users', this);
  }
}
