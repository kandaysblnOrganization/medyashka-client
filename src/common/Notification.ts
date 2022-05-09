import {toast} from 'react-toastify';
import {INotification, INotificationTypes} from "../types/NotificationTypes";

const notificationState: INotification = {
    type: 'info',
    message: '',
    title: 'Системное уведомление',
}

const Notification = (notification = notificationState) => {

    switch (notification.type) {
        case "info": {
            toast.info(notification.message);
            break;
        }
        case "success": {
            toast.success(notification.message);
            break;
        }
        case "warning": {
            toast.warn(notification.message);
            break;
        }
        case "error": {
            toast.error(notification.message);
            break;
        }
        case "html": {
            toast(notification.message);
            break;
        }
    }

};

const NotificationTypes: INotificationTypes = {
    info: "info",
    success: "success",
    warning: "warning",
    error: "error",
    html: "html",
};

export {
    Notification,
    NotificationTypes
}
