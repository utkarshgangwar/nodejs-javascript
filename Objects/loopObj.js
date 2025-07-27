const data = {
    "employees": {
        "2025-01-10": {
            "634479": {
                "id": 634479,
                "name": "Tejpalsinh Rana",
                "email": "tejpalsinh.deuglo@gmail.com",
                "groupId": 136190,
                "group": "Contract",
                "profileUrl": "https://desktime.com/app/employee/634479/2025-01-10",
                "isOnline": false,
                "arrived": "2025-01-10 10:16:31",
                "left": "2025-01-10 13:21:32",
                "late": false,
                "onlineTime": 11101,
                "offlineTime": 0,
                "desktimeTime": 11101,
                "atWorkTime": 11101,
                "afterWorkTime": 0,
                "beforeWorkTime": 0,
                "productiveTime": 11101,
                "productivity": 100,
                "efficiency": 36.28,
                "work_starts": "08:00:00",
                "work_ends": "18:00:00",
                "notes": [],
                "activeProject": []
            },
            "593696": {
                "id": 593696,
                "name": "Utkarsh Gangwar",
                "email": "utkarsh.deuglo253@gmail.com",
                "groupId": 136189,
                "group": "Fullstack",
                "profileUrl": "https://desktime.com/app/employee/593696/2025-01-10",
                "isOnline": true,
                "arrived": "2025-01-10 08:30:02",
                "left": "2025-01-10 13:34:55",
                "late": false,
                "onlineTime": 11412,
                "offlineTime": 3597,
                "desktimeTime": 15009,
                "atWorkTime": 18293,
                "afterWorkTime": 0,
                "beforeWorkTime": 0,
                "productiveTime": 14745,
                "productivity": 99.46,
                "efficiency": 48.19,
                "work_starts": "08:00:00",
                "work_ends": "18:00:00",
                "notes": [],
                "activeProject": {
                    "project_id": 616007,
                    "project_title": "Deuglo HRM Project",
                    "task_id": 4185127,
                    "task_title": "desktime api implementation",
                    "duration": 11412
                }
            }
        }
    }
};

(function fn() {
    const arr = data.employees["2025-01-10"];
    for (const elem in arr) {
        if (arr.hasOwnProperty(elem)) {
            console.log(arr[elem]);
        }
    }
})();