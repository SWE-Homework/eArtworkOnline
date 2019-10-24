import {EventEmitter, Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  uploadURL = 'http://localhost:8080/eartwork/api/useraccount/login';

  isLoggedIn = false;
  emmitter = new EventEmitter<object>();
  userLogin;

  form: FormGroup = new FormGroup({
    mail: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required] )
  });

  emitValue(value: object) {
    this.emmitter.emit(value);
  }

  loginIn() {
    const user = {
      email: this.form.get('mail').value,
      password: this.form.get('password').value
    };
    return this.httpClient.post(this.uploadURL , user);
  }


  initializeForm() {
    this.form.reset();
  }
}
