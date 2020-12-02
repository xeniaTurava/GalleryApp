import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }
  // Get all workers in the industry
  getEvents(): Observable <any>{
    return this.http.get<Event[]>('/api/v1/geolocation');
  }

}
