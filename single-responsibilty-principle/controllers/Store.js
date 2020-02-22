import UserRepository from '../use-cases/UserRepository';
import UserRequestValidation from '../use-cases/UserRequestValidation';
import ErrorHandler from '../utils/ErrorHandler';

class RepositoryController {

  async create(req, res) {
    try {
      const userData = await new UserRequestValidation.validate(req.body)
      const user = await new UserRepository.create(userData);
    } catch (e) {
      ErrorHandler.treat(e);
    }

    res.status(201).json({
      success: true,
      data: user
    });
  }
}
