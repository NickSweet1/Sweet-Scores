import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password, first_name, last_name } = req.body;

    try {
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password,
          first_name,
          last_name,
        },
      });

      res.status(201).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}