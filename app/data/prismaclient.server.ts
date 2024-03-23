// import { PrismaClient } from '@prisma/client';

// declare global {
//   namespace NodeJS {
//     interface Global {
//       db: PrismaClient;
//     }
//   }
// }

// // Define the type of the global object
// declare const global: NodeJS.Global; // Define the type of the global object
// /**
//  * @type PrismaClient
//  */
// // let prisma;
// let prisma: PrismaClient;

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
//   prisma.$connect();
// } else {
//   if (!global.db) {
//     global.db = new PrismaClient();
//     global.db.$connect();
//   }

//   prisma = global.db;
// }

// export { prisma };
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

export function getPrisma() {
  if (!prisma) {
    prisma = new PrismaClient();
    prisma.$connect();
  }
  console.log(prisma);

  return prisma;
}

export { prisma };
