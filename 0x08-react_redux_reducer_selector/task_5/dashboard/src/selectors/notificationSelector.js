import { useSelector } from "react-redux";

export const filterTypeSelected = useSelector((state) => state.getIn(["notifications", 'filter']));
export const getNotifications = useSelector(state => state.getIn(["notifications", "notifications"]));
export const getUnreadNotifications = useSelector(state => state.getIn(["notifications", "notifications"]).filter(notification => !notification.isRead))
