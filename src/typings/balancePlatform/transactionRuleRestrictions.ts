/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ActiveNetworkTokensRestriction } from './activeNetworkTokensRestriction';
import { BrandVariantsRestriction } from './brandVariantsRestriction';
import { CounterpartyBankRestriction } from './counterpartyBankRestriction';
import { CounterpartyTypesRestriction } from './counterpartyTypesRestriction';
import { CountriesRestriction } from './countriesRestriction';
import { DayOfWeekRestriction } from './dayOfWeekRestriction';
import { DifferentCurrenciesRestriction } from './differentCurrenciesRestriction';
import { EntryModesRestriction } from './entryModesRestriction';
import { InternationalTransactionRestriction } from './internationalTransactionRestriction';
import { MatchingTransactionsRestriction } from './matchingTransactionsRestriction';
import { MatchingValuesRestriction } from './matchingValuesRestriction';
import { MccsRestriction } from './mccsRestriction';
import { MerchantNamesRestriction } from './merchantNamesRestriction';
import { MerchantsRestriction } from './merchantsRestriction';
import { ProcessingTypesRestriction } from './processingTypesRestriction';
import { RiskScoresRestriction } from './riskScoresRestriction';
import { SameAmountRestriction } from './sameAmountRestriction';
import { SameCounterpartyRestriction } from './sameCounterpartyRestriction';
import { SourceAccountTypesRestriction } from './sourceAccountTypesRestriction';
import { TimeOfDayRestriction } from './timeOfDayRestriction';
import { TotalAmountRestriction } from './totalAmountRestriction';

export class TransactionRuleRestrictions {
    'activeNetworkTokens'?: ActiveNetworkTokensRestriction;
    'brandVariants'?: BrandVariantsRestriction;
    'counterpartyBank'?: CounterpartyBankRestriction;
    'counterpartyTypes'?: CounterpartyTypesRestriction;
    'countries'?: CountriesRestriction;
    'dayOfWeek'?: DayOfWeekRestriction;
    'differentCurrencies'?: DifferentCurrenciesRestriction;
    'entryModes'?: EntryModesRestriction;
    'internationalTransaction'?: InternationalTransactionRestriction;
    'matchingTransactions'?: MatchingTransactionsRestriction;
    'matchingValues'?: MatchingValuesRestriction;
    'mccs'?: MccsRestriction;
    'merchantNames'?: MerchantNamesRestriction;
    'merchants'?: MerchantsRestriction;
    'processingTypes'?: ProcessingTypesRestriction;
    'riskScores'?: RiskScoresRestriction;
    'sameAmountRestriction'?: SameAmountRestriction;
    'sameCounterpartyRestriction'?: SameCounterpartyRestriction;
    'sourceAccountTypes'?: SourceAccountTypesRestriction;
    'timeOfDay'?: TimeOfDayRestriction;
    'totalAmount'?: TotalAmountRestriction;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activeNetworkTokens",
            "baseName": "activeNetworkTokens",
            "type": "ActiveNetworkTokensRestriction"
        },
        {
            "name": "brandVariants",
            "baseName": "brandVariants",
            "type": "BrandVariantsRestriction"
        },
        {
            "name": "counterpartyBank",
            "baseName": "counterpartyBank",
            "type": "CounterpartyBankRestriction"
        },
        {
            "name": "counterpartyTypes",
            "baseName": "counterpartyTypes",
            "type": "CounterpartyTypesRestriction"
        },
        {
            "name": "countries",
            "baseName": "countries",
            "type": "CountriesRestriction"
        },
        {
            "name": "dayOfWeek",
            "baseName": "dayOfWeek",
            "type": "DayOfWeekRestriction"
        },
        {
            "name": "differentCurrencies",
            "baseName": "differentCurrencies",
            "type": "DifferentCurrenciesRestriction"
        },
        {
            "name": "entryModes",
            "baseName": "entryModes",
            "type": "EntryModesRestriction"
        },
        {
            "name": "internationalTransaction",
            "baseName": "internationalTransaction",
            "type": "InternationalTransactionRestriction"
        },
        {
            "name": "matchingTransactions",
            "baseName": "matchingTransactions",
            "type": "MatchingTransactionsRestriction"
        },
        {
            "name": "matchingValues",
            "baseName": "matchingValues",
            "type": "MatchingValuesRestriction"
        },
        {
            "name": "mccs",
            "baseName": "mccs",
            "type": "MccsRestriction"
        },
        {
            "name": "merchantNames",
            "baseName": "merchantNames",
            "type": "MerchantNamesRestriction"
        },
        {
            "name": "merchants",
            "baseName": "merchants",
            "type": "MerchantsRestriction"
        },
        {
            "name": "processingTypes",
            "baseName": "processingTypes",
            "type": "ProcessingTypesRestriction"
        },
        {
            "name": "riskScores",
            "baseName": "riskScores",
            "type": "RiskScoresRestriction"
        },
        {
            "name": "sameAmountRestriction",
            "baseName": "sameAmountRestriction",
            "type": "SameAmountRestriction"
        },
        {
            "name": "sameCounterpartyRestriction",
            "baseName": "sameCounterpartyRestriction",
            "type": "SameCounterpartyRestriction"
        },
        {
            "name": "sourceAccountTypes",
            "baseName": "sourceAccountTypes",
            "type": "SourceAccountTypesRestriction"
        },
        {
            "name": "timeOfDay",
            "baseName": "timeOfDay",
            "type": "TimeOfDayRestriction"
        },
        {
            "name": "totalAmount",
            "baseName": "totalAmount",
            "type": "TotalAmountRestriction"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRuleRestrictions.attributeTypeMap;
    }
}

