/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PaymentInstrumentRequirement {
    /**
    * Specifies the requirements for the payment instrument that need to be included in the request for a particular route.
    */
    'description'?: string;
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.
    */
    'issuingCountryCode'?: string;
    /**
    * Specifies if the requirement only applies to transfers to another balance platform.
    */
    'onlyForCrossBalancePlatform'?: boolean;
    /**
    * The type of the payment instrument. For example, \"BankAccount\" or \"Card\".
    */
    'paymentInstrumentType'?: PaymentInstrumentRequirement.PaymentInstrumentTypeEnum;
    /**
    * **paymentInstrumentRequirement**
    */
    'type': PaymentInstrumentRequirement.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "issuingCountryCode",
            "baseName": "issuingCountryCode",
            "type": "string"
        },
        {
            "name": "onlyForCrossBalancePlatform",
            "baseName": "onlyForCrossBalancePlatform",
            "type": "boolean"
        },
        {
            "name": "paymentInstrumentType",
            "baseName": "paymentInstrumentType",
            "type": "PaymentInstrumentRequirement.PaymentInstrumentTypeEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentInstrumentRequirement.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentRequirement.attributeTypeMap;
    }
}

export namespace PaymentInstrumentRequirement {
    export enum PaymentInstrumentTypeEnum {
        BankAccount = 'BankAccount',
        Card = 'Card'
    }
    export enum TypeEnum {
        PaymentInstrumentRequirement = 'paymentInstrumentRequirement'
    }
}
