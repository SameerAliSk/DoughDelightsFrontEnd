import "./index.css";
import ProductCard from "./ProductCard";

const productData = [
  {
    name: "Farmhouse",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
    price: "509",
    imageUrl:
      "https://res.cloudinary.com/dy2gsniki/image/upload/v1699265147/1b892978-f689-4199-90d2-47df4e261235_farmhouse_1_fb7gj4.webp",
  },
  {
    name: "Margherita",
    description: "Classic delight with 100% real mozzarella cheese",
    price: "239",
    imageUrl:
      "https://res.cloudinary.com/dy2gsniki/image/upload/v1699340703/79bc3609-690b-440e-b8be-74694b1f3215_new_margherita_2502_1_sbn5sc.webp",
  },
  {
    name: "Primavera Gourmet Pizza",
    description:
      "For the veggie gourmet lovers. Succulent zucchini, fresh red & yellow bellpeppers and grilled mushrooms on a thin crust base with Italian sauce & bocconcini cheese to relish.",
    price: "699",
    imageUrl:
      "https://res.cloudinary.com/dy2gsniki/image/upload/v1699340703/b3e47f55-8b08-4e2b-af36-0826e2ca734e_Primavera_1_lfrovh.webp",
  },
  {
    name: "Peppy Paneer",
    description:
      "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
    price: "459",
    imageUrl:
      "https://res.cloudinary.com/dy2gsniki/image/upload/v1699340703/f65964c6-de96-475d-a5a9-3f3698d66ee7_new_peppy_paneer_1_ibylh3.webp",
  },
  {
    name: "Corn n Cheese Pizza",
    description:
      "A crazy fusion like never before. A delicious fusion of corn stuffed paratha and cheesy pizza.",
    price: "179",
    imageUrl:
      "https://res.cloudinary.com/dy2gsniki/image/upload/v1699340702/b761377f-9a50-4717-bf38-80f8355946ab_CornnCheeseParathaPizza_1_qhbwgz.webp",
  },
  {
    name: "Blazing Onion & Paprika",
    description:
      "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
    price: "329",
    imageUrl:
      "https://res.cloudinary.com/dy2gsniki/image/upload/v1699340704/10ddf620-ae20-477f-b4b2-9bce1ded021d_BlazingOnionPaprikacartmenu_1_wjwojs.jpg",
  },
  {
    name: "Veg Extravaganza",
    description:
      "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
    price: "549",
    imageUrl:
      "https://res.cloudinary.com/dy2gsniki/image/upload/v1699340702/5f8ad75f-22d0-4dfb-80e1-852fe2f1caf9_new_veg_extravaganza_1_dg9yiu.webp",
  },
];
function ProductCardContent() {
  return (
    <div>
      <div className="container mb-4 mt-5 font-sans">
        <div className="row">
          {productData.map((eachProduct) => (
            <ProductCard
              name={eachProduct.name}
              description={eachProduct.description}
              price={eachProduct.price}
              imageUrl={eachProduct.imageUrl}
              key={eachProduct.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCardContent;
