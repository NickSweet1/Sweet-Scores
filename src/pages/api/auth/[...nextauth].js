import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // You can implement your custom authentication logic here
        // For simplicity, we'll just check the username and password
        const user = { id: 1, name: 'John Doe', email: 'john@example.com' };

        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
    // Add other providers as needed
  ],
  callbacks: {
    async session(session, user) {
      // Add user information to the session
      session.user = user;
      return session;
    },
  },
});