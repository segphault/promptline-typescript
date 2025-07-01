// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Promptline } from '../client';

export abstract class APIResource {
  protected _client: Promptline;

  constructor(client: Promptline) {
    this._client = client;
  }
}
