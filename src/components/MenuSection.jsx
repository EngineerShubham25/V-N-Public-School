import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { Search, Plus, Minus, Check, Star, Flame, Sparkles, Filter, Info, Heart, Award } from 'lucide-react';

export default function MenuSection({ onAddToCart, cartItems }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVegOnly, setFilterVegOnly] = useState(false);
  const [addedItemIds, setAddedItemIds] = useState({});

  // Filter menu items
  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = !filterVegOnly || item.isVeg;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  const handleAdd = (item) => {
    onAddToCart(item);
    setAddedItemIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  const getItemQuantityInCart = (itemId) => {
    const found = cartItems.find(ci => ci.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-16 relative">
      <div className="max-w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Delicious Menu & Rates
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold gold-gradient-text font-serif-royal">
            OUR AUTHENTIC MENU
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-light">
            Made fresh daily using premium spices, pure ghee, and authentic recipes at Bangali Colony Chowk, Bettiah.
          </p>
        </div>

        {/* Search & Filters Bar */}
        <div className="glass-card p-4 rounded-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-amber-500/30">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search Dum Biryani, Momos, Raita..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 text-slate-100 placeholder-slate-400 pl-10 pr-4 py-2.5 rounded-xl border border-amber-500/20 text-sm focus:outline-none focus:border-amber-400 transition"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {MENU_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'gold-gradient-bg text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-amber-400 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Veg Only Toggle */}
          <button
            onClick={() => setFilterVegOnly(!filterVegOnly)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer ${
              filterVegOnly 
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500' 
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <span className={`w-3 h-3 rounded-full border border-emerald-500 flex items-center justify-center p-0.5`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </span>
            <span>Pure Veg Only</span>
          </button>

        </div>

        {/* Items Grid - Expanded to fill screen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredItems.map(item => {
            const inCartQty = getItemQuantityInCart(item.id);
            const isJustAdded = addedItemIds[item.id];

            return (
              <div 
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 group flex flex-col justify-between hover:shadow-xl hover:shadow-amber-500/10"
              >
                
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>
                  
                  {/* TOP BRAND OVERLAY BADGE - Overwrites any quote/logo on image with BIRYANI MEHFIL */}
                  <div className="absolute top-3 left-3 bg-slate-950/95 backdrop-blur-md border border-amber-500/60 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xl z-10">
                    <img src="/assets/logo.jpg" alt="Logo" className="w-4 h-4 rounded-full border border-amber-400 object-cover" />
                    <span className="font-serif-royal text-[11px] font-extrabold gold-gradient-text tracking-wider uppercase">
                      BIRYANI MEHFIL
                    </span>
                  </div>

                  {/* Veg / Non-Veg Indicator */}
                  <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md p-1.5 rounded-lg border border-slate-700 z-10">
                    <span className={`w-3.5 h-3.5 border-2 flex items-center justify-center ${item.isVeg ? 'border-emerald-500' : 'border-red-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                    </span>
                  </div>

                  {/* Rating & Review Ribbon */}
                  <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/30 flex items-center gap-1 text-xs font-bold text-amber-400 shadow z-10">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{item.rating}</span>
                    <span className="text-[10px] text-slate-400">({item.reviewsCount})</span>
                  </div>

                  {/* Portion Size Tag */}
                  <div className="absolute bottom-3 right-3 text-[11px] text-amber-200 bg-slate-950/90 px-2.5 py-0.5 rounded-md border border-amber-500/30 font-semibold shadow z-10">
                    {item.portion}
                  </div>

                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t, idx) => (
                      <span key={idx} className="bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] px-2 py-0.5 rounded-md font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Price & Add to Cart Button */}
                  <div className="pt-3 border-t border-amber-500/15 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-medium">Rate</span>
                      <span className="font-serif-royal font-extrabold text-xl text-amber-400">
                        ₹{item.price}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow ${
                        isJustAdded
                          ? 'bg-emerald-500 text-slate-950 scale-105'
                          : 'gold-gradient-bg text-slate-950 hover:scale-105 active:scale-95'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4 text-slate-950" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 text-slate-950" />
                          <span>ADD {inCartQty > 0 ? `(${inCartQty})` : ''}</span>
                        </>
                      )}
                    </button>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Empty Search Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 space-y-3 glass-card rounded-2xl p-8 max-w-md mx-auto">
            <Info className="w-10 h-10 text-amber-400 mx-auto" />
            <h4 className="text-lg font-bold text-slate-200">No items match your search</h4>
            <p className="text-xs text-slate-400">Try adjusting your category filter or search keyword.</p>
            <button 
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); setFilterVegOnly(false); }}
              className="gold-gradient-bg text-slate-950 font-bold px-4 py-2 rounded-xl text-xs mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
