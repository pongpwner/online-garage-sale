import item1 from "../../assets/images/item1.jpg";
import item2 from "../../assets/images/item2.png";
import item3 from "../../assets/images/item3.jpg";
import item4 from "../../assets/images/item4.jpg";
import item5 from "../../assets/images/item5.jpg";
import item6 from "../../assets/images/item6.jpg";
import item7 from "../../assets/images/item7.jpg";
import item8 from "../../assets/images/item8.jpg";
import item9 from "../../assets/images/item9.jpg";
import item10 from "../../assets/images/item10.jpg";
const SHOP_DATA = [
  {
    name: "yoyo",
    condition: "New",
    price: 100.0,
    imageUrl: item1,
    category: "toys",
    id: 1,
  },
  {
    name: "gamecube controller",
    condition: "New",
    price: 25.0,
    category: "games",
    imageUrl: item2,
    id: 2,
  },
  {
    name: "kendama",
    condition: "New",
    price: 20,
    oldPrice: 25,
    category: "toys",
    imageUrl: item3,
    id: 3,
  },
  {
    name: "CRT TV",
    condition: "Used",
    price: 5,
    category: "electronics",
    imageUrl: item4,
    id: 4,
  },
  {
    name: "Xbox 360",
    condition: "Used",
    oldPrice: 75,
    price: 50,
    category: "electronics",
    imageUrl: item5,
    id: 5,
  },
  {
    name: "Froppy Socks (medium)",
    condition: "New",
    oldPrice: 20,
    price: 1,
    category: "clothing",
    imageUrl: item6,
    id: 6,
  },
  {
    name: "Euthyphro",
    condition: "used",
    price: 5,
    category: "books",
    imageUrl: item7,
    id: 7,
  },
  {
    name: "Soccer Ball",
    condition: "new",
    price: 40,
    category: "sports",
    imageUrl: item8,
    id: 8,
  },
  {
    name: "Wooden Chair",
    condition: "used",
    price: 15,
    category: "furniture",
    imageUrl: item9,
    id: 9,
  },
  {
    name: "tools",
    condition: "used",
    price: 30,
    category: "tools",
    imageUrl: item10,
    id: 10,
  },
];

export default SHOP_DATA;
