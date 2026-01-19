import { Role } from '@veppagunta-3e04c8a7-fdc2-4182-bde1-2f1fe496aee6/data';

export type JwtPayload = {
    sub: string;
    email: string;
    role: Role;
    orgId: string;
}