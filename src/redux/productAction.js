export const productList = () => {
  // let data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // data = await data.json();
  // above is the reason why we need to use redux-saga
  // console.warn(`action is called`, data);
  return {
    type: "PRODUCT_LIST",
  };
};

export const productSearch = (query) => {
  // console.warn(`query search`, query);
  return {
    type: "SEARCH_PRODUCT",
    query,
  };
};
