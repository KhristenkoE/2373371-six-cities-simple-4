export const Service = {
  RestApplication: Symbol.for('RestApplication'),
  Logger: Symbol.for('Logger'),
  Config: Symbol.for('Config'),
  DatabaseClient: Symbol.for('DatabaseClient'),
  UserService: Symbol.for('UserService'),
  UserModel: Symbol.for('UserModel'),
  OfferModel: Symbol.for('OfferModel'),
  OfferService: Symbol.for('OfferService'),
  CommentService: Symbol.for('CommentService'),
  CommentModel: Symbol.for('CommentModel'),
  CityService: Symbol.for('CityService'),
  CityModel: Symbol.for('CityModel'),
  CityController: Symbol.for('CityController'),
  OfferController: Symbol.for('OfferController'),
  UserController: Symbol.for('UserController'),
  CommentController: Symbol.for('CommentController'),
  ExceptionFilter: Symbol.for('ExceptionFilter'),
} as const;
