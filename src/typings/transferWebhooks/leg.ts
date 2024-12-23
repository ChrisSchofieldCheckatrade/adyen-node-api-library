/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Leg {
    /**
    * The IATA 3-letter airport code of the destination airport. This field is required if the airline data includes leg details.
    */
    'arrivalAirportCode'?: string;
    /**
    * The basic fare code for this leg.
    */
    'basicFareCode'?: string;
    /**
    * IATA code of the carrier operating the flight.
    */
    'carrierCode'?: string;
    /**
    * The IATA three-letter airport code of the departure airport. This field is required if the airline data includes leg details
    */
    'departureAirportCode'?: string;
    /**
    * The flight departure date.
    */
    'departureDate'?: string;
    /**
    * The flight identifier.
    */
    'flightNumber'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "arrivalAirportCode",
            "baseName": "arrivalAirportCode",
            "type": "string"
        },
        {
            "name": "basicFareCode",
            "baseName": "basicFareCode",
            "type": "string"
        },
        {
            "name": "carrierCode",
            "baseName": "carrierCode",
            "type": "string"
        },
        {
            "name": "departureAirportCode",
            "baseName": "departureAirportCode",
            "type": "string"
        },
        {
            "name": "departureDate",
            "baseName": "departureDate",
            "type": "string"
        },
        {
            "name": "flightNumber",
            "baseName": "flightNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Leg.attributeTypeMap;
    }
}

