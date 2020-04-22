import { Injectable } from '@angular/core';
import * as  CryptoJS from "crypto-js";
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class EncryptedStorage {

    APPID: string = 'z@picKPRo@d$2019';

    constructor() { }
    /**
     * Use this function to set the data on cache
     * @param key 
     * @param value 
     * @returns 
     */
    set(key, value) {
        if (value == null || value == undefined) {
            value = ""
        }
        var ciphertext = CryptoJS.AES.encrypt(value.toString(), this.APPID);
        let btoa_ciphertext = btoa(ciphertext.toString());
        if (btoa_ciphertext != null)
            return localStorage.setItem(key, btoa_ciphertext.toString());
    }

    get(key): Promise<any> {        
        let data = localStorage.getItem(key)
        if (data != null) {
            let atob_str = atob(data);
            var bytes = CryptoJS.AES.decrypt(atob_str, this.APPID);
            var plaintext = bytes.toString(CryptoJS.enc.Utf8);    
            if (plaintext == 'true') {
                return Promise.resolve(true)
            }
            else if (plaintext == 'false') {
                return Promise.resolve(false)
            }
            else {
                return Promise.resolve(plaintext)
            }
        }
        else {
            return Promise.resolve(null)
        }


    }

    remove(key) {
        return localStorage.removeItem(key);
    }
}