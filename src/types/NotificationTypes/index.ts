export interface INotification {
    title: string;
    message: string;
    type: string;
}

export interface INotificationTypes {
    info: string;
    success: string;
    warning: string;
    error: string;
    html: string;
}