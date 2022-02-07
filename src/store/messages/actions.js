import { SEND_MESSAGE, DELETE_MESSAGE_BY_ID } from "./types";

// @TODO sendMessage (message, roomId)
export const sendMessage = (roomId, message) => ({
  type: SEND_MESSAGE,
  payload: { roomId, message },
});

// @TODO deleteMessage (messageId, roomId)
export const deleteMessage = (roomId, messageId) => ({
  type: DELETE_MESSAGE_BY_ID,
  payload: { roomId, messageId },
});
