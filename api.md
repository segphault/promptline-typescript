# Persona

Types:

- <code><a href="./src/resources/persona.ts">Persona</a></code>
- <code><a href="./src/resources/persona.ts">PersonaRetrieveResponse</a></code>

Methods:

- <code title="post /api/persona">client.persona.<a href="./src/resources/persona.ts">create</a>({ ...params }) -> Persona</code>
- <code title="get /api/persona">client.persona.<a href="./src/resources/persona.ts">retrieve</a>() -> PersonaRetrieveResponse</code>

# Chat

Types:

- <code><a href="./src/resources/chat/chat.ts">Chat</a></code>
- <code><a href="./src/resources/chat/chat.ts">Message</a></code>
- <code><a href="./src/resources/chat/chat.ts">MessageParams</a></code>
- <code><a href="./src/resources/chat/chat.ts">ChatCreateResponse</a></code>
- <code><a href="./src/resources/chat/chat.ts">ChatListResponse</a></code>

Methods:

- <code title="post /api/chat">client.chat.<a href="./src/resources/chat/chat.ts">create</a>({ ...params }) -> ChatCreateResponse</code>
- <code title="get /api/chat/{chatId}">client.chat.<a href="./src/resources/chat/chat.ts">retrieve</a>(chatID) -> Chat</code>
- <code title="get /api/chat">client.chat.<a href="./src/resources/chat/chat.ts">list</a>() -> ChatListResponse</code>
- <code title="post /api/chat/{chatId}/tags">client.chat.<a href="./src/resources/chat/chat.ts">addTags</a>(chatID, [ ...body ]) -> void</code>

## Messages

Types:

- <code><a href="./src/resources/chat/messages.ts">MessageCreateResponse</a></code>
- <code><a href="./src/resources/chat/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="post /api/chat/{chatId}/messages">client.chat.messages.<a href="./src/resources/chat/messages.ts">create</a>(chatID, { ...params }) -> MessageCreateResponse</code>
- <code title="get /api/chat/{chatId}/messages">client.chat.messages.<a href="./src/resources/chat/messages.ts">list</a>(chatID) -> MessageListResponse</code>

# Tag

Types:

- <code><a href="./src/resources/tag.ts">Tag</a></code>
- <code><a href="./src/resources/tag.ts">TagParams</a></code>
- <code><a href="./src/resources/tag.ts">TagListResponse</a></code>
- <code><a href="./src/resources/tag.ts">TagDeleteResponse</a></code>
- <code><a href="./src/resources/tag.ts">TagListChatsResponse</a></code>

Methods:

- <code title="post /api/tag">client.tag.<a href="./src/resources/tag.ts">create</a>({ ...params }) -> Tag</code>
- <code title="get /api/tag/{tagId}">client.tag.<a href="./src/resources/tag.ts">retrieve</a>(tagID) -> Tag</code>
- <code title="post /api/tag/{tagId}">client.tag.<a href="./src/resources/tag.ts">update</a>(tagID, { ...params }) -> Tag</code>
- <code title="get /api/tag">client.tag.<a href="./src/resources/tag.ts">list</a>() -> TagListResponse</code>
- <code title="delete /api/tag/{tagId}">client.tag.<a href="./src/resources/tag.ts">delete</a>(tagID) -> TagDeleteResponse</code>
- <code title="get /api/tag/{tagId}/chats">client.tag.<a href="./src/resources/tag.ts">listChats</a>(tagID) -> TagListChatsResponse</code>
