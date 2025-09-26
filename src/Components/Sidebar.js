"use client";
import {
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";
import { navConfig } from "./navConfig";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Link from "next/link";
import SidebarLink from "./SidebarLink";

const drawerWidth = 280;

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = React.useState({});


  const toggleMenu = (label) => {
    setOpenMenu((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1e293b",
          color: "white",
        },
      }}
    >
      <List>
        {navConfig?.map((item) => (
          <div key={item.label}>
            <ListItemButton
              component={item.childrens ? "div" : SidebarLink}
              {...(!item.childrens && { href: item.url })}
              onClick={() => item.childrens && toggleMenu(item.label)}
              sx={{
                backgroundColor:
                  pathname === item.url ? "rgba(255,255,255,0.1)" : "inherit",
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
              {item.childrens &&
                (openMenu[item.label] ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>

            {item.childrens && (
              <Collapse in={openMenu[item.label]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item?.childrens?.map((child) => (
                    <ListItemButton
                      key={child.label}
                      component={SidebarLink}
                      href={child.url}
                      sx={{
                        pl: 4,
                        backgroundColor:
                          pathname === child.url
                            ? "rgba(255,255,255,0.2)"
                            : "inherit",
                      }}
                    >
                      <ListItemIcon sx={{ color: "white" }}>
                        {child.icon}
                      </ListItemIcon>
                      <ListItemText primary={child.label} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Drawer>
  );
}
