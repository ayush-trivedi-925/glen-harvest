import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import type { Role } from 'generated/prisma/enums';

type JwtPayload = {
  sub: string;
  email: string;
  role: Role;
};

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>('JWT_REFRESH_SECRET') || '',
      passReqToCallback: true, // gives us access to req in validate()
    });
  }

  async validate(req: Request, payload: JwtPayload) {
    const authHeader = req.get('Authorization') || '';
    const refreshToken = authHeader.replace('Bearer', '').trim();

    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
      refreshToken, // pass the raw refresh token so service can verify it
    };
  }
}
