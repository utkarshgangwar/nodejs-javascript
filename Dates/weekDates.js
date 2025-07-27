function getDatesForWeek(date = new Date()) {
    if (!date) date = new Date();
    const daysOfWeek = [];
    const currentDay = date.getDay();

    // Calculate the start of the week (Sunday)
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - currentDay + 1);

    // Generate dates for the entire week
    for (let i = 0; i < 7; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        // daysOfWeek.push(day.toDateString());
        daysOfWeek.push(formatDate(day));
    }

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    return daysOfWeek;
}

// Get dates for a specific week
const specificDate = new Date("2026-07-25");
const datesForSpecificWeek = getDatesForWeek();
console.log(datesForSpecificWeek);