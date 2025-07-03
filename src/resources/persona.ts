// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PersonaResource extends APIResource {
  create(body: PersonaCreateParams, options?: RequestOptions): APIPromise<Persona> {
    return this._client.post('/api/persona', { body, ...options });
  }

  retrieve(options?: RequestOptions): APIPromise<PersonaRetrieveResponse> {
    return this._client.get('/api/persona', options);
  }
}

export interface Persona {
  id: string;

  name: string;

  userId: string;

  description?: string | null;

  instructions?: string | null;
}

export type PersonaRetrieveResponse = Array<Persona>;

export interface PersonaCreateParams {
  description: string | null;

  instructions: string | null;

  name: string;
}

export declare namespace PersonaResource {
  export {
    type Persona as Persona,
    type PersonaRetrieveResponse as PersonaRetrieveResponse,
    type PersonaCreateParams as PersonaCreateParams,
  };
}
