'use client';
import React from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";


export const ROUTES = {
    dashboard: "dashboard",
    attendance: "attendance",
    teacher: "teacher",
    student: "student",
    class: "class",
    assignClass: "assign-class"
}

export const navConfig = [
    {
        label: "Dashboard",
        icon: <DashboardIcon />,
        url: `/${ROUTES.dashboard}`,
    },
    {
        label: "Teacher",
        icon: <DashboardIcon />,
        url:  `/${ROUTES.teacher}`,
    },
    {
        label: "Student",
        icon: <DashboardIcon />,
        url: `/${ROUTES.student}`,
    },
    {
        label: "Class",
        icon: <DashboardIcon />,
        url: `/${ROUTES.class}`,
        childrens: [
            {
                label: "Assign Class",
                icon: <DashboardIcon />,
                url: `/${ROUTES.assignClass}`
            }
        ]
    },
    {
        label: "Attendance",
        icon: <DashboardIcon />,
        url: `/${ROUTES.attendance}`,

    }
]
