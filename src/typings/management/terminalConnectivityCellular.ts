/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class TerminalConnectivityCellular {
    /**
    * The integrated circuit card identifier (ICCID) of the primary SIM card in the terminal.
    */
    'iccid'?: string;
    /**
    * The integrated circuit card identifier (ICCID) of the secondary SIM card in the terminal, typically used for a [third-party SIM card](https://docs.adyen.com/point-of-sale/design-your-integration/network-and-connectivity/cellular-failover/#using-a-third-party-sim-card).
    */
    'iccid2'?: string;
    /**
    * On a terminal that supports 3G or 4G connectivity, indicates the status of the primary SIM card in the terminal.
    */
    'status'?: TerminalConnectivityCellular.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "iccid",
            "baseName": "iccid",
            "type": "string"
        },
        {
            "name": "iccid2",
            "baseName": "iccid2",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TerminalConnectivityCellular.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return TerminalConnectivityCellular.attributeTypeMap;
    }
}

export namespace TerminalConnectivityCellular {
    export enum StatusEnum {
        Activated = 'activated',
        Deactivated = 'deactivated',
        Deprecated = 'deprecated',
        Inventory = 'inventory',
        ReadyForActivation = 'readyForActivation'
    }
}
