import { prisma } from './prismaclient.server';

async function createUser() {
  try {
    const user = await prisma.user.create({
      data: {
        name: 'Vijay Kolar',
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
  }
}

export { createUser, getUsers };
