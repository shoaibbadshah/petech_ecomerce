import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { addToCart } from "../redux/actions/cartAction";
// import { addToCart } from '../actions/cartActions'; // Replace with your action import

const ProductVariant = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleAddToCart = () => {
    if (selectedSize && quantity > 0) {
      dispatch(addToCart(product, selectedSize, quantity)); // Dispatch the action
    }

    openModal();
  };

  const imageRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    if (imageRef.current) {
      const container = imageRef.current.parentElement;
      const containerRect = container.getBoundingClientRect();
      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      // Calculate relative position within the container (0-1)
      const relativeX = x / containerRect.width;
      const relativeY = y / containerRect.height;

      // Set transform origin based on relative position for smooth panning
      imageRef.current.style.transformOrigin = `${relativeX * 100}% ${
        relativeY * 100
      }%`;

      // Apply zoom on hover (adjust scale value for desired zoom level)
      imageRef.current.style.transform = `scale(${isHovered ? 4 : 1})`;
    }
  };

  return (
    <div className=" shadow-md rounded-xl ">
      <div className="cursor-pointer relative">
        <figure
          className={`relative flex justify-center overflow-hidden `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            imageRef.current.style.transform = `scale(${1})`;
            setIsHovered(false);
          }}
          onMouseMove={handleMouseMove}
        >
          <img
            ref={imageRef}
            src={product.cover_image}
            alt={product.title}
            className={` rounded-xl object-contain ${
              isHovered
                ? "hover:scale-110 transition-transform duration-300 ease-in-out"
                : ""
            }`}
          />
        </figure>

        <div
          className={`absolute bottom-0 left-0 right-0 z-10 opacity-0   transition-all duration-400 ease-in-out ${
            isHovered && "opacity-50"
          } hover:opacity-50`}
        >
          <div className="bg-black text-white h-12 flex justify-around items-center px-4">
            {product?.variants?.map(({ quantity, size }) => {
              return quantity === 0 ? (
                <div className="relative">
                  <span className="">{size}</span>
                  <div className="w-[1px] bg-white h-11 rotate-45 absolute -top-2  left-1"></div>
                </div>
              ) : (
                <span className="" onClick={handleAddToCart}>
                  {size}
                </span>
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

      <div>
        {/* <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Open Modal
        </button> */}
        {showModal && (
          <Modal onClose={closeModal}>
            <div className="flex justify-between">
              <p>1 Product add to you basked.</p>
              <div onClick={() => setShowModal(!showModal)}>x</div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ProductVariant;
