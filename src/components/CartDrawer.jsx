import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Send, Phone, MapPin, Truck, CheckCircle2, QrCode, CreditCard, Sparkles, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart, onOrderPlaced }) {
  const [orderType, setOrderType] = useState('delivery'); // delivery, takeaway, dinein
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [paymentMode, setPaymentMode] = useState('cod'); // cod, upi
  const [showUpiModal, setShowUpiModal] = useState(false);
  const [specialNote, setSpecialNote] = useState('');
  const [validationError, setValidationError] = useState('');

  if (!isOpen) return null;

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? (subtotal > 200 ? 0 : 25) : 0;
  const taxes = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + deliveryFee + taxes;

  const handleCheckout = () => {
    if (!customerName.trim()) {
      setValidationError('Please enter your name');
      return;
    }
    if (!customerPhone.trim() || customerPhone.length < 10) {
      setValidationError('Please enter a valid 10-digit phone number');
      return;
    }
    if (orderType === 'delivery' && !deliveryAddress.trim()) {
      setValidationError('Please enter your delivery address in Bettiah');
      return;
    }

    setValidationError('');

    // Generate Order ID
    const orderId = 'BM-' + Math.floor(100000 + Math.random() * 900000);

    // Build WhatsApp message
    let itemDetails = cartItems.map(item => `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}`).join('\n');
    
    let msg = `*NEW ORDER - BIRYANI MEHFIL*\n`;
    msg += `---------------------------\n`;
    msg += `*Order ID:* ${orderId}\n`;
    msg += `*Order Type:* ${orderType.toUpperCase()}\n`;
    msg += `*Customer:* ${customerName}\n`;
    msg += `*Phone:* ${customerPhone}\n`;
    if (orderType === 'delivery') {
      msg += `*Address:* ${deliveryAddress} (${landmark ? 'Near ' + landmark : 'Bettiah'})\n`;
    }
    msg += `\n*ITEMS ORDERED:*\n${itemDetails}\n`;
    msg += `---------------------------\n`;
    msg += `*Subtotal:* ₹${subtotal}\n`;
    if (orderType === 'delivery') {
      msg += `*Delivery Fee:* ₹${deliveryFee} ${deliveryFee === 0 ? '(FREE)' : ''}\n`;
    }
    msg += `*Taxes (GST 5%):* ₹${taxes}\n`;
    msg += `*GRAND TOTAL:* ₹${grandTotal}\n`;
    msg += `*Payment Method:* ${paymentMode === 'cod' ? 'Cash on Delivery / Counter' : 'UPI Instant Pay'}\n`;
    if (specialNote) {
      msg += `*Special Note:* ${specialNote}\n`;
    }
    msg += `---------------------------\n`;
    msg += `Please confirm my order! Thank you.`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodedMsg}`;

    // Trigger Order Placed callback for Live Order Tracking
    onOrderPlaced({
      orderId,
      customerName,
      customerPhone,
      deliveryAddress,
      orderType,
      grandTotal,
      cartItems
    });

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-950 border-l border-amber-500/30 text-slate-100 flex flex-col justify-between shadow-2xl">
          
          {/* Header */}
          <div className="p-5 border-b border-amber-500/20 flex items-center justify-between glass-nav">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold font-serif-royal gold-gradient-text">Your Order Cart</h3>
              <span className="bg-amber-500/20 text-amber-300 text-xs px-2 py-0.5 rounded-full border border-amber-500/30">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)} Items
              </span>
            </div>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">

            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-16 h-16 text-slate-700 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-slate-300">Your cart is empty</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Add some delicious Dum Biryani or Hot Momos to start your order.
                </p>
              </div>
            ) : (
              <>
                {/* Order Type Toggle */}
                <div className="bg-slate-900/90 p-1.5 rounded-2xl border border-amber-500/20 grid grid-cols-3 gap-1">
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                      orderType === 'delivery' ? 'gold-gradient-bg text-slate-950 shadow' : 'text-slate-400 hover:text-amber-300'
                    }`}
                  >
                    <Truck className="w-3.5 h-3.5" />
                    <span>Delivery</span>
                  </button>
                  <button
                    onClick={() => setOrderType('takeaway')}
                    className={`py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                      orderType === 'takeaway' ? 'gold-gradient-bg text-slate-950 shadow' : 'text-slate-400 hover:text-amber-300'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Takeaway</span>
                  </button>
                  <button
                    onClick={() => setOrderType('dinein')}
                    className={`py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                      orderType === 'dinein' ? 'gold-gradient-bg text-slate-950 shadow' : 'text-slate-400 hover:text-amber-300'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Dine-In</span>
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  {cartItems.map(item => (
                    <div key={item.id} className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800 flex items-center gap-3">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-14 h-14 rounded-xl object-cover border border-amber-500/30"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-bold text-slate-100 truncate">{item.name}</h5>
                        <p className="text-[10px] text-amber-300 font-semibold">₹{item.price} each</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 p-1 rounded-xl">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-lg bg-slate-900 text-slate-300 hover:text-amber-400 flex items-center justify-center cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-lg bg-slate-900 text-slate-300 hover:text-amber-400 flex items-center justify-center cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price & Remove */}
                      <div className="text-right">
                        <span className="block text-xs font-extrabold text-amber-400 font-serif-royal">
                          ₹{item.price * item.quantity}
                        </span>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[10px] text-red-400 hover:text-red-300 flex items-center gap-0.5 mt-1 cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <div className="space-y-3 pt-3 border-t border-slate-800">
                  <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider">Customer Details</h5>
                  
                  {validationError && (
                    <div className="bg-red-950/80 border border-red-500/50 p-2.5 rounded-xl text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  <input 
                    type="text" 
                    placeholder="Your Full Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-slate-900 border border-amber-500/20 text-xs text-white placeholder-slate-500 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-amber-400"
                  />

                  <input 
                    type="tel" 
                    placeholder="10-Digit Mobile Number *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-slate-900 border border-amber-500/20 text-xs text-white placeholder-slate-500 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-amber-400"
                  />

                  {orderType === 'delivery' && (
                    <>
                      <input 
                        type="text" 
                        placeholder="Full Delivery Address in Bettiah *"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="w-full bg-slate-900 border border-amber-500/20 text-xs text-white placeholder-slate-500 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-amber-400"
                      />
                      <input 
                        type="text" 
                        placeholder="Landmark (e.g. Near Bangali Colony Chowk / Station Road)"
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                        className="w-full bg-slate-900 border border-amber-500/20 text-xs text-white placeholder-slate-500 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-amber-400"
                      />
                    </>
                  )}

                  <textarea 
                    placeholder="Special Cooking Instructions (e.g. Extra spicy chutney, less oil...)"
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    rows={2}
                    className="w-full bg-slate-900 border border-amber-500/20 text-xs text-white placeholder-slate-500 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Payment Option */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider">Payment Mode</h5>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setPaymentMode('cod')}
                      className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer ${
                        paymentMode === 'cod' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>{orderType === 'delivery' ? 'Cash on Delivery' : 'Pay at Counter'}</span>
                    </button>
                    <button
                      onClick={() => { setPaymentMode('upi'); setShowUpiModal(true); }}
                      className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer ${
                        paymentMode === 'upi' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      <QrCode className="w-4 h-4 text-amber-400" />
                      <span>UPI / GPay / PhonePe</span>
                    </button>
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Bill Summary Footer */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-amber-500/30 glass-nav space-y-3">
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Delivery Fee (Bettiah Town)</span>
                    <span className="font-semibold text-emerald-400">
                      {deliveryFee === 0 ? 'FREE (Orders > ₹200)' : `₹${deliveryFee}`}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>GST Taxes (5%)</span>
                  <span className="font-semibold">₹{taxes}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-amber-400 pt-2 border-t border-slate-800 font-serif-royal">
                  <span>Grand Total</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              {/* Order Button */}
              <button
                onClick={handleCheckout}
                className="w-full gold-gradient-bg text-slate-950 font-extrabold py-3.5 rounded-2xl shadow-lg shadow-amber-500/20 hover:scale-102 transition flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Confirm & Send Order via WhatsApp</span>
              </button>

              <p className="text-[10px] text-center text-slate-400">
                ⚡ Instant Confirmation on Hotline: {RESTAURANT_INFO.phone}
              </p>
            </div>
          )}

        </div>
      </div>

      {/* UPI QR Payment Modal */}
      {showUpiModal && (
        <div className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h4 className="font-bold text-amber-300 text-sm">Scan to Pay via PhonePe / GPay</h4>
              <button onClick={() => setShowUpiModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Generated Mock UPI QR code */}
            <div className="bg-white p-4 rounded-2xl inline-block shadow-inner">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=7097039425@ybl&pn=BiryaniMehfil&am=${grandTotal}&cu=INR`} 
                alt="Biryani Mehfil UPI QR Code" 
                className="w-44 h-44 mx-auto"
              />
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold text-white">BIRYANI MEHFIL</p>
              <p className="text-[11px] text-amber-400 font-mono">UPI ID: 7097039425@ybl</p>
              <p className="text-sm font-extrabold text-amber-300 pt-1">Amount: ₹{grandTotal}</p>
            </div>

            <button
              onClick={() => { setShowUpiModal(false); setPaymentMode('upi'); }}
              className="w-full bg-emerald-500 text-slate-950 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Done Payment</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
