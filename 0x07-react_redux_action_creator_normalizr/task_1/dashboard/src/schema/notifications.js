import notifications from "../../../../notifications.json";
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser (userId) {
  return notifications.filter(notification => notification.author.id == userId).map(notification => notification.context);
}

const notification = new schema.Entity('notifications');
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: obj => obj.guid
});

notification.define({
  author: user,
  context: message
});

export const normalizedNotification = normalize(notifications, [notification]);
