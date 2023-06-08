import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AppStateInterface } from "./app-state.interface"
import { ClientStateInterface } from "./clients-state.interface"

export const ClientFeatureSelector = createFeatureSelector<
    AppStateInterface, ClientStateInterface
>('storedClient')

export const GetAllClientsSelector = createSelector(
    ClientFeatureSelector, 
    (clientState: ClientStateInterface) => clientState.clients
)

export const GetErrorSelector = createSelector(
    ClientFeatureSelector,
    (clientState: ClientStateInterface) => clientState.error
)

export const GetSelectedClientSelector = createSelector(
    ClientFeatureSelector, 
    (clientState: ClientStateInterface) => clientState.selectedClient
)