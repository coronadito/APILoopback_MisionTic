import { Apiloopback25Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Apiloopback25Application;
    client: Client;
}
