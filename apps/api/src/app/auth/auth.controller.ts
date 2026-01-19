import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "@veppagunta-3e04c8a7-fdc2-4182-bde1-2f1fe496aee6/data";
import { AuthService } from "./auth.service";



@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

        @Post('login')
        login(@Body() dto: LoginDto) {
            return this.authService.login(dto);
        }
}