import {
  IconArticle,
  IconBolt,
  IconBriefcase2,
  IconMail,
  IconMessage2,
  IconFlag,
} from "@tabler/icons-react";

export const navlinks = [
  {
    href: "/",
    label: "Home",
    icon: IconBolt,
  },
  {
    href: "/about",
    label: "About",
    icon: IconMessage2,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: IconBriefcase2,
  },
  // ...existing code...
{
  label: "CTF's",
  href: "/ctfs",
  icon: IconFlag, // Use an appropriate icon, e.g., from @tabler/icons-react
},
// ...existing code...
  {
    href: "/blog",
    label: "Articles",
    icon: IconArticle,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: IconMail,
  },
];
