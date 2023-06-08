import { IClient } from "./client.interface";

export interface ClientStateInterface {
    clients: Array<IClient> | null,
    selectedClient: IClient | null,
    error: string | null
}