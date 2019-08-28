/**
 * Add a product to the cart
 * @param {Object[]} product
 */
export const addProductToCart = product => ({
  type: "ADD_PRODUCT_TO_CART",
  product: product
});

/**
 * Delete pizza list
 */
export const flushCart = () => ({
  type: "FLUSH_CART"
});
