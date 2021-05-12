const productsList = [];

export default function cartStorage(product) {
  localStorage.setItem("product", JSON.stringify(product));
  const productObj = JSON.parse(localStorage.getItem("product"));

  let finedProduct = productsList.find((item) => {
    return item.id === productObj.id && item.size === productObj.size;
  });

  if (finedProduct !== undefined) {
    finedProduct.quantity =
      Number(finedProduct.quantity) + Number(productObj.quantity);
  } else {
    productsList.push(productObj);
  }

  localStorage.setItem("productList", JSON.stringify(productsList));
  localStorage.removeItem("product");
  return productsList;
}

export function removeProduct(testString) {
  let productsListBefore = JSON.parse(localStorage.getItem("productList"));
  let productsListAfter = productsListBefore.filter((product) => {
    return `${product.id}${product.size}` !== testString;
  });
  localStorage.setItem("productList", JSON.stringify(productsListAfter));
  return productsList;
}

export function clearCart() {
  localStorage.clear();
}

export function getProductsList() {
  return JSON.parse(localStorage.getItem("productList"));
}
