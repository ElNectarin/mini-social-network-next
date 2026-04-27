"use client";

import Link from "next/link";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MessageIcon from "@mui/icons-material/Message";
import FeedIcon from "@mui/icons-material/Feed";
import PeopleIcon from "@mui/icons-material/People";
import CollectionsIcon from "@mui/icons-material/Collections";

const routes = [
  {
    routeId: 1,
    routePath: "profile",
    routeTitle: "Профиль",
    routeIcon: <AccountBoxIcon />,
  },
  {
    routeId: 2,
    routePath: "news",
    routeTitle: "Лента",
    routeIcon: <FeedIcon />,
  },
  {
    routeId: 3,
    routePath: "messenger",
    routeTitle: "Сообщения",
    routeIcon: <MessageIcon />,
  },
  {
    routeId: 4,
    routePath: "friends",
    routeTitle: "Друзья",
    routeIcon: <PeopleIcon />,
  },
  {
    routeId: 5,
    routePath: "music",
    routeTitle: "Музыка",
    routeIcon: <LibraryMusicIcon />,
  },
  {
    routeId: 6,
    routePath: "album",
    routeTitle: "Фото",
    routeIcon: <CollectionsIcon />,
  },
];

export default function Navbar() {
  return (
    <aside className="flex flex-col h-full w-80 items-center">
      <nav className="w-40">
        <ul className="flex flex-col gap-y-3">
          {routes.map((item) => {
            return (
              <li
                key={item.routeId}
                className="flex items-center justify-center "
              >
                <Link
                  href={`/${item.routePath}`}
                  className="w-full text-[20px] hover:bg-[#181818] rounded-xs"
                >
                  {item.routeIcon} {"   "}
                  {item.routeTitle}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
