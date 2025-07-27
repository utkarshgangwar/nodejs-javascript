const arr = [
    {
        week: "2025-01-27T00:00:00.000+00:00"
    },
    {
        week: "2025-01-20T00:00:00.000+00:00"
    },
    {
        week: "2025-01-13T00:00:00.000+00:00"
    },
    {
        week: "2025-01-06T00:00:00.000+00:00"
    },
];

const currentWeekStartDate = () => {
    let currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() + diff);
    startOfWeek.setUTCHours(0, 0, 0, 0);
    return startOfWeek;
}

console.log(currentWeekStartDate());

