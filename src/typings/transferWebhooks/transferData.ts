/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { BalanceMutation } from './balanceMutation';
import { BankCategoryData } from './bankCategoryData';
import { InternalCategoryData } from './internalCategoryData';
import { IssuedCard } from './issuedCard';
import { PaymentInstrument } from './paymentInstrument';
import { PlatformPayment } from './platformPayment';
import { ResourceReference } from './resourceReference';
import { TransactionRulesResult } from './transactionRulesResult';
import { TransferEvent } from './transferEvent';
import { TransferNotificationCounterParty } from './transferNotificationCounterParty';
import { TransferNotificationTransferTracking } from './transferNotificationTransferTracking';

export class TransferData {
    'accountHolder'?: ResourceReference;
    'amount': Amount;
    'balanceAccount'?: ResourceReference;
    /**
    * The unique identifier of the balance platform.
    */
    'balancePlatform'?: string;
    /**
    * The list of the latest balance statuses in the transfer.
    */
    'balances'?: Array<BalanceMutation>;
    /**
    * The category of transfer.  Possible values:   - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.  - **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.  - **issuedCard**: Transfer initiated by a Adyen-issued card.  - **platformPayment**: Fund movements related to payments that are acquired for your users.
    */
    'category': TransferData.CategoryEnum;
    /**
    * The relevant data according to the transfer category.
    */
    'categoryData'?: BankCategoryData | InternalCategoryData | IssuedCard | PlatformPayment;
    'counterparty'?: TransferNotificationCounterParty;
    /**
    * The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.
    */
    'creationDate'?: Date;
    /**
    * Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.  Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , \' + Space**  Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ \' \" ! ?**
    */
    'description'?: string;
    /**
    * The direction of the transfer.  Possible values: **incoming**, **outgoing**.
    */
    'direction'?: TransferData.DirectionEnum;
    /**
    * The list of events leading up to the current status of the transfer.
    */
    'events'?: Array<TransferEvent>;
    /**
    * The ID of the resource.
    */
    'id'?: string;
    'paymentInstrument'?: PaymentInstrument;
    /**
    * Additional information about the status of the transfer.
    */
    'reason'?: TransferData.ReasonEnum;
    /**
    * Your reference for the transfer, used internally within your platform. If you don\'t provide this in the request, Adyen generates a unique reference.
    */
    'reference'?: string;
    /**
    *  A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.   Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.  - **internal**: 80 characters  - **bank**: 35 characters when transferring to an IBAN, 15 characters for others.
    */
    'referenceForBeneficiary'?: string;
    /**
    * The sequence number of the transfer notification. The numbers start from 1 and increase with each new notification for a specific transfer.  It can help you restore the correct sequence of events even if they arrive out of order.
    */
    'sequenceNumber'?: number;
    /**
    * The result of the transfer.   For example, **authorised**, **refused**, or **error**.
    */
    'status': TransferData.StatusEnum;
    'tracking'?: TransferNotificationTransferTracking;
    'transactionRulesResult'?: TransactionRulesResult;
    /**
    * The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.
    */
    'type'?: TransferData.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolder",
            "baseName": "accountHolder",
            "type": "ResourceReference"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "balanceAccount",
            "baseName": "balanceAccount",
            "type": "ResourceReference"
        },
        {
            "name": "balancePlatform",
            "baseName": "balancePlatform",
            "type": "string"
        },
        {
            "name": "balances",
            "baseName": "balances",
            "type": "Array<BalanceMutation>"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "TransferData.CategoryEnum"
        },
        {
            "name": "categoryData",
            "baseName": "categoryData",
            "type": "BankCategoryData | InternalCategoryData | IssuedCard | PlatformPayment"
        },
        {
            "name": "counterparty",
            "baseName": "counterparty",
            "type": "TransferNotificationCounterParty"
        },
        {
            "name": "creationDate",
            "baseName": "creationDate",
            "type": "Date"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "TransferData.DirectionEnum"
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<TransferEvent>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "paymentInstrument",
            "baseName": "paymentInstrument",
            "type": "PaymentInstrument"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "TransferData.ReasonEnum"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "referenceForBeneficiary",
            "baseName": "referenceForBeneficiary",
            "type": "string"
        },
        {
            "name": "sequenceNumber",
            "baseName": "sequenceNumber",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TransferData.StatusEnum"
        },
        {
            "name": "tracking",
            "baseName": "tracking",
            "type": "TransferNotificationTransferTracking"
        },
        {
            "name": "transactionRulesResult",
            "baseName": "transactionRulesResult",
            "type": "TransactionRulesResult"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TransferData.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return TransferData.attributeTypeMap;
    }
}

export namespace TransferData {
    export enum CategoryEnum {
        Bank = 'bank',
        Internal = 'internal',
        IssuedCard = 'issuedCard',
        PlatformPayment = 'platformPayment'
    }
    export enum DirectionEnum {
        Incoming = 'incoming',
        Outgoing = 'outgoing'
    }
    export enum ReasonEnum {
        AmountLimitExceeded = 'amountLimitExceeded',
        Approved = 'approved',
        BalanceAccountTemporarilyBlockedByTransactionRule = 'balanceAccountTemporarilyBlockedByTransactionRule',
        CounterpartyAccountBlocked = 'counterpartyAccountBlocked',
        CounterpartyAccountClosed = 'counterpartyAccountClosed',
        CounterpartyAccountNotFound = 'counterpartyAccountNotFound',
        CounterpartyAddressRequired = 'counterpartyAddressRequired',
        CounterpartyBankTimedOut = 'counterpartyBankTimedOut',
        CounterpartyBankUnavailable = 'counterpartyBankUnavailable',
        DeclinedByTransactionRule = 'declinedByTransactionRule',
        Error = 'error',
        NotEnoughBalance = 'notEnoughBalance',
        RefusedByCounterpartyBank = 'refusedByCounterpartyBank',
        RouteNotFound = 'routeNotFound',
        ScaFailed = 'scaFailed',
        Unknown = 'unknown'
    }
    export enum StatusEnum {
        ApprovalPending = 'approvalPending',
        AtmWithdrawal = 'atmWithdrawal',
        AtmWithdrawalReversalPending = 'atmWithdrawalReversalPending',
        AtmWithdrawalReversed = 'atmWithdrawalReversed',
        AuthAdjustmentAuthorised = 'authAdjustmentAuthorised',
        AuthAdjustmentError = 'authAdjustmentError',
        AuthAdjustmentRefused = 'authAdjustmentRefused',
        Authorised = 'authorised',
        BankTransfer = 'bankTransfer',
        BankTransferPending = 'bankTransferPending',
        Booked = 'booked',
        BookingPending = 'bookingPending',
        Cancelled = 'cancelled',
        CapturePending = 'capturePending',
        CaptureReversalPending = 'captureReversalPending',
        CaptureReversed = 'captureReversed',
        Captured = 'captured',
        CapturedExternally = 'capturedExternally',
        Chargeback = 'chargeback',
        ChargebackExternally = 'chargebackExternally',
        ChargebackPending = 'chargebackPending',
        ChargebackReversalPending = 'chargebackReversalPending',
        ChargebackReversed = 'chargebackReversed',
        Credited = 'credited',
        DepositCorrection = 'depositCorrection',
        DepositCorrectionPending = 'depositCorrectionPending',
        Dispute = 'dispute',
        DisputeClosed = 'disputeClosed',
        DisputeExpired = 'disputeExpired',
        DisputeNeedsReview = 'disputeNeedsReview',
        Error = 'error',
        Expired = 'expired',
        Failed = 'failed',
        Fee = 'fee',
        FeePending = 'feePending',
        InternalTransfer = 'internalTransfer',
        InternalTransferPending = 'internalTransferPending',
        InvoiceDeduction = 'invoiceDeduction',
        InvoiceDeductionPending = 'invoiceDeductionPending',
        ManualCorrectionPending = 'manualCorrectionPending',
        ManuallyCorrected = 'manuallyCorrected',
        MatchedStatement = 'matchedStatement',
        MatchedStatementPending = 'matchedStatementPending',
        MerchantPayin = 'merchantPayin',
        MerchantPayinPending = 'merchantPayinPending',
        MerchantPayinReversed = 'merchantPayinReversed',
        MerchantPayinReversedPending = 'merchantPayinReversedPending',
        MiscCost = 'miscCost',
        MiscCostPending = 'miscCostPending',
        PaymentCost = 'paymentCost',
        PaymentCostPending = 'paymentCostPending',
        Received = 'received',
        RefundPending = 'refundPending',
        RefundReversalPending = 'refundReversalPending',
        RefundReversed = 'refundReversed',
        Refunded = 'refunded',
        RefundedExternally = 'refundedExternally',
        Refused = 'refused',
        ReserveAdjustment = 'reserveAdjustment',
        ReserveAdjustmentPending = 'reserveAdjustmentPending',
        Returned = 'returned',
        SecondChargeback = 'secondChargeback',
        SecondChargebackPending = 'secondChargebackPending',
        Undefined = 'undefined'
    }
    export enum TypeEnum {
        AtmWithdrawal = 'atmWithdrawal',
        AtmWithdrawalReversal = 'atmWithdrawalReversal',
        BalanceAdjustment = 'balanceAdjustment',
        BalanceMigration = 'balanceMigration',
        BalanceRollover = 'balanceRollover',
        BankTransfer = 'bankTransfer',
        Capture = 'capture',
        CaptureReversal = 'captureReversal',
        CardTransfer = 'cardTransfer',
        CashOutFee = 'cashOutFee',
        CashOutFunding = 'cashOutFunding',
        CashOutInstruction = 'cashOutInstruction',
        Chargeback = 'chargeback',
        ChargebackCorrection = 'chargebackCorrection',
        ChargebackReversal = 'chargebackReversal',
        ChargebackReversalCorrection = 'chargebackReversalCorrection',
        DepositCorrection = 'depositCorrection',
        Fee = 'fee',
        Grant = 'grant',
        Installment = 'installment',
        InstallmentReversal = 'installmentReversal',
        InternalTransfer = 'internalTransfer',
        InvoiceDeduction = 'invoiceDeduction',
        Leftover = 'leftover',
        ManualCorrection = 'manualCorrection',
        MiscCost = 'miscCost',
        Payment = 'payment',
        PaymentCost = 'paymentCost',
        Refund = 'refund',
        RefundReversal = 'refundReversal',
        Repayment = 'repayment',
        ReserveAdjustment = 'reserveAdjustment',
        SecondChargeback = 'secondChargeback',
        SecondChargebackCorrection = 'secondChargebackCorrection'
    }
}
