import { CiHome } from "react-icons/ci";
import { MdOutlineNextWeek, MdFlipToBack, MdAdd } from "react-icons/md";
import { BiVideoRecording } from "react-icons/bi";

const ICON_SIZE: number = 25;

export const SIDEBAR_LINKS = [
  {
    label: "Home",
    path: "/",
    icon: <CiHome size={ICON_SIZE} />,
  },
  {
    label: "Upcoming",
    path: "/upcoming",
    icon: <MdOutlineNextWeek size={ICON_SIZE} />,
  },
  {
    label: "Previous",
    path: "/previous",
    icon: <MdFlipToBack size={ICON_SIZE} />,
  },
  {
    label: "Recordings",
    path: "/recordings",
    icon: <BiVideoRecording size={ICON_SIZE} />,
  },
  {
    label: "Personal Room",
    path: "/personal-room",
    icon: <MdAdd size={ICON_SIZE} />,
  },
];
