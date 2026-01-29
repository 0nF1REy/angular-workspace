import { Injectable } from '@nestjs/common';
import { User } from '@nx-ts-paths-stack/shared';

@Injectable()
export class AppService {
  getData(): { message: string; user: User } {
    const user: User = {
      id: '1',
      name: 'Alan Ryan da Silva Domingues',
      email: 'alanryan619@gmail.com',
      role: 'admin',
      isActive: true,
      createdAt: new Date().toISOString(),
    };

    return {
      message: 'Hello API',
      user,
    };
  }
}
