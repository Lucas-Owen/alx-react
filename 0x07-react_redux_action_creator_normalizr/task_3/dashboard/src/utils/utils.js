export function getFullYear() {
  return (new Date()).getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

export const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 }
];

export const listNotifications = [
  { id: 1, type: "priority-default", value: "New course available" },
  { id: 2, type: "priority-urgent", value: "New resume available" },
  { id: 3, type: "priority-urgent", html: { __html: getLatestNotification() } },
];
