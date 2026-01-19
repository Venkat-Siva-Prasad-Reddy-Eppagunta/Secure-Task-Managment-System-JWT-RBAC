import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Role } from '@veppagunta-3e04c8a7-fdc2-4182-bde1-2f1fe496aee6/data';
import { Organization } from './entities/organization.entity';
import { User } from './entities/user.entity';



@Injectable()
export class SeedService implements OnApplicationBootstrap {
    private readonly logger = new Logger(SeedService.name);

    constructor(
        @InjectRepository(Organization) private readonly orgRepo: Repository<Organization>,
        @InjectRepository(User) private readonly userRepo: Repository<User>
  ) {}

    async onApplicationBootstrap() {
    // If already seeded, do nothing
        const existing = await this.userRepo.count();
        if (existing > 0) {
            this.logger.log(`Seed skipped (users already exist: ${existing})`);
        return;
    }

    const parentOrg = this.orgRepo.create({ 
        name: 'Parent Org' 
    });
    
    await this.orgRepo.save(parentOrg);

    const childOrg = this.orgRepo.create({ 
        name: 'Child Org', parent: parentOrg 
    });
    
    await this.orgRepo.save(childOrg);

    const password = 'Password123!';
    const passwordHash = await bcrypt.hash(password, 10);

    const owner = this.userRepo.create({
        email: 'owner@test.com',
        passwordHash,
        role: Role.Owner,
        org: parentOrg,
    });

    const admin = this.userRepo.create({
        email: 'admin@test.com',
        passwordHash,
        role: Role.Admin,
        org: childOrg,
    });

    const viewer = this.userRepo.create({
        email: 'viewer@test.com',
        passwordHash,
        role: Role.Viewer,
        org: childOrg,
    });

    await this.userRepo.save([owner, admin, viewer]);

    this.logger.log('Seed complete');
    this.logger.log('Users created: owner@test.com, admin@test.com, viewer@test.com');
    this.logger.log('Password for all: Password123!');
  }
}