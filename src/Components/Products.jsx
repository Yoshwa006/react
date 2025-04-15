import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // optional: loading state
  const [error, setError] = useState(null);     // optional: error state

  useEffect(() => {
    axios.get('http://localhost:8080/api/models/8')
      .then(response => {
        setProducts(response.data); // make sure response.data is an array of products
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products", err);
        setError("Something went wrong while fetching products.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
