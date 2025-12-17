export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "bread" | "pastry" | "cake" | "cookie";
}

export const products: ProductType[] = [
  {
    id: "1",
    name: "Sourdough Bread",
    description: "Traditional sourdough with a crispy crust and soft interior.",
    price: 6.99,
    image: "/assets/bread.jpeg",
    category: "bread",
  },
  {
    id: "2",
    name: "Chocolate Croissant",
    description: "Buttery, flaky croissant filled with rich chocolate.",
    price: 3.99,
    image: "/assets/bread2.jpeg",
    category: "pastry",
  },
  {
    id: "3",
    name: "Blueberry Muffin",
    description: "Moist muffin packed with fresh blueberries.",
    price: 3.49,
    image: "/assets/bread3.jpeg",
    category: "pastry",
  },
  {
    id: "4",
    name: "Cinnamon Roll",
    description: "Soft, gooey cinnamon roll with cream cheese frosting.",
    price: 4.49,
    image: "/assets/cookie.jpeg",
    category: "pastry",
  },
  {
    id: "5",
    name: "Artisan Baguette",
    description: "Crusty French baguette with a light, airy interior.",
    price: 4.99,
    image: "/assets/bread.jpeg",
    category: "bread",
  },
  {
    id: "6",
    name: "Chocolate Chip Cookie",
    description: "Classic cookie loaded with chocolate chips.",
    price: 2.49,
    image: "/assets/cookie2.jpeg",
    category: "cookie",
  },
  {
    id: "7",
    name: "Red Velvet Cupcake",
    description: "Moist red velvet cake topped with cream cheese frosting.",
    price: 3.99,
    image: "/assets/cookie3.jpeg",
    category: "cake",
  },
  {
    id: "8",
    name: "Focaccia Bread",
    description: "Italian flatbread with herbs and olive oil.",
    price: 5.99,
    image: "/assets/bread2.jpeg",
    category: "bread",
  },
];

export const galleryImages = [
  "/assets/dessert.jpeg",
  "/assets/dessert2.jpeg",
  "/assets/bread.jpeg",
  "/assets/bread2.jpeg",
  "/assets/cookie.jpeg",
  "/assets/cookie2.jpeg",
];

export const instagramPosts = [
  {
    id: "1",
    image: "/assets/bread3.jpeg",
    caption: "Our fresh sourdough bread just out of the oven! #FlourPowerBakery #FreshBread",
    likes: 124,
    date: "2 days ago",
  },
  {
    id: "2",
    image: "/assets/dessert.jpeg",
    caption: "Weekend special: Raspberry Danish pastries! #FlourPowerBakery #WeekendTreats",
    likes: 89,
    date: "3 days ago",
  },
  {
    id: "3",
    image: "/assets/cookie3.jpeg",
    caption: "Birthday cake perfection for any celebration! #FlourPowerBakery #CustomCakes",
    likes: 215,
    date: "5 days ago",
  },
  {
    id: "4",
    image: "/assets/dessert2.jpeg",
    caption: "Morning baking session - croissants coming up! #FlourPowerBakery #BakingProcess",
    likes: 156,
    date: "1 week ago",
  },
];