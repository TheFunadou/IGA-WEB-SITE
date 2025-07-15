
export type Address = {
  id: number;
  recipient_name: string;
  recipient_last_names: string;
  country: string;
  city: string;
  state: string;
  street: string;
  ext_number: string;
  int_number: string;
  neighborhood: string;
  postal_code: string;
  contact_number: string;
  default_address: boolean;
};

const ADDRESS_KEY = "addresses_list";
const ADDRESS_LOADED_KEY = "addresses_loaded";

export const getAddresses = (): Address[] => {
  const raw = localStorage.getItem(ADDRESS_KEY);
  return raw ? JSON.parse(raw) : [];
};


export const fetchAndStoreAddresses = async (): Promise<void> => {
  if (sessionStorage.getItem(ADDRESS_LOADED_KEY)) return;

  // LOCALHOST:http://localhost:8000/get_addresses
  // IGA-RED: http://192.168.1.72:8000/get_addresses
  const response = await fetch("http://192.168.1.72:8000/get_addresses");
  const data = await response.json();

  localStorage.setItem(ADDRESS_KEY, JSON.stringify(data));
};


export const createAddress = async (newAddress: Omit<Address, "id">): Promise<void> => {
  const response = await fetch("/api/addresses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAddress),
  });

  const savedAddress = await response.json();
  const current = getAddresses();
  localStorage.setItem(ADDRESS_KEY, JSON.stringify([...current, savedAddress]));
};

export const deleteAddress = async (id: number): Promise<void> => {
  await fetch(`/api/addresses/${id}`, { method: "DELETE" });
  const updated = getAddresses().filter(addr => addr.id !== id);
  localStorage.setItem(ADDRESS_KEY, JSON.stringify(updated));
};



