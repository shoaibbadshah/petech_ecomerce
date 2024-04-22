import React, { useState, useEffect } from "react";
import ProductVariant from "./ProductVariant";
import useFetch from "../hooks/useFetch";

const DATA = {
  status: 200,
  data: [
    {
      id: 46,
      title: "Victory Sports Bra - Optic White",
      details:
        'Removable Padding\nSleek V-Neck Design\nOptimal Support\nBreathable & Resilient\nHassle-Free Maintenance\nButtery Soft Feel\nIf in-between sizes, size up\n\n**NEECHEN IS WEARING SMALL**\nHeight: 5\'5"\nBust: 33.5"\nWaist: 25"\nHips: 36"\n\n**DESIGNED FOR**\nVersatile Workouts & Everyday Wear',
      product_code: "653521119287",
      on_sale: false,
      sale_price: "60",
      regular_price: "20",
      color: "White",
      identifier: "wx2762---white",
      depoter_color: "white",
      page_title: null,
      meta_description: null,
      variants: [
        {
          id: 221,
          sku: "WX2762_SPORTSBRA_WHITE_S",
          quantity: 550,
          size: "S",
        },
        {
          id: 225,
          sku: "WX2762_SPORTSBRA_WHITE_M",
          quantity: 0,
          size: "M",
        },
        {
          id: 231,
          sku: "WX2762_SPORTSBRA_WHITE_L",
          quantity: 0,
          size: "L",
        },
        {
          id: 249,
          sku: "WX2762_SPORTSBRA_WHITE_XL",
          quantity: 0,
          size: "XL",
        },
      ],
      cover_image:
        "https://assets.cogeter.com/production/WX_2762_SPORTSBRA_WHITE_S_WX_2762_1171_44c7edecea.jpg",
      gallery: [
        {
          url: "https://assets.cogeter.com/production/WX_2762_SPORTSBRA_WHITE_S_WX_2762_1175_69a91abf88.jpg",
        },
        {
          url: "https://assets.cogeter.com/production/WX_2762_SPORTSBRA_WHITE_S_WX_2762_1168_70a8f90832.jpg",
        },
        {
          url: "https://assets.cogeter.com/production/WX_2762_SPORTSBRA_WHITE_S_WX_2762_1153_2185ad99c0.jpg",
        },
        {
          url: "https://assets.cogeter.com/production/WX_2762_SPORTSBRA_WHITE_S_WX_2762_1138_779a338aaf.jpg",
        },
      ],
      published_at: "2023-10-31T16:44:48.921Z",
      is_wishlist: false,
    },
    {
      id: 53,
      title: "Zip Fit Sports Bra  - Charcoal Grey",
      details:
        'Removable Padding\nAdjustable Front Zipper\nVersatile Fashion Statement\nContoured Fit\nDurable & Breathable\nAdaptive Support\nButtery Soft Feel\nIf in-between sizes, size up\n\n**MILENA IS WEARING SMALL**\nHeight: 5\'5"\nBust: 33.5"\nWaist: 25"\nHips: 36"\n\n**DESIGNED FOR**\nVersatile Workouts & Everyday Wear\n\n',
      product_code: "2021022413881",
      on_sale: false,
      sale_price: "54.45",
      regular_price: "50",
      color: "Grey",
      identifier: "qswx62---grey",
      depoter_color: "grey",
      page_title: null,
      meta_description: null,
      variants: [
        {
          id: 236,
          sku: "QSWX62_SPORSBRA_GREY_S",
          quantity: 0,
          size: "S",
        },
        {
          id: 240,
          sku: "QSWX62_SPORSBRA_GREY_M",
          quantity: 50,
          size: "M",
        },
        {
          id: 242,
          sku: "QSWX62_SPORSBRA_GREY_L",
          quantity: 50,
          size: "L",
        },
      ],
      cover_image:
        "https://assets.cogeter.com/production/QSWX_62_SPORSBRA_GREY_S_QSTZ_62_set_934_e4e762a300.jpg",
      gallery: [
        {
          url: "https://assets.cogeter.com/production/QSWX_62_SPORSBRA_GREY_S_QSTZ_62_set_943_ff38775b91.jpg",
        },
        {
          url: "https://assets.cogeter.com/production/QSWX_62_SPORSBRA_GREY_S_QSTZ_62_set_937_3f35fa3fc9.jpg",
        },
        {
          url: "https://assets.cogeter.com/production/QSWX_62_SPORSBRA_GREY_S_QSTZ_62_set_932_308ab5a7c1.jpg",
        },
        {
          url: "https://assets.cogeter.com/production/QSWX_62_SPORSBRA_GREY_S_QSTZ_62_set_892_85777dd1f3.jpg",
        },
      ],
      published_at: "2023-11-30T09:19:56.134Z",
      is_wishlist: false,
    },
    {
      id: 54,
      title: "Local sps Bra  - Charcoal Grey",
      details:
        'Removable Padding\nAdjustable Front Zipper\nVersatile Fashion Statement\nContoured Fit\nDurable & Breathable\nAdaptive Support\nButtery Soft Feel\nIf in-between sizes, size up\n\n**MILENA IS WEARING SMALL**\nHeight: 5\'5"\nBust: 33.5"\nWaist: 25"\nHips: 36"\n\n**DESIGNED FOR**\nVersatile Workouts & Everyday Wear\n\n',
      product_code: "2021022413881",
      on_sale: false,
      sale_price: "54.45",
      regular_price: "50",
      color: "Grey",
      identifier: "qswx62---grey",
      depoter_color: "grey",
      page_title: null,
      meta_description: null,
      variants: [
        {
          id: 236,
          sku: "QSWX62_SPORSBRA_GREY_S",
          quantity: 0,
          size: "S",
        },
        {
          id: 240,
          sku: "QSWX62_SPORSBRA_GREY_M",
          quantity: 50,
          size: "M",
        },
        {
          id: 242,
          sku: "QSWX62_SPORSBRA_GREY_L",
          quantity: 50,
          size: "L",
        },
      ],
      cover_image:
        "https://assets.cogeter.com/production/MYDK_98_SHORTS_BLACK_S_MYDK_98_96_f34fdd216e.jpg",
      gallery: [
        {
          url: "https://assets.cogeter.com/production/QSWX_62_SPORSBRA_GREY_S_QSTZ_62_set_943_ff38775b91.jpg",
        },
        {
          url: "https://assets.cogeter.com/production/QSWX_62_SPORSBRA_GREY_S_QSTZ_62_set_937_3f35fa3fc9.jpg",
        },
        {
          url: "https://assets.cogeter.com/production/QSWX_62_SPORSBRA_GREY_S_QSTZ_62_set_932_308ab5a7c1.jpg",
        },
        {
          url: "https://assets.cogeter.com/production/QSWX_62_SPORSBRA_GREY_S_QSTZ_62_set_892_85777dd1f3.jpg",
        },
      ],
      published_at: "2023-11-30T09:19:56.134Z",
      is_wishlist: false,
    },
    {
      id: 55,
      title: "Local sps Bra  - Charcoal Grey",
      details:
        'Removable Padding\nAdjustable Front Zipper\nVersatile Fashion Statement\nContoured Fit\nDurable & Breathable\nAdaptive Support\nButtery Soft Feel\nIf in-between sizes, size up\n\n**MILENA IS WEARING SMALL**\nHeight: 5\'5"\nBust: 33.5"\nWaist: 25"\nHips: 36"\n\n**DESIGNED FOR**\nVersatile Workouts & Everyday Wear\n\n',
      product_code: "2021022413881",
      on_sale: false,
      sale_price: "54.45",
      regular_price: "50",
      color: "Grey",
      identifier: "qswx62---grey",
      depoter_color: "grey",
      page_title: null,
      meta_description: null,
      variants: [
        {
          id: 236,
          sku: "QSWX62_SPORSBRA_GREY_S",
          quantity: 0,
          size: "S",
        },
        {
          id: 240,
          sku: "QSWX62_SPORSBRA_GREY_M",
          quantity: 50,
          size: "M",
        },
        {
          id: 242,
          sku: "QSWX62_SPORSBRA_GREY_L",
          quantity: 50,
          size: "L",
        },
      ],
      cover_image:
        "https://assets.cogeter.com/production/MYDK_98_SHORTS_RED_S_MYDK_98_109_19cb08a4d7.jpg",
      gallery: [
        {
          url: "https://assets.cogeter.com/production/QSWX_62_SPORSBRA_GREY_S_QSTZ_62_set_943_ff38775b91.jpg",
        },
        {
          url: "https://assets.cogeter.com/production/QSWX_62_SPORSBRA_GREY_S_QSTZ_62_set_937_3f35fa3fc9.jpg",
        },
        {
          url: "https://assets.cogeter.com/production/QSWX_62_SPORSBRA_GREY_S_QSTZ_62_set_932_308ab5a7c1.jpg",
        },
        {
          url: "https://assets.cogeter.com/production/QSWX_62_SPORSBRA_GREY_S_QSTZ_62_set_892_85777dd1f3.jpg",
        },
      ],
      published_at: "2023-11-30T09:19:56.134Z",
      is_wishlist: false,
    },
  ],
};

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const { data, loading, error } = useFetch(
    "https://store-api.cogeter.com/api/products?limit=30"
  );

  console.log("dmy", data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const response = await axios.get('https://store-api.cogeter.com/api/products?limit=30');
  //       //server down
  //       setProducts(DATA?.data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="m-12 grid grid-cols-2 md:grid-cols-4 gap-4">
      {data?.data?.length > 0 &&
        data?.data?.map((product) => (
          <ProductVariant key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductsList;
