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
import { BadRequestError400ResponseError } from './badRequestError400ResponseError';


export interface BadRequestError400Response { 
    readonly data: Array<string>;
    readonly success: boolean;
    error: BadRequestError400ResponseError;
}

