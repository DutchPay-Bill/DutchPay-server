import { Express } from 'express';
import session from 'express-session';
import passport from '../config/googleAuth/pasport';

const googleMiddleware = (app: Express) => {
  app.use(session({
    secret: 'sessionSecret',
    resave: false,
    saveUninitialized: false,
  }));

  app.use(passport.initialize());
  app.use(passport.session());
};

export { googleMiddleware };