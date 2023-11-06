/**
 * ManageSpace CRM API
 * ManageSpace CRM API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Company address
 */
export interface CompanyResponseAddress { 
    /**
     * First line of the address, typically includes street number and name
     */
    addressLineOne: string;
    /**
     * Second line of the address, typically includes apartment, suite or unit number
     */
    addressLineTwo: string | null;
    /**
     * City or town where the address is located
     */
    city: string;
    /**
     * State, province or region where the address is located
     */
    province: string;
    /**
     * Postal or zip code for the address
     */
    postalCode: string;
    /**
     * Country where the address is located
     */
    country: string;
    /**
     * company address Id
     */
    companyAddressId: string;
}

