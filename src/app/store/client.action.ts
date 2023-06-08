import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action-types";
import { IClient } from "./client.interface";

export const getAllClients = createAction(
    ActionTypes.GET_ALL_CLIENTS
)

// export const setClientSuccess = createAction(
//     ActionTypes.SET_CLIENT_SUCCESS,
//     props<{client: string}>()
// )

export const getAllClientsFailure = createAction(
    ActionTypes.GET_ALL_CLIENTS_FAILURE
)

export const setSelectedClient = createAction(
    ActionTypes.SET_SELECTED_CLIENT,
    props<{selectedClient: IClient}>()
)

export const setSelectedClientFailure = createAction(
    ActionTypes.SET_SELECTED_CLIENT_FAILURE,
    props<{error: string}>()
)

export const clearSelectedClient = createAction(
    ActionTypes.CLEAR_SELECTED_CLIENT
)

export const deleteSelectedClient = createAction(
    ActionTypes.DELETE_CLIENT
)
