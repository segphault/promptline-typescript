// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Stream } from '../core/streaming';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Events extends APIResource {
  list(options?: RequestOptions): APIPromise<Stream<EventListResponse>> {
    return this._client.get('/api/events', {
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<EventListResponse>>;
  }
}

export interface EventListResponse {
  data?: EventListResponse.Data | null;

  eventId?: string | null;

  eventType?: string | null;

  reconnectionInterval?: string | null;
}

export namespace EventListResponse {
  export interface Data {
    eventType: string;
  }
}

export declare namespace Events {
  export { type EventListResponse as EventListResponse };
}
