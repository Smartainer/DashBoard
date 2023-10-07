/** Icons are imported separatly to reduce build time */
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "", //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
    name: "Settings", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/settings-profile", //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "Profile", // name that appear in Sidebar
      },
    ],
  },
];

export default routes;
