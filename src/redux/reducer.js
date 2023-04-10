export const cartData = (data = [], action) => {
  //   if (action.type === "ADD_TO_CART") {
  //     console.warn(`ADD_TO_CART condition`, action);
  //     // some logic
  //     return data;
  //   } else {
  //     return "no action called";
  //   }

  switch (action.type) {
    case "ADD_TO_CART":
      console.warn("ADD_TO_CART condition", action);
      return [action.data, ...data];
    case "REMOVE_FROM_CART":
      console.warn("REMOVE_FROM_CART condition", action);
      data.length = data.length ? data.length - 1 : [];
      return [...data];
    case "EMPTY_CART":
      console.warn("EMPTY_CART condition", action);
      data = [];
      return [...data];
    default:
      return [];
  }
};