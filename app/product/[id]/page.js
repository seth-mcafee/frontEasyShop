import React from "react";
import { Separator } from "@/components/Shared";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product as ProductCtrl } from "@/api";
import Product from "@/components/Product/Product";
import { BasicLayout } from "@/layouts";

const productCtrl = new ProductCtrl();

export default async function ProductDetail({ params }) {
  let product;

  try {
    if (!params?.id) {
      throw new Error("No product ID provided");
    }

    product = await productCtrl.getById(params.id);

  } catch (error) {

    console.error("Error al cargar el producto:", error);

    return (
      <p>Producto no encontrado</p>
    );
  }

  return (
    <BasicLayout>
    <div className="container">
      <Separator height={100} />
      <Product product={product} />
      <Separator height={100} />
    </div>
    </BasicLayout>
  );
}
