import App from './App';
import Notification from './Notifications';

const $ = require("jquery");

const root = document.createElement('div');
const root_notifications = document.createElement("div");

root.id = "root";
root_notifications.id="root-notifications"

root_notifications.innerHTML = Notification();
$("body").append(root);
$("#root").append(root_notifications);
$("#root").append(App());
