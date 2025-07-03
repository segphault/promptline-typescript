// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ChatAPI from './chat/chat';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TagResource extends APIResource {
  create(body: TagCreateParams, options?: RequestOptions): APIPromise<Tag> {
    return this._client.post('/api/tag', { body, ...options });
  }

  retrieve(tagID: string, options?: RequestOptions): APIPromise<Tag> {
    return this._client.get(path`/api/tag/${tagID}`, options);
  }

  update(tagID: string, body: TagUpdateParams, options?: RequestOptions): APIPromise<Tag> {
    return this._client.post(path`/api/tag/${tagID}`, { body, ...options });
  }

  list(options?: RequestOptions): APIPromise<TagListResponse> {
    return this._client.get('/api/tag', options);
  }

  delete(tagID: string, options?: RequestOptions): APIPromise<TagDeleteResponse> {
    return this._client.delete(path`/api/tag/${tagID}`, options);
  }

  listChats(tagID: string, options?: RequestOptions): APIPromise<TagListChatsResponse> {
    return this._client.get(path`/api/tag/${tagID}/chats`, options);
  }
}

export interface Tag {
  id: string;

  name: string;

  userId: string;

  icon?: string | null;

  parentId?: string | null;
}

export interface TagParams {
  icon: string | null;

  name: string;

  parentId: string | null;
}

export type TagListResponse = Array<Tag>;

export type TagDeleteResponse = boolean;

export type TagListChatsResponse = Array<ChatAPI.Chat>;

export interface TagCreateParams {
  icon: string | null;

  name: string;

  parentId: string | null;
}

export interface TagUpdateParams {
  icon: string | null;

  name: string;

  parentId: string | null;
}

export declare namespace TagResource {
  export {
    type Tag as Tag,
    type TagParams as TagParams,
    type TagListResponse as TagListResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagListChatsResponse as TagListChatsResponse,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
  };
}
