import { nanoid } from "nanoid";

import groups from "../../assets/img/menu/groups.svg";
import profile from "../../assets/img/menu/profile.svg";
import messages from "../../assets/img/menu/messages.svg";
import settings from "../../assets/img/menu/settings.svg";

const items = [
  {
    id: nanoid(),
    link: "/groups",
    ariaLabel: "",
    pictureSrc: groups,
    text: "Групи",
  },
  {
    id: nanoid(),
    link: "/profile",
    ariaLabel: "",
    pictureSrc: profile,
    text: "Мій профіль",
  },
  {
    id: nanoid(),
    link: "",
    ariaLabel: "",
    pictureSrc: messages,
    text: "Повідомлення",
  },
  {
    id: nanoid(),
    link: "",
    ariaLabel: "",
    pictureSrc: settings,
    text: "Налаштування",
  },
];

export default items;
