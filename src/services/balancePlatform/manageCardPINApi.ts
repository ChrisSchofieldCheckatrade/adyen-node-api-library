/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { 
    PinChangeRequest,
    PinChangeResponse,
    PublicKeyResponse,
    RevealPinRequest,
    RevealPinResponse,
    ObjectSerializer
} from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class ManageCardPINApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/bcl/v2";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Change a card PIN
    * @param pinChangeRequest {@link PinChangeRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PinChangeResponse }
    */
    public async changeCardPin(pinChangeRequest: PinChangeRequest, requestOptions?: IRequest.Options): Promise<PinChangeResponse> {
        const endpoint = `${this.baseUrl}/pins/change`;
        const resource = new Resource(this, endpoint);
        const request: PinChangeRequest = ObjectSerializer.serialize(pinChangeRequest, "PinChangeRequest");
        const response = await getJsonResponse<PinChangeRequest, PinChangeResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PinChangeResponse");
    }

    /**
    * @summary Get an RSA public key
    * @param requestOptions {@link IRequest.Options }
    * @param purpose {@link string } The purpose of the public key.  Possible values: **pinChange**, **pinReveal**, **panReveal**.  Default value: **pinReveal**.
    * @param format {@link string } The encoding format of public key.  Possible values: **jwk**, **pem**.  Default value: **pem**.
    * @return {@link PublicKeyResponse }
    */
    public async publicKey(purpose?: string, format?: string, requestOptions?: IRequest.Options): Promise<PublicKeyResponse> {
        const endpoint = `${this.baseUrl}/publicKey`;
        const resource = new Resource(this, endpoint);
        const hasDefinedQueryParams = purpose ?? format;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(purpose) requestOptions.params["purpose"] = purpose;
            if(format) requestOptions.params["format"] = format;
        }
        const response = await getJsonResponse<string, PublicKeyResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PublicKeyResponse");
    }

    /**
    * @summary Reveal a card PIN
    * @param revealPinRequest {@link RevealPinRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link RevealPinResponse }
    */
    public async revealCardPin(revealPinRequest: RevealPinRequest, requestOptions?: IRequest.Options): Promise<RevealPinResponse> {
        const endpoint = `${this.baseUrl}/pins/reveal`;
        const resource = new Resource(this, endpoint);
        const request: RevealPinRequest = ObjectSerializer.serialize(revealPinRequest, "RevealPinRequest");
        const response = await getJsonResponse<RevealPinRequest, RevealPinResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "RevealPinResponse");
    }
}
