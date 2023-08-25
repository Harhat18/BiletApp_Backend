export default function (state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const {product} = action.payload;
      const newList = [...state.productList, product];
      return {...state, productList: newList};

    case 'CLEAN_LIST':
      return {...state, productList: []};

    default:
      return state;
  }
}
