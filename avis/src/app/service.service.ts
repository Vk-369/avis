import { Injectable } from '@angular/core';
import { settings } from './settings';
import { CommonServiceService } from './common-service.service';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _commonService: CommonServiceService,) {}

  checkMailExists(body: any) {
    const url = settings.API.CHECK_MAIL_EXISTS;
    return this._commonService.callApi({ url, method: 'LOGIN', body });
  }

  secretKey: string = 'encrypt-key-vk369';
  
  encodeParams(params: any): string {
    // const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(params), this.secretKey).toString();
    const encryptedData = JSON.stringify(params);

    return encryptedData;
  }

  decodeParams(encryptedData: any): any {
    const decryptedData = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    // const decryptedObject = JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
    // const decryptedObject = JSON.parse(encryptedData);
    const decryptedObject = JSON.parse(encryptedData);

    

    return decryptedObject;
  }

    // const decryptedObject = JSON.parse(encryptedData);
    // const encryptedData = JSON.stringify(params);


  encrypt(body: any): string {
    const encryptedData = CryptoJS.AES.encrypt(body, this.secretKey).toString();
    return encryptedData;
  }

  decrypt(response: any): any {
    const decryptedData = CryptoJS.AES.decrypt(response, this.secretKey);
    const decryptedObject = JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
    return decryptedObject;
  }

}
