let msgId = 0;
export const addMessage = body => ({
    type: 'ADD_MESSAGE',
    id: ++msgId,
    timestamp: Date.now(),
    body
});