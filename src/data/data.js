import nintendo from "./imgs/nintendo.jpg";
import play from "./imgs/play.jpg";
import xbox from "./imgs/xbox.jpg";
export const productList = [
  
  {
    name: 'Nintendo',
    price: 320,
    thumbnail:
    <img src={nintendo} className="Nintendo" alt="nintendo" />,
    stock: 15,
    id: 1,
  },
  {
    name: 'PlayStation',
    price: 400,
    thumbnail:
    <img src={play} className="PlayStation" alt="PlayStation" />,
    stock: 6,
    id: 2,
  },
  {
    name: 'XBOX',
    price: 500,
    thumbnail:
    <img src={xbox} className="XBOX" alt="XBOX" />,
    stock: 9,
    id: 3,
  },
];
