/**
 * ManageSpace CRM API
 * ManageSpace CRM API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ContactRequest } from './contactRequest';
import { CompanyAddressRequest } from './companyAddressRequest';


export interface CreateCompanyRequest { 
    /**
     * Email address
     */
    email?: string;
    /**
     * Phone number
     */
    phoneNumber?: string;
    /**
     * Mobile number
     */
    mobileNumber: string;
    /**
     * Fax number
     */
    faxNumber?: string;
    /**
     * Notes
     */
    notes: Array<string>;
    /**
     * Company name
     */
    companyName: string;
    /**
     * Account holder(s)
     */
    companyContacts?: Array<ContactRequest>;
    address?: CompanyAddressRequest;
}

