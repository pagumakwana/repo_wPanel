import { Injectable } from '@angular/core';
import { ApiConstant } from "../../_models/apiconstant";
import { BaseServiceHelper } from '../../_appService/baseHelper.service';


@Injectable()
export class ClientService {
    constructor(private _BaseServiceHelper: BaseServiceHelper) {

    }
    /**    
   * @return an `Service Used For add client`.
   */
    addModifyClient(_client) {
        return this._BaseServiceHelper._ApiService.post(ApiConstant.Client.addModifyClient, _client);
    }

    /**    
    * @return an `Service Used For get client list`.
    */
    getClientList(clientId) {
        let params = "?Ref_Client_ID=" + clientId;
        return this._BaseServiceHelper._ApiService.get(ApiConstant.Client.clientList + params);
    }

}