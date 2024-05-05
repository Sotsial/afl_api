import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategy/jwt.strategy';
import { PlayerModule } from 'src/player/player.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    UserModule,
    PassportModule,
    PlayerModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3h' },
    }),
  ],
})
export class AuthModule {}
