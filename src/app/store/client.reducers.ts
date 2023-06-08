import { Action, createReducer, on } from "@ngrx/store";
import { ClientStateInterface } from "./clients-state.interface";
import { clearSelectedClient, deleteSelectedClient, getAllClients, getAllClientsFailure, setSelectedClient, setSelectedClientFailure } from "./client.action";
import { IClient } from "./client.interface";

const allClients: IClient[] = [
    {
        id: 1,
        name: 'Maks',
        age: 25,
        sex: 'Male'
    },
    {
        id: 2,
        name: 'Oleh',
        age: 19,
        sex: 'Male'
    },
    {
        id: 3,
        name: 'Olha',
        age: 32,
        sex: 'Female'
    },
    {
        id: 4,
        name: 'Oksana',
        age: 22,
        sex: 'Female'
    },
    {
        id: 5,
        name: 'Kiril',
        age: 38,
        sex: 'Male'
    }
]

const initialState: ClientStateInterface = {
    clients: null,
    selectedClient: null,
    error: null
}

const clientReducer = createReducer(
    initialState,
    on(
        getAllClients,
        (state): ClientStateInterface => (
            {...state, clients: allClients}
        )
    ),
    // on(
    //     setClient,
    //     (state):ClientStateInterface => (
    //         {...state}
    //     )
    // ),
    // on(
    //     setClientSuccess,
    //     (state, action):ClientStateInterface => {
    //         if (state.client && state.client === action.client){
    //             return {...state, error: 'There is the same clients.'}
    //         }
    //         return {...state, client: action.client}
    //     }
    // ),
    on(
        getAllClientsFailure,
        (state):ClientStateInterface => (
            {...state, error: 'Something went wrong'}
        )
    ),
    on(
        setSelectedClient,
        (state, action):ClientStateInterface => {
            if (state.selectedClient && state.selectedClient.id === action.selectedClient.id) {
                return {...state, error: 'Client is already here.'}    
            }
            return {...state, selectedClient: action.selectedClient}
        }
    ),
    on(
        setSelectedClientFailure,
        (state, action):ClientStateInterface => (
            {...state, error: action.error}
        )
    ),
    on(
        clearSelectedClient,
        (state):ClientStateInterface => (
            {...state, selectedClient: null}
        )
    ),
    on(
        deleteSelectedClient,
        (state):ClientStateInterface => {
            if (state.selectedClient) {
                // const indexClient = allClients.findIndex((client) => client.id === state.selectedClient.id);
                const clientsWithoutSelected = state.clients.filter((client) => client.id !== state.selectedClient.id);
                return {...state, clients: clientsWithoutSelected}
            }
        }
    )
)

export function reducers(state: ClientStateInterface, action: Action){
    return clientReducer(state, action)
}