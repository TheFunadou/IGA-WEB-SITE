// src/utils/cartUtils.ts

export type CartItem = {
  sku: number;
  productName: string;
  category: string;
  unit_price: number;
  quantity: number;
  imageUrl: string;
  favorite: boolean;
  isChecked: boolean;
};

export const CART_KEY = "shopping_cart";

export const getCart = (): CartItem[] => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (item: CartItem) => {
  const cart = getCart();
  const existing = cart.find(p => p.sku === item.sku);

  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push({
      ...item, isChecked: item.isChecked ?? true // Default to true if not provided
    });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};



export const toggleChecked = (sku: number): CartItem[] => {
  const updatedCart = getCart().map((item) =>
    item.sku === sku ? { ...item, isChecked: !item.isChecked } : item
  );

  localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
  return updatedCart;
};

export const setAllChecked = (checked: boolean): CartItem[] => {
  const updatedCart = getCart().map(item => ({
    ...item,
    isChecked: checked
  }));
  localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
  return updatedCart;
};


export const removeFromCart = (sku: number) => {
  const cart = getCart().filter(p => p.sku !== sku);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
