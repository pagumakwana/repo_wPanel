
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppSessionService } from './appsession.service';
import { EncryptedStorage } from '../_appModel/encryptedstorage';
import { ApiService } from './api.service';
import { CommonService } from './common.service';
@Injectable()
export class BaseServiceHelper {

    constructor(public _ApiService: ApiService,
        public _appSessionService: AppSessionService,
        public _commonService: CommonService,
        public _encryptedStorage: EncryptedStorage) { }
}
