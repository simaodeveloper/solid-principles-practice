import Validation from '../utils/validation';

class UserRequestValidation {

  validate(requestData) {
    const schema = {
      name: 'required',
      email: 'required',
      password: 'required'
    };

    return Validation(schema).execute(requestData).then(() => requestData);
  }
}
