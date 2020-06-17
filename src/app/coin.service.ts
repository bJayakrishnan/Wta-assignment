import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CoinService {

  result: any;
  constructor(private http: HttpClient) {}

  addCoin(Fname, Lname, Mob_No, Bdate, Address, Sex, Salary, Dno) {
    const uri = 'http://localhost:4000/coins/add';
    const obj = {
      Fname: Fname,
      Lname: Lname, 
      Mob_No: Mob_No, 
      Bdate: Bdate, 
      Address: Address, 
      Sex: Sex, 
      Salary: Salary, 
      Dno: Dno
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getCoins() {
    const uri = 'http://localhost:4000/coins';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editCoin(id) {
    const uri = 'http://localhost:4000/coins/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateCoin(Fname, Lname, Mob_No, Bdate, Address, Sex, Salary, Dno, id) {
    const uri = 'http://localhost:4000/coins/update/' + id;

    const obj = {
      Fname: Fname,
      Lname: Lname, 
      Mob_No: Mob_No, 
      Bdate: Bdate, 
      Address: Address, 
      Sex: Sex, 
      Salary: Salary, 
      Dno: Dno
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteCoin(id) {
    const uri = 'http://localhost:4000/coins/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
