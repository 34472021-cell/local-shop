import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Lucide icons as components
const ShoppingCart = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const Users = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const Plus = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const Trash2 = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
  </svg>
);

const Phone = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const Lock = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const LogOut = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const DollarSign = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const Edit2 = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
  </svg>
);

const Check = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const X = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ShoppingBag = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const Send = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

// Mock storage for GitHub Pages (replace with your backend later)
const mockStorage = {
  data: {},
  async get(key) {
    const value = localStorage.getItem(key);
    return value ? { key, value } : null;
  },
  async set(key, value) {
    localStorage.setItem(key, value);
    return { key, value };
  },
  async delete(key) {
    localStorage.removeItem(key);
    return { key, deleted: true };
  },
  async list(prefix) {
    const keys = Object.keys(localStorage).filter(k => !prefix || k.startsWith(prefix));
    return { keys };
  }
};

// Assign to window.storage
if (!window.storage) {
  window.storage = mockStorage;
}

const MamaJohnShop = () => {
  const [activeTab, setActiveTab] = useState('shop');
  const [debtors, setDebtors] = useState([]);
  const [orders, setOrders] = useState([]);
  const [shopItems, setShopItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  
  const ADMIN_PASSWORD = 'mama123';
  const MPESA_NUMBER = '0710174648';
  
  const defaultItems = [
    { id: 1, name: 'Rice (1kg)', price: 150, category: 'Grains', inStock: true },
    { id: 2, name: 'Maize Flour (2kg)', price: 180, category: 'Grains', inStock: true },
    { id: 3, name: 'Sugar (1kg)', price: 160, category: 'Groceries', inStock: true },
    { id: 4, name: 'Cooking Oil (1L)', price: 320, category: 'Groceries', inStock: true },
    { id: 5, name: 'Salt (500g)', price: 45, category: 'Groceries', inStock: true },
    { id: 6, name: 'Tea Leaves (250g)', price: 120, category: 'Beverages', inStock: true },
    { id: 7, name: 'Milk (500ml)', price: 65, category: 'Dairy', inStock: true },
    { id: 8, name: 'Bread', price: 55, category: 'Bakery', inStock: true },
    { id: 9, name: 'Eggs (Tray)', price: 420, category: 'Dairy', inStock: true },
    { id: 10, name: 'Tomatoes (1kg)', price: 80, category: 'Vegetables', inStock: true },
    { id: 11, name: 'Onions (1kg)', price: 70, category: 'Vegetables', inStock: true },
    { id: 12, name: 'Potatoes (1kg)', price: 60, category: 'Vegetables', inStock: true },
    { id: 13, name: 'Soap Bar', price: 50, category: 'Household', inStock: true },
    { id: 14, name: 'Washing Powder (1kg)', price: 180, category: 'Household', inStock: true },
    { id: 15, name: 'Matches (Box)', price: 10, category: 'Household', inStock: true }
  ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [debtorsRes, ordersRes, itemsRes] = await Promise.all([
        window.storage.get('mama-john-debtors').catch(() => null),
        window.storage.get('mama-john-orders').catch(() => null),
        window.storage.get('mama-john-items').catch(() => null)
      ]);
      
      if (debtorsRes?.value) setDebtors(JSON.parse(debtorsRes.value));
      if (ordersRes?.value) setOrders(JSON.parse(ordersRes.value));
      if (itemsRes?.value) setShopItems(JSON.parse(itemsRes.value));
      else setShopItems(defaultItems);
    } catch (error) {
      console.log('Error loading data:', error);
      setShopItems(defaultItems);
    } finally {
      setLoading(false);
    }
  };

  const saveDebtors = async (updatedDebtors) => {
    try {
      await window.storage.set('mama-john-debtors', JSON.stringify(updatedDebtors));
      setDebtors(updatedDebtors);
    } catch (error) {
      alert('Failed to save data');
    }
  };

  const saveOrders = async (updatedOrders) => {
    try {
      await window.storage.set('mama-john-orders', JSON.stringify(updatedOrders));
      setOrders(updatedOrders);
    } catch (error) {
      alert('Failed to save orders');
    }
  };

  const saveItems = async (updatedItems) => {
    try {
      await window.storage.set('mama-john-items', JSON.stringify(updatedItems));
      setShopItems(updatedItems);
    } catch (error) {
      alert('Failed to save items');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setPassword('');
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(i => i.id !== itemId));
  };

  const updateCartQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(i => i.id === itemId ? { ...i, quantity } : i));
    }
  };

  const submitOrder = () => {
    if (!customerName.trim()) {
      alert('Please enter your name');
      return;
    }
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    const order = {
      id: Date.now(),
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      items: cart,
      total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      date: new Date().toISOString(),
      status: 'pending'
    };

    saveOrders([order, ...orders]);
    setCart([]);
    setCustomerName('');
    setCustomerPhone('');
    alert('Order submitted successfully! We will contact you shortly.');
  };

  const deleteOrder = (id) => {
    if (confirm('Delete this order?')) {
      saveOrders(orders.filter(o => o.id !== id));
    }
  };

  const markOrderComplete = (id) => {
    saveOrders(orders.map(o => o.id === id ? { ...o, status: 'completed' } : o));
  };

  const addDebtor = () => {
    const name = prompt('Enter debtor name:');
    if (!name) return;
    const amount = prompt('Enter amount owed (KSh):');
    if (!amount || isNaN(amount)) return;
    const phone = prompt('Enter phone number (optional):') || '';
    const notes = prompt('Enter notes (optional):') || '';

    saveDebtors([...debtors, {
      id: Date.now(),
      name: name.trim(),
      amount: parseFloat(amount),
      phone: phone.trim(),
      notes: notes.trim(),
      date: new Date().toISOString()
    }]);
  };

  const deleteDebtor = (id) => {
    if (confirm('Remove this debtor?')) {
      saveDebtors(debtors.filter(d => d.id !== id));
    }
  };

  const updateDebtorAmount = (id) => {
    const debtor = debtors.find(d => d.id === id);
    const newAmount = prompt(`Update amount for ${debtor.name}:`, debtor.amount);
    if (newAmount === null || isNaN(newAmount)) return;
    saveDebtors(debtors.map(d => d.id === id ? { ...d, amount: parseFloat(newAmount) } : d));
  };

  const addNewProduct = () => {
    const name = prompt('Product name:');
    if (!name) return;
    const price = prompt('Price (KSh):');
    if (!price || isNaN(price)) return;
    const category = prompt('Category (e.g., Groceries, Dairy):');
    if (!category) return;

    const newItem = {
      id: Date.now(),
      name: name.trim(),
      price: parseFloat(price),
      category: category.trim(),
      inStock: true
    };
    saveItems([...shopItems, newItem]);
  };

  const startEditItem = (item) => {
    setEditingItem({ ...item });
  };

  const saveEditItem = () => {
    saveItems(shopItems.map(i => i.id === editingItem.id ? editingItem : i));
    setEditingItem(null);
  };

  const deleteItem = (id) => {
    if (confirm('Delete this product?')) {
      saveItems(shopItems.filter(i => i.id !== id));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalDebt = debtors.reduce((sum, d) => sum + d.amount, 0);
  const groupedItems = shopItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-3 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl md:text-3xl font-bold">🛒 Mama John Shop</h1>
              <p className="text-xs md:text-sm text-orange-100 hidden md:block">Your trusted neighborhood store</p>
            </div>
            <div className="flex gap-2">
              
                href={`tel:${MPESA_NUMBER}`}
                className="bg-white text-orange-600 px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center gap-2 text-sm md:text-base"
              >
                <Phone size={16} />
                <span className="hidden md:inline">Call</span>
              </a>
              {isAdmin && (
                <button
                  onClick={() => setIsAdmin(false)}
                  className="bg-red-500 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center gap-2"
                >
                  <LogOut size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* M-Pesa Banner */}
      <div className="container mx-auto px-3 mt-3">
        <div className="bg-green-600 text-white rounded-lg shadow-lg p-3 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <DollarSign size={20} />
            <div>
              <p className="font-semibold">Pay via M-Pesa: {MPESA_NUMBER}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same... */}
      {/* Copy the rest from the artifact above */}
    </div>
  );
};

// Render the app
const root = createRoot(document.getElementById('root'));
root.render(<MamaJohnShop />);
