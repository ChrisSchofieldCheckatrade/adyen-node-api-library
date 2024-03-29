/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { SplitAmount } from './splitAmount';

export class Split {
    /**
    * The unique identifier of the account to which the split amount is booked. Required if `type` is **MarketPlace** or **BalanceAccount**.  * [Classic Platforms integration](https://docs.adyen.com/classic-platforms): The [`accountCode`](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccount#request-accountCode) of the account to which the split amount is booked. * [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model): The [`balanceAccountId`](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/balanceAccounts/_id_#path-id) of the account to which the split amount is booked.
    */
    'account'?: string;
    'amount'?: SplitAmount;
    /**
    * Your description for the split item.
    */
    'description'?: string;
    /**
    * Your unique reference for the part of the payment booked to the specified `account`.  This is required if `type` is **MarketPlace** ([Classic Platforms integration](https://docs.adyen.com/classic-platforms)) or **BalanceAccount** ([Balance Platform](https://docs.adyen.com/adyen-for-platforms-model)).  For the other types, we also recommend providing a **unique** reference so you can reconcile the split and the associated payment in the transaction overview and in the reports.
    */
    'reference'?: string;
    /**
    * The part of the payment you want to book to the specified `account`.  Possible values for the [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model): * **BalanceAccount**: books part of the payment (specified in `amount`) to the specified `account`. * Transaction fees types that you can book to the specified `account`:    * **AcquiringFees**: the aggregated amount of the interchange and scheme fees.    * **PaymentFee**: the aggregated amount of all transaction fees.    * **AdyenFees**: the aggregated amount of Adyen\'s commission and markup fees.    * **AdyenCommission**: the transaction fees due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/interchange-fees-explained).    * **AdyenMarkup**: the transaction fees due to Adyen under [Interchange ++ pricing](https://www.adyen.com/knowledge-hub/interchange-fees-explained).    * **Interchange**: the fees paid to the issuer for each payment made with the card network.    * **SchemeFee**: the fees paid to the card scheme for using their network.  * **Remainder**: the amount left over after a currency conversion, booked to the specified `account`. * **VAT**: the value-added tax charged on the payment, booked to your platforms liable balance account. * **Commission**: your platform\'s commission (specified in `amount`) on the payment, booked to your liable balance account. * **Default**: in very specific use cases, allows you to book the specified `amount` to the specified `account`. For more information, contact Adyen support.  Possible values for the [Classic Platforms integration](https://docs.adyen.com/classic-platforms): **Commission**, **Default**, **Marketplace**, **PaymentFee**, **VAT**.
    */
    'type': Split.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "SplitAmount"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Split.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return Split.attributeTypeMap;
    }
}

export namespace Split {
    export enum TypeEnum {
        AcquiringFees = 'AcquiringFees',
        AdyenCommission = 'AdyenCommission',
        AdyenFees = 'AdyenFees',
        AdyenMarkup = 'AdyenMarkup',
        BalanceAccount = 'BalanceAccount',
        Commission = 'Commission',
        Default = 'Default',
        Interchange = 'Interchange',
        MarketPlace = 'MarketPlace',
        PaymentFee = 'PaymentFee',
        Remainder = 'Remainder',
        SchemeFee = 'SchemeFee',
        Surcharge = 'Surcharge',
        Tip = 'Tip',
        Vat = 'VAT'
    }
}
