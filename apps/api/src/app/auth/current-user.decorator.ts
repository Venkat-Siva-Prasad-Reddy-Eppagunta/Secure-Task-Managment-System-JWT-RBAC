import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { JwtPayload } from "./jwt.types";


export const CurrentUser = createParamDecorator(
    (x: unknown, ctx: ExecutionContext): JwtPayload => {
        const req = ctx.switchToHttp().getRequest();
        return req.user as JwtPayload;
    }
)