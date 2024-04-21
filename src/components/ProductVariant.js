import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addToCart } from '../actions/cartActions'; // Replace with your action import

const ProductVariant = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (selectedSize && quantity > 0) {
      // dispatch(addToCart({ ...product, size: selectedSize, quantity }));
    }
  };

  console.log("product.variants.quantity-----", product.variants);
  return (
    <div className=" shadow-md rounded-xl ">
      <div className="cursor-pointer relative">
        <figure className="flex justify-center">
          <img
            src={product.cover_image}
            alt={product.title}
            className="rounded-xl"
          />
        </figure>

        <div className="absolute bottom-0 left-0 right-0 z-10 opacity-0   transition-all duration-400 ease-in-out hover:opacity-50">
          <div className="bg-black text-white h-12 flex justify-around items-center px-4">
            {product?.variants?.map(({ quantity, size }) => {
              return quantity === 0 ? (
                // <span className="justify-center text-center items-center text-decoration-line relative after:content-['/'] after:absolute after:inset-0 after:w-full after:h-full  after:opacity-100 after:rotate-45 after:transform-origin top left">
                <div className="relative">
                  <span className="">{size}</span>
                  <div className="w-[1px] bg-white h-11 rotate-45 absolute -top-2  left-1"></div>
                </div>
              ) : (
                <span className="">{size}</span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h4 className="">{product.title}</h4>
        <p className="font-semibold">{product.sale_price} AED</p>

        <div className="flex items-center mb-4">
          {product.variants.quantity === 0 && (
            <span className="text-red-500 line-through">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductVariant;
