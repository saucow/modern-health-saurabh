###Install

`$ npm install`

`$ npm start`


###Approach

Using react + redux for state management.

Actions:

- Message Actions
	-  Set messages (used to initialize messages from json)
	-  Sort messages ascending/descending by sentAt
	-  Delete message

- Page Actions (used to keep track of current pageIndex)

Reducers:

- Message Reducers (utilizes lodash for deduping messages, sorting, and removing messages)
- Page Reducers (handles page increment/decrements)

Component Hierarchy:

- Message List 
	- Message(s)
	- PageControl

###Future Considerations/Known Issues
Given more time, would integrate eslint with airbnb style guide. Currently using default prettier config for formatting. Add unit tests for validating dedup logic and delete functionality. Making page more responsive. Fix issue when deleting all messages in a page and page counter shows wrong value. Should auto decrement to prior page if no messages. Add no message placeholder.