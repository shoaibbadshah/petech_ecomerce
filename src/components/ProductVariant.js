import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { addToCart, removeFromCart } from "../redux/actions/cartAction";

const ProductVariant = ({ product }) => {
  console.log("🚀 ~ product:", product.variants);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const cartItem = useSelector((e) => e.cart?.cartItems);
  console.log("🚀 ~ ProductVariant ~ cartItem:", cartItem);

  const handleAddToCart = async (prod, total_qnty, qntyInc, size) => {
    if (total_qnty > 0) {
      dispatch(addToCart(prod, size, qntyInc));

      openModal();
    }
  };

  const removeCartItem = (id) => {
    dispatch(removeFromCart(id));
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
          {product?.variants?.every((variant) => variant.quantity === 0) && (
            <p className="absolute bg-black text-white text-xs px-1 left-1 top-1 z-50">
              Sold out
            </p>
          )}

          <img
            ref={imageRef}
            src={product?.cover_image}
            alt={product?.title}
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
            {product?.variants?.map((variant) => {
              return variant?.quantity === 0 ? (
                <div className="relative">
                  <span className="">{variant?.size}</span>
                  <div className="w-[1px] bg-white h-11 rotate-45 absolute -top-2  left-1"></div>
                </div>
              ) : (
                <span
                  className=""
                  onClick={() =>
                    handleAddToCart(
                      product,
                      variant?.quantity,
                      1,
                      variant?.size
                    )
                  }
                >
                  {variant?.size}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h4 className="">{product.title}</h4>
        <p className="font-semibold">{product.sale_price} AED</p>
      </div>

      <div>
        {showModal && (
          <Modal onClose={closeModal}>
            <div className="flex justify-between items-center">
              <p>
                <span className="font-semibold"> {cartItem?.length}</span>{" "}
                Product add to you basked.
              </p>
              <div
                className="flex border border-gray-800 w-5 h-5 justify-center items-center pb-1 rounded-full"
                onClick={() => setShowModal(!showModal)}
              >
                x
              </div>
            </div>

            <div className="mt-9">
              {cartItem?.map((item) => {
                console.log("🚀 ~ {cartItem.map ~ item:", item);
                return (
                  <div className="grid grid-cols-1 mt-5">
                    <div className="flex">
                      <img
                        src={item?.product?.cover_image}
                        alt={item?.product?.title}
                        className={` rounded-xl object-contain w-1/5`}
                      />

                      <div className="pl-5">
                        <p>{item?.product?.title}</p>
                        <p className="font-semibold">
                          {item?.product?.sale_price}
                        </p>
                        <p className="border w-7 items-center justify-center flex">
                          {item?.size}
                        </p>

                        <div className="flex  w-1/3 mt-2 justify-around border">
                          <button
                            onClick={() =>
                              // handleAddToCart(
                              //   item?.product,
                              //   item?.quantity,
                              //   -1,
                              //   item?.size
                              // )

                              removeCartItem(item?.product?.id)
                            }
                            className="font-semibold"
                          >
                            -
                          </button>
                          <p className="font-semibold">{item?.quantity}</p>
                          <button
                            onClick={() =>
                              handleAddToCart(
                                item?.product,
                                item?.quantity,
                                1,
                                item?.size
                              )
                            }
                            className="font-semibold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <p>Sub Total</p>
                      <p>AED</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ProductVariant;
