# n8n-nodes-epicai

This node lets you interact with the [Epic AI](https://www.epic-ai.com) API. Epic AI is a platform for building individually configurable flow- and AI-driven chat, voice, and email bots. It allows you to manage contacts, conversations, messages, notes, and variables directly from your n8n workflows.

## Installation

In n8n go to **Settings → Community Nodes → Install** and enter:

```
n8n-nodes-epicai
```

## Credentials

1. In n8n go to **Credentials → New**
2. Search for **Epic AI API**
3. Enter your ChatCaptain API Key

You can find your API key in the ChatCaptain dashboard under **Settings → API**.

> **Note:** The Body (JSON) fields in this node show only the required parameters for each operation. Additional optional parameters are available — see the [API documentation](https://api.chatcaptain.com/api) for the full reference.

## Resources & Operations

### Contact
| Operation | Description |
|---|---|
| Create Contact | Create a new contact |
| Delete Contact | Delete a contact |
| Get All Contacts | Retrieve all contacts |
| Get Contact | Retrieve a single contact |
| Update Contact | Update a contact |

### Conversation
| Operation | Description |
|---|---|
| Create Conversation | Create a new conversation |
| Create Note | Add a note to a conversation |
| Delete Note | Remove a note from a conversation |
| Get All Conversations | Retrieve all conversations |
| Get All Messages | Retrieve all messages of a conversation |
| Get All Variables | Retrieve all variables of a conversation |
| Get Conversation | Retrieve a single conversation |
| Get Message | Retrieve a single message |
| Get Variable | Retrieve a specific variable |
| Send Message as Agent | Send a message as an agent (via inbox) |
| Send Message as User | Send a message as a user |
| Set / Update Variable | Set or update a conversation variable |
| Trigger Custom Event | Trigger a custom event in a conversation |
| Update Conversation | Update a conversation |

### Variable
| Operation | Description |
|---|---|
| Create Global Variable | Create a new global chatbot variable |
| Delete Global Variable | Delete a global chatbot variable |

## Examples

### Contact: Create a Contact

**Use case:** A new customer submits a sign-up form on your website. An n8n workflow receives the form data via webhook and automatically creates a contact in ChatCaptain — so the chatbot can immediately greet them by name and has their details on file.

Configure the node as follows:

| Field | Value |
|---|---|
| Resource | Contact |
| Operation | Create Contact |
| Chatbot ID | `abc123` |

**Body (JSON):**
```json
{
  "name": "Jane Doe",
  "language": "EN",
  "email": "jane.doe@example.com",
  "phoneNumber": "+4917612345678"
}
```

**Expected result:**
```json
{
  "id": "contact_xyz789",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "phoneNumber": "+4917612345678",
  "language": "EN"
}
```

---

### Conversation: Send a Message as Agent

**Use case:** Your order management system detects that a shipment is delayed. An n8n workflow automatically sends a proactive message to the affected customer's open conversation in ChatCaptain — so the customer is informed without a human agent having to intervene manually.

Configure the node as follows:

| Field | Value |
|---|---|
| Resource | Conversation |
| Operation | Send Message as Agent |
| Chatbot ID | `abc123` |
| Conversation ID | `conv_xyz789` |

**Body (JSON):**
```json
{
  "text": "We wanted to let you know that your order is slightly delayed. We expect delivery within 2 additional business days. Sorry for the inconvenience!"
}
```

**Expected result:**
```json
{
  "id": "msg_abc001",
  "text": "We wanted to let you know that your order is slightly delayed. We expect delivery within 2 additional business days. Sorry for the inconvenience!",
  "sender": "agent",
  "created": "2026-04-24T10:00:00Z"
}
```

---

### Variable: Set / Update a Conversation Variable

**Use case:** Customer data has changed in your ERP system (e.g. a new shipping address or updated loyalty tier). An n8n workflow picks up the change and updates the corresponding variable in the active ChatCaptain conversation — so the chatbot immediately has access to the latest data and can respond accordingly without the customer needing to repeat themselves.

Configure the node as follows:

| Field | Value |
|---|---|
| Resource | Conversation |
| Operation | Set / Update Variable |
| Chatbot ID | `abc123` |
| Conversation ID | `conv_xyz789` |
| Variable ID | `var_def456` |

**Body (JSON):**
```json
{
  "value": "Gold"
}
```

**Expected result:**
```json
{
  "id": "var_def456",
  "name": "loyalty_tier",
  "value": "Gold"
}
```

## API Documentation

https://api.chatcaptain.com/api
https://docs.chatcaptain.com/api-dokumentation