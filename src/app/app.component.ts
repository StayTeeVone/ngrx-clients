import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetAllClientsSelector, GetErrorSelector, GetSelectedClientSelector } from './store/client.selectors';
import { IClient } from './store/client.interface';
import { clearSelectedClient, deleteSelectedClient, getAllClients, setSelectedClient } from './store/client.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'ngrxApp';

  allClients$: Observable<IClient[]> = this.store.select(GetAllClientsSelector);
  error$: Observable<string> = this.store.select(GetErrorSelector);
  selectedClient: Observable<IClient> = this.store.select(GetSelectedClientSelector);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getAllClients())
  }

  deleteClient(client: IClient): void {
    this.store.dispatch(setSelectedClient({
      selectedClient: client
    }));
    this.store.dispatch(deleteSelectedClient());
    this.store.dispatch(clearSelectedClient());
  }

  // setClient(settedClient: string): void {
  //   this.store.dispatch(setClientSuccess({
  //     client: settedClient
  //   }))
  // }


}
