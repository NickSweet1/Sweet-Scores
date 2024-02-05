export default {
    providers: [
      // Add other providers as needed
    ],
    callbacks: {
      async session(session, user) {
        // Add user information to the session
        session.user = user;
        return session;
      },
    },
  };