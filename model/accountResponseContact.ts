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
import { ContactResponseNote } from './contactResponseNote';
import { ContactResponseCompany } from './contactResponseCompany';
import { ContactResponseAddress } from './contactResponseAddress';


export interface AccountResponseContact { 
    /**
     * Email address
     */
    email: string | null;
    /**
     * Phone number
     */
    phoneNumber: string | null;
    /**
     * Mobile number
     */
    mobileNumber: string;
    /**
     * Fax number
     */
    faxNumber: string | null;
    /**
     * Time of creation
     */
    createdAt: string;
    /**
     * Contact Id
     */
    contactId: string;
    /**
     * First name
     */
    firstName: string;
    /**
     * Middle name
     */
    middleInitial?: string;
    /**
     * Last name
     */
    lastName: string;
    /**
     * A list of companies that contact belongs to
     */
    companies: Array<ContactResponseCompany>;
    /**
     * Notes about the contact
     */
    notes: Array<ContactResponseNote>;
    address: ContactResponseAddress | null;
}

