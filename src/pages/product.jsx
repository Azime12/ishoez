// src/pages/ProductList.jsx
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/apiTags";

export default function ProductList() {
  const { slug } = useParams(); 
  const location = useLocation();
  const navigate = useNavigate();

  const subcategory_id1 = location.state?.subcategory?.id;
  const subcategory_name = location.state?.subcategory?.name || slug;

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 12; // 12 items per page

  useEffect(() => {
    if (!subcategory_id1) return;

    async function fetchProducts() {
      try {
        const res = await axios.get(`${BASE_URL}/products.php`, {
          params: { subcategory_id1 },
        });
        setProducts(res.data || []);
      } catch (error) {
        console.error("Error loading products", error);
      }
    }

    fetchProducts();
  }, [subcategory_id1]);

  const showPrice = (price) =>
    price &&
    price !== "0" &&
    price !== 0 &&
    price !== "" &&
    price !== null &&
    price !== undefined;

  // Pagination Logic
  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const goToDetail = (product) => {
    navigate(`/product/${product.slug}/detail`, { state: { product } });
  };

  return (
    <main className="pb-12 md:px-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-green-700"
      >
        ← Back
      </button>

      {/* Center Title */}
      <h1 className="mb-6 text-2xl font-bold text-center text-gray-900">
        {subcategory_name}
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="p-3 transition bg-white border shadow rounded-xl hover:shadow-lg"
          >
            {/* Image */}
            <div
              onClick={() => goToDetail(product)}
              className="cursor-pointer"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="object-cover w-full h-40 rounded"
              />
            </div>

            {/* Name */}
            <h3 className="mt-2 font-semibold text-gray-800">
              {product.name}
            </h3>

            {/* Price */}
            {showPrice(product.price) && (
              <div className="mt-1 font-bold text-blue-600">
                {product.price}
              </div>
            )}

            {/* View Detail Button */}
            <button
              onClick={() => goToDetail(product)}
              className="w-full px-3 py-2 mt-3 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              View Detail
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {products.length > PAGE_SIZE && (
        <div className="flex items-center justify-center mt-6 space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === 1
                ? "cursor-not-allowed bg-gray-200"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Prev
          </button>

          <span className="px-4 py-2 font-semibold text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === totalPages
                ? "cursor-not-allowed bg-gray-200"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
