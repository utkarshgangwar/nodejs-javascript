Date.prototype.myMonth = function () {
    if (this.getMonth() == 0) { return "January" };
    if (this.getMonth() == 1) { return "February" };
    if (this.getMonth() == 2) { return "March" };
    if (this.getMonth() == 3) { return "April" };
    if (this.getMonth() == 4) { return "May" };
    if (this.getMonth() == 5) { return "June" };
    if (this.getMonth() == 6) { return "July" };
    if (this.getMonth() == 7) { return "August" };
    if (this.getMonth() == 8) { return "September" };
    if (this.getMonth() == 9) { return "October" };
    if (this.getMonth() == 10) { return "November" };
    if (this.getMonth() == 11) { return "December" };
}

const d = new Date();

console.log(d.myMonth());
