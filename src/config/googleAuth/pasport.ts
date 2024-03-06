import passport from "passport";
import { getEmail } from "../../dao/userDao";
import { registerUserbyGoogleService } from "../../services/userService";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import * as dotenv from "dotenv";
import { api_url } from "../../utils/url";

dotenv.config()

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
passport.use(
  new GoogleStrategy(
    {
      clientID: clientId!,
      clientSecret: clientSecret!,
      callbackURL: `${api_url}/v1/user/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await getEmail(profile.emails?.[0].value as string);;

      try {
        // If user doesn't exist creates a new user. (similar to sign up)
        if (!user) {
          const newUser = await registerUserbyGoogleService(profile.displayName, profile.emails?.[0].value as string);
          if (newUser) {
            done(null, newUser);
            return {
              success: true,
              status: 200,
              message: newUser.message,
            }
          }
        } else {
          done(null, user);
        }
      } catch (error) {
        console.error(error);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (email: string, done) => {
  const user = await getEmail(email);
  done(null, user);
});

export default passport