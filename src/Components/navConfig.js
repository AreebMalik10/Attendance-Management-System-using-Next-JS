'use client';
import React from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";


export const ROUTES = {
    dashboard: "/dashboard",
    attendance: "/attendance",
    teacher: "/teachers",
    student: "/students",
    classes: "/classes",
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
        label: "Classes",
        icon: <DashboardIcon />,
        url: `/${ROUTES.classes}`,
        childrens: [
            {
                label: "Assign Class to Teacher",
                icon: <DashboardIcon />,
                url: `/assign-class`
            }
        ]
    },
    {
        label: "Attendance",
        icon: <DashboardIcon />,
        url: `/${ROUTES.attendance}`,
        
    }
]
