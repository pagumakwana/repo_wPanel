
import { Injectable } from '@angular/core';
import { EncryptedStorage } from '../_appModel/encryptedstorage';
import { enAppSession } from '../_appModel/enAppSession';


@Injectable()
export class AppSessionService {
    constructor(public _encryptedStorage: EncryptedStorage) { }
    setUserSession(responseData) {
        this._encryptedStorage.set(enAppSession.Ref_User_ID, responseData.Ref_User_ID);
        this._encryptedStorage.set(enAppSession.FullName, responseData.FullName);
        this._encryptedStorage.set(enAppSession.MobileNumber, responseData.Mobile);
        this._encryptedStorage.set(enAppSession.Email_ID, responseData.Email);
        this._encryptedStorage.set(enAppSession.IsGuestUser, false);
        this._encryptedStorage.set(enAppSession.HasLogin, true);
    }

    clearUserSession() {
        this._encryptedStorage.set(enAppSession.FullName, '');
        this._encryptedStorage.set(enAppSession.MobileNumber, '');
        this._encryptedStorage.set(enAppSession.Email_ID, '');
        this._encryptedStorage.set(enAppSession.IsGuestUser, true);
        this._encryptedStorage.set(enAppSession.Ref_User_ID, 0);
        this._encryptedStorage.set(enAppSession.HasLogin, false);
    }

}