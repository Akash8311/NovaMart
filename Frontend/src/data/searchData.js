import MenProduct1 from "../components/Products/MenProduct1";
import MenProduct2 from "../components/Products/MenProduct2";
import KidProduct2 from "../pages/ProductDetails/Kids/KidProduct2";

const searchData = [
  {
    id: 1,
    keywords: ["shirt", "men shirt", "casual shirt"],
    component: MenProduct1,
  },
  {
    id: 2,
    keywords: ["hoodie", "sweatshirt"],
    component: MenProduct2,
  },
  {
    id: 3,
    keywords: ["kids", "kids dress"],
    component: KidProduct1,
  },
  {
    id: 4,
    keywords: ["denim", "kids denim"],
    component: KidProduct2,
  },
];

export default searchData;