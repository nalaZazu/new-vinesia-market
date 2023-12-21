type ChildItems = {
  id: number;
  name: string;
  href?: string;
};
export interface MenuItem {
  id: number;
  name: string;
  href?: string;
  items: ChildItems[];
}

export const menuBar: MenuItem[] = [
  {
    id: 1,
    name: "Discover Vinesia",
    items: [
      {
        id: 1,
        name: "Start",
        href: "/aboutvinesia",
      },
      {
        id: 2,
        name: "How Vinesia works",
        href: "/vinesia",
      },
      {
        id: 3,
        name: "Wine and art",
        href: "/wineart",
      },
      {
        id: 4,
        name: "Security",
        href: "/security",
      },
      {
        id: 5,
        name: "Asset performance",
        href: "/performance",
      },
      {
        id: 6,
        name: "Stories",
        href: "/stories",
      },
      {
        id: 7,
        name: "About us",
        href: "/aboutus",
      },
      {
        id: 8,
        name: "Gifts",
        href: "/gifts",
      },
    ],
  },
  {
    id: 2,
    name: "Vinesia Marketplace",
    items: [
      {
        id: 1,
        name: "Marketplace",
        href: "/",
      },
      {
        id: 2,
        name: "Invest",
        href: "/invest",
      },
      {
        id: 3,
        name: "Available soon",
        href: "/availablesoon",
      },
      {
        id: 4,
        name: "Regions",
        href: "/regions",
      },
      {
        id: 5,
        name: "Wine & Art Collections",
        href: "/wacollections",
      },
      {
        id: 6,
        name: "Limited collections",
        href: "/limitedcollections",
      },
      {
        id: 7,
        name: "Wineries",
        href: "/wineries",
      },
    ],
  },
];
