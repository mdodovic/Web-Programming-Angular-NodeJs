import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  fetchAllPartsService() {
    return this.http.get(`${this.uri}/parts/fetchAllParts`);
  }

  addNewPart(partName, amount) {
    const data = {
      naziv: partName,
      stanje: amount
    }
    return this.http.post(`${this.uri}/parts/addPart`, data);
  }

  addPartAmount(partName) {
    const data = {
      naziv: partName,
    }
    return this.http.post(`${this.uri}/parts/addPartAmount`, data);
  }

}
