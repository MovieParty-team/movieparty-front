import dayjs from "dayjs";

export const formatDate = (date: Date | string, format = "DD/MM/YYYY") => {
    return dayjs(date).format(format);
}

export const formatTime = (date: Date | string, format = "HH:mm") => {
    return dayjs(date).format(format);
}
