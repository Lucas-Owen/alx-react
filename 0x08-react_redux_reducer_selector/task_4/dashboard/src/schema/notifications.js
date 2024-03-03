import notifications from "../../../../notifications.json";
import { normalize, schema, denormalize } from 'normalizr';

export function getAllNotificationsByUser (userId) {
  // console.log(normalizedNotifications.entities.notifications)
  const mesgIds = [];
  Object.values(normalizedNotifications.entities.notifications).forEach(notf => {if (userId == notf.author) mesgIds.push(notf.context)})
  return denormalize(mesgIds, [message], normalizedNotifications.entities)
}

export const notification = new schema.Entity('notifications');
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: obj => obj.guid
});

notification.define({
  author: user,
  context: message
});

export const normalizedNotifications = normalize(notifications, [notification]);

export function notificationNormalizer(data) {
  return normalize(data, [notification]);
}
