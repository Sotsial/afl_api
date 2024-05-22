import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
// import * as argon2 from 'argon2';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();

    // const email = 'admin@test.ru';

    // const defaultUser = await this.user.findUnique({
    //   where: { email },
    // });

    // if (!defaultUser) {
    //   const password = await argon2.hash('P@ssw0rd');

    //   await this.user.create({
    //     data: {
    //       email,
    //       role: 'ADMIN',
    //       name: 'Admin',
    //       password,
    //     },
    //   });
    // }
  }
}
