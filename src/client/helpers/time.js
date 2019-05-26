export const isToday = (datetime) => {
    const today = new Date();
    const someDate = new Date(datetime);
    return someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear()
};

export const dayMonthFormat = (datetime) => {
    let date = new Date(datetime);
    let month = date.toLocaleString('en-us', { month: 'short' });
    let day = date.getDate();
    return `${day} ${month}`;
};

export const twelveHoursClock = (datetime) => {
    let date = new Date(datetime);
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true});
};