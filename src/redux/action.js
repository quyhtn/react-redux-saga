export const addToCart = (data) => {
  // console.warn(`action is called`, data);
  return {
    type: "ADD_TO_CART",
    data: data,
  };
};

export const removeToCart = (data) => {
  // console.warn(`action is called`, data);
  return {
    type: "REMOVE_FROM_CART",
    data,
  };
};

export const emptyCart = () => {
  // console.warn(`action is called`);
  return {
    type: "EMPTY_CART",
  };
};
