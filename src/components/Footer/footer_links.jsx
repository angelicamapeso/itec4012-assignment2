import { BsFacebook, BsInstagram, BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";

const HELP_ITEMS = [
  "Customer service",
  "FAQ",
  "Track my order",
  "Reschedule my order",
  "Cancel my order",
  "Contact us",
  "Your safety concerns",
  "Product recalls",
  "Sell back program",
  "Return policies",
  "Warranties",
  "Feedback",
  "Order replacement parts",
  "COVID-19 information",
];

const SHOP_LEARN_ITEMS = [
  "IKEA Apps",
  "Find a location",
  "IKEA Services",
  "IKEA Catalogue",
  "IKEA Family",
  "IKEA for Business",
  "IKEA Planners",
  "IKEA Gift Registry",
  "Buying guides",
  "Gift cards and balance checker",
  "Payment options",
];

const ABOUT_ITEMS = [
  "This is IKEA",
  "Jobs",
  "Newsroom",
  "Life at home",
  "A sustainable everyday",
  "IKEA Foundation",
];

export const ACCORDION_ITEMS = [
  {
    title: "Help",
    items: HELP_ITEMS,
  },
  {
    title: "Shop & Learn",
    items: SHOP_LEARN_ITEMS,
  },
  {
    title: "About IKEA",
    items: ABOUT_ITEMS,
  },
];

export const SOCIAL_MEDIA_ICONS = [
  <BsFacebook className="social-media-icon" />,
  <BsInstagram className="social-media-icon" />,
  <BsPinterest className="social-media-icon" />,
  <BsTwitter className="social-media-icon" />,
  <BsYoutube className="social-media-icon" />,
];

export const POLICY_LINKS = [
  "Privacy policy", 
  "Cookie policy",
  "Cookie settings",
  "Responsible Disclosure Policy",
  "Terms & conditions",
  "Accessibility",
];