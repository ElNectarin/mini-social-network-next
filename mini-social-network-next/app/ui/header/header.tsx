"use client";

import React from "react";
import { Input } from "@heroui/react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import { Avatar } from "@heroui/react";

export default function Header() {
  return (
    <header className={`min-w-full flex items-center justify-center`}>
      <div className={`bg-[#181818] h-14 w-full rounded-b-xl flex`}>
        <div className={`flex w-2/5 items-center gap-x-30 ml-10`}>
          <h1 className={`text-2xl`}>Mini-socialnetwork</h1>
          <Input aria-label="search" className={`w-52`} placeholder="Поиск" />
        </div>
        <div className={`flex items-center w-18 justify-between`}>
          <NotificationsNoneIcon />
          <AudiotrackIcon />
        </div>
        <div className={`flex justify-end w-3/5 items-center mr-10`}>
          <Avatar>
            <Avatar.Image
              alt="John Doe"
              src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
            />
            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
