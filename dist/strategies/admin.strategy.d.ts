/// <reference types="express" />
import { AuthenticationStrategy } from '@loopback/authentication';
import { Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { AuthService } from '../services';
export declare class AdministradorStrategy implements AuthenticationStrategy {
    serviceAuth: AuthService;
    name: string;
    constructor(serviceAuth: AuthService);
    authenticate(request: Request): Promise<UserProfile | undefined>;
}
