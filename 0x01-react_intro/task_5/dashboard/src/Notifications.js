import "./Notifications.css";
import { getLatestNotification } from "./utils";

export default function Notification () {
  return (
    `<div class="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data="priority-default">New course available</li>
        <li data="priority-urgent">New resume available</li>
        <li data="priority-urgent" dangerouslySetInnerHTML=${getLatestNotification()}></li>
      </ul>
      <button style="float: right;" aria-label="Close" onclick="console.log('Close button has been clicked');">
        <img class="close-icon" src="./close-icon.png" alt="close-icon" />
      </button>
    </div>`
  );
}
