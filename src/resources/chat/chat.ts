// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TagAPI from '../tag';
import * as MessagesAPI from './messages';
import { MessageCreateParams, MessageCreateResponse, MessageListResponse, Messages } from './messages';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ChatResource extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  create(body: ChatCreateParams, options?: RequestOptions): APIPromise<ChatCreateResponse> {
    return this._client.post('/api/chat', { body, ...options });
  }

  retrieve(chatID: string, options?: RequestOptions): APIPromise<Chat> {
    return this._client.get(path`/api/chat/${chatID}`, options);
  }

  list(options?: RequestOptions): APIPromise<ChatListResponse> {
    return this._client.get('/api/chat', options);
  }

  addTags(chatID: string, params: ChatAddTagsParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post(path`/api/chat/${chatID}/tags`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Chat {
  id: string;

  userId: string;

  created?: string;

  prompt?: string | null;

  tags?: Array<TagAPI.Tag>;

  title?: string | null;

  updated?: string;
}

export interface Message {
  id: string;

  chatId: string;

  content: string;

  model: string;

  role: number;

  userId: string;

  created?: string;

  personaId?: string | null;

  tokens?: number | null;
}

export interface MessageParams {
  model: string;

  personaId: string | null;

  prompt: string;
}

export type ChatCreateResponse = Array<Message>;

export type ChatListResponse = Array<Chat>;

export interface ChatCreateParams {
  model: string;

  personaId: string | null;

  prompt: string;
}

export interface ChatAddTagsParams {
  body: Array<string>;
}

ChatResource.Messages = Messages;

export declare namespace ChatResource {
  export {
    type Chat as Chat,
    type Message as Message,
    type MessageParams as MessageParams,
    type ChatCreateResponse as ChatCreateResponse,
    type ChatListResponse as ChatListResponse,
    type ChatCreateParams as ChatCreateParams,
    type ChatAddTagsParams as ChatAddTagsParams,
  };

  export {
    Messages as Messages,
    type MessageCreateResponse as MessageCreateResponse,
    type MessageListResponse as MessageListResponse,
    type MessageCreateParams as MessageCreateParams,
  };
}
