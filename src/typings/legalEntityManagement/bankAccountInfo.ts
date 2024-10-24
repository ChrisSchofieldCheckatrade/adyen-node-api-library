/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AULocalAccountIdentification } from './aULocalAccountIdentification';
import { CALocalAccountIdentification } from './cALocalAccountIdentification';
import { CZLocalAccountIdentification } from './cZLocalAccountIdentification';
import { DKLocalAccountIdentification } from './dKLocalAccountIdentification';
import { HKLocalAccountIdentification } from './hKLocalAccountIdentification';
import { HULocalAccountIdentification } from './hULocalAccountIdentification';
import { IbanAccountIdentification } from './ibanAccountIdentification';
import { NOLocalAccountIdentification } from './nOLocalAccountIdentification';
import { NZLocalAccountIdentification } from './nZLocalAccountIdentification';
import { NumberAndBicAccountIdentification } from './numberAndBicAccountIdentification';
import { PLLocalAccountIdentification } from './pLLocalAccountIdentification';
import { SELocalAccountIdentification } from './sELocalAccountIdentification';
import { SGLocalAccountIdentification } from './sGLocalAccountIdentification';
import { UKLocalAccountIdentification } from './uKLocalAccountIdentification';
import { USLocalAccountIdentification } from './uSLocalAccountIdentification';

export class BankAccountInfo {
    /**
    * Identification of the bank account.
    */
    'accountIdentification'?: AULocalAccountIdentification | CALocalAccountIdentification | CZLocalAccountIdentification | DKLocalAccountIdentification | HKLocalAccountIdentification | HULocalAccountIdentification | IbanAccountIdentification | NOLocalAccountIdentification | NZLocalAccountIdentification | NumberAndBicAccountIdentification | PLLocalAccountIdentification | SELocalAccountIdentification | SGLocalAccountIdentification | UKLocalAccountIdentification | USLocalAccountIdentification | null;
    /**
    * The type of bank account.
    *
	* @deprecated since Legal Entity Management API v2
    */
    'accountType'?: string;
    /**
    * The name of the banking institution where the bank account is held.
    */
    'bankName'?: string;
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the bank account is registered. For example, **NL**.
    */
    'countryCode'?: string;
    /**
    * Identifies if the bank account was created through [instant bank verification](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-08-hosted-onboarding).
    */
    'trustedSource'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountIdentification",
            "baseName": "accountIdentification",
            "type": "AULocalAccountIdentification | CALocalAccountIdentification | CZLocalAccountIdentification | DKLocalAccountIdentification | HKLocalAccountIdentification | HULocalAccountIdentification | IbanAccountIdentification | NOLocalAccountIdentification | NZLocalAccountIdentification | NumberAndBicAccountIdentification | PLLocalAccountIdentification | SELocalAccountIdentification | SGLocalAccountIdentification | UKLocalAccountIdentification | USLocalAccountIdentification | null"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "string"
        },
        {
            "name": "bankName",
            "baseName": "bankName",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "trustedSource",
            "baseName": "trustedSource",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return BankAccountInfo.attributeTypeMap;
    }
}

