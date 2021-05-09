const productsList = [];

export default function cartStorage(product) {
  localStorage.setItem("product", JSON.stringify(product));
  const productObj = JSON.parse(localStorage.getItem("product"));

  let finedProduct = productsList.find((item) => {
    return item.id === productObj.id;
  });

  if (finedProduct !== undefined) {
    finedProduct.quantity =
      Number(finedProduct.quantity) + Number(productObj.quantity);
  } else {
    productsList.push(productObj);
  }

  localStorage.setItem("productList", JSON.stringify(productsList));
}
