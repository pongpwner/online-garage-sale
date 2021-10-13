import item1 from "../../assets/images/item1.jpg";
import item2 from "../../assets/images/item2.png";
import item3 from "../../assets/images/item3.jpg";
import item4 from "../../assets/images/item4.jpg";
import item5 from "../../assets/images/item5.jpg";
const SHOP_DATA = [
  {
    name: "yoyo",
    condition: "New",
    price: 100.0,
    imageUrl: item1,
    id: 0,
  },
  {
    name: "gamecube controller",
    condition: "New",
    price: 25.0,
    imageUrl: item2,
    id: 1,
  },
  {
    name: "kendama",
    condition: "New",
    price: 25,
    salePrice: 20,
    imageUrl: item3,
    id: 2,
  },
  {
    name: "CRT TV",
    condition: "Used",
    price: 5,
    imageUrl: item4,
    id: 3,
  },
  {
    name: "Xbox 360",
    condition: "Used",
    price: 50,
    imageUrl: item5,
    id: 4,
  },
];

export default SHOP_DATA;