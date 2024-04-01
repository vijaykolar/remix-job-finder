import { prisma } from './prismaclient.server';
import bcrypt from 'bcryptjs';

type UserTypes = {
  email: string;
  password: string;
};
async function createUser({ email, password }: UserTypes) {
  console.log(email, password);
  const existingUser = await prisma.user.findFirst({ where: { email } });
  if (existingUser) {
    return new Error('User already exists');
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  await prisma.user.create({
    data: {
      name: 'Vijay',
      email,
      password: hashedPassword,
    },
  });
  return null;
}

export { createUser };
