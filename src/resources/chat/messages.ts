// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChatAPI from './chat';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  create(
    chatID: string,
    body: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<MessageCreateResponse> {
    return this._client.post(path`/api/chat/${chatID}/messages`, { body, ...options });
  }

  list(chatID: string, options?: RequestOptions): APIPromise<MessageListResponse> {
    return this._client.get(path`/api/chat/${chatID}/messages`, options);
  }
}

export type MessageCreateResponse = Array<ChatAPI.Message>;

export type MessageListResponse = Array<ChatAPI.Message>;

export interface MessageCreateParams {
  model: string;

  personaId: string | null;

  prompt: string;
}

export declare namespace Messages {
  export {
    type MessageCreateResponse as MessageCreateResponse,
    type MessageListResponse as MessageListResponse,
    type MessageCreateParams as MessageCreateParams,
  };
}
