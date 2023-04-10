export const productList = async () => {
  let data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  data = await data.json();
  // above is the reason why we need to use redux-saga

  console.warn(`action is called`, data);
  return {
    type: "PRODUCT_LIST",
    data,
  };
};
