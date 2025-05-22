import api from "../utils/api";

export const getAllNotifications = async () =>
{
    const response = await api.get("/notifications/all");
    return response.data;
};

export const markNotificationAsRead = async (notificationId) =>
{
    const response = await api.put(`/notifications/${notificationId}`);
    return response.data;
};

export const getNotificationWsUrl = () =>
{
    const token = localStorage.getItem("token");
    return `wss://btlweb-backend-production.up.railway.app/api/notifications/ws?token=${token}`;
};
