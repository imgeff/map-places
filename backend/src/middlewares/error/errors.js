const errors = [
  {
    code: 400,
    types: ['RequiredError', 'ValidationError'],
  },
  {
    code: 401,
    types: ['NotAuthorizedError', 'JsonWebTokenError', 'TokenExpiredError'],
  },
  {
    code: 404,
    types: ['NotFoundError'],
  },
  {
    code: 409,
    types: ['ConflictError'],
  },
];

module.exports = errors;
