function ProductCard({ product }) {
    return (
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border p-4 bg-white">
        {/* Thumbnail */}
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={product.thumbnailUrl}
          alt={product.name}
        />
  
        {/* Info */}
        <div className="py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            {!product.published && (
              <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                Unpublished
              </span>
            )}
          </div>
  
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          <p className="text-md font-bold text-blue-700">₹{product.price}</p>
          <p className="text-sm text-gray-500 mt-1">Category: {product.category}</p>
  
          {product.free ? (
            <p className="text-green-500 mt-1 font-medium">Free Download</p>
          ) : (
            <p className="text-yellow-600 mt-1 font-medium">Premium Product</p>
          )}
  
          {/* File link */}
          <a
            href={product.fileUrl}
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            View 3D File
          </a>
        </div>
      </div>
    );
  }
  
  export default ProductCard;
  