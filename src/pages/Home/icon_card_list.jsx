import { RiBuilding2Line, RiEditLine } from "react-icons/ri";
import { FiTruck, FiTool } from "react-icons/fi";


export const ICON_CARDS_1 = [
  {
    icon: <RiBuilding2Line className="icon"/>,
    title: "Click and collect",
    descrip: "Orders that you pick up yourself.",
    linkTxt: "Click and collect",
  },
  {
    icon: <FiTruck className="icon"/>,
    title: "Delivery",
    descrip: "We'll bring your purchases straight to your home.",
    linkTxt: "See delivery options",
  },
  {
    icon: <RiEditLine className="icon"/>,
    title: "Planning",
    descrip: "Personalized advice from specialists, online or in store.",
    linkTxt: "Book now",
  },
  {
    icon: <FiTool className="icon"/>,
    title: "TaskRabbit",
    descrip: "Assembly is easy with TaskRabbit.",
    linkTxt: "Learn about assembly",
  },
];