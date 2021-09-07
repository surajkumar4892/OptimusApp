import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Controllers } from 'src/app/models/controllers';
import { IConfig } from 'src/app/models/iconfig';
import { loginDetail } from 'src/app/models/login.model';
import { ReturnResult } from 'src/app/models/return-result';
import { userDetail } from 'src/app/models/userdetail.model';
import { BaseService } from '../base/base.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(public httpClient: HttpClient,
    public controllers: Controllers,
    public config: ConfigService<IConfig>) {
    super(httpClient, config.getSettingsObject().APIUrl);
  }

  public async getUserDetails(loginDetailData: loginDetail): Promise<ReturnResult<userDetail>> {
    return this.PostReturn<loginDetail, ReturnResult<userDetail>>(this.controllers.login, loginDetailData)
  }


}