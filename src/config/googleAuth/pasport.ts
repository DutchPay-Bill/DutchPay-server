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
      callbackURL: `${api_url}/v1/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("Google Authentication Profile:", profile);
      const user = await getEmail(profile.emails?.[0].value as string);
      try {
        if (!user) {
          const newUser = await registerUserbyGoogleService(profile.displayName, profile.emails?.[0].value as string);
          if (newUser && newUser.data) {
            done(null, newUser.data);
          } else {
            done(new Error("Failed to register user"));
          }
        } else {
          done(null, user);
        }
      } catch (error: any) {
        console.error(error);
        done(error);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  console.log("Serialize User:", user);
  done(null, { id: user.id, email: user.email });
});

passport.deserializeUser(async (serializedUser: { id: string, email: string }, done) => {
  console.log("Deserialize User:", serializedUser);
  const user = await getEmail(serializedUser.email);
  done(null, user);
});

export default passport
