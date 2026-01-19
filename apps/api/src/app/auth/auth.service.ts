import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { LoginDto } from '@veppagunta-3e04c8a7-fdc2-4182-bde1-2f1fe496aee6/data';
import { User } from '../entities/user.entity';
import { JwtPayload } from './jwt.types';



@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly usersRepo: Repository<User>,
        private readonly jwtService: JwtService
    ) {}

    async login(dto: LoginDto): Promise<{ accessToken: string }> {
        const user = await this.usersRepo.findOne({
            where: { 
                email: dto.email 
            },
            relations: { 
                org: true 
            },
        });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const ok = await bcrypt.compare(dto.password, user.passwordHash);
    if (!ok) throw new UnauthorizedException('Invalid credentials');

    const payload: JwtPayload = {
        sub: user.id,
        email: user.email,
        role: user.role,
        orgId: user.org.id,
    };

    return { accessToken: await this.jwtService.signAsync(payload) };
  }
}