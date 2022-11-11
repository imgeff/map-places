const schemaErrors = [
  {
    name: 'ValidationError',
    types: [
      'string.base',
      'string.min',
      'string.max',
      'string.email',
      'string.empty',
      'number.base',
      'number.min',
      'number.max',
      'number.integer',
    ],
  },
  {
    name: 'RequiredError',
    types: ['any.required'],
  },
];

module.exports = schemaErrors;
