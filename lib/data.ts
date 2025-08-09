export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  withFries?: boolean;
  noFries?: boolean;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    title: "WINGZ",
    items: [
      { name: "3 PC", price: "$9.99", withFries: true },
      { name: "6 PC", price: "$15.99", withFries: true },
      { name: "20 PC", price: "$39.99", noFries: true },
    ],
  },
  {
    title: "BONE-LESS WINGZ",
    items: [
      { name: "4 PC", price: "$9.99", withFries: true },
      { name: "8 PC", price: "$14.99", withFries: true },
      { name: "20 PC", price: "$24.99", noFries: true },
    ],
  },
  {
    title: "CATFISH & SHRIMP",
    items: [
      { name: "1 PC Catfish Fillet", price: "$14.99", withFries: true },
      { name: "7 PC Shrimp", price: "$6.99", noFries: true },
      { name: "14 PC Shrimp", price: "$16.99", withFries: true },
    ],
  },
  {
    title: "SIDES",
    items: [
      { name: "Pizza Puff", price: "$4.99", noFries: true },
      { name: "Pizza Puff", price: "$6.99", withFries: true },
      { name: "Small Fry", price: "$3.49" },
      { name: "Large Fry", price: "$5.49" },
      { name: "Hot & Mild Cup", price: "$0.50" },
      { name: "Ranch Cup", price: "$0.50" },
    ],
  },
  {
    title: "DRINKS",
    items: [
      { name: "Can - Sprite", price: "$1.00" },
      { name: "Can - Pepsi", price: "$1.00" },
      { name: "Bottle - Water", price: "$1.00" },
    ],
  },
];

export const LOCATIONS = [
  {
    key: "midwest-city",
    name: "Midwest City",
    address: "3801 North Oak Grove Drive",
    cityStateZip: "Midwest City, OK 73110",
    orderUrl: "https://www.toasttab.com/tez-wingz/v3",
    phone: "",
    mapQuery: "3801 North Oak Grove Drive Midwest City, OK 73110"
  },
  {
    key: "north-okc",
    name: "North OKC",
    address: "12314 North May Avenue",
    cityStateZip: "OKC, OK 73120",
    orderUrl: "https://www.toasttab.com/tez-wingz-n-may-12314-north-may-avenue",
    phone: "",
    mapQuery: "12314 North May Avenue OKC, OK 73120"
  }
];
