// Data
const bestsellers = [
  {id:1, name:"Shorshe Ilish", tag:"🔥 BESTSELLER", rating:"4.9 (140+)", desc:"Hilsa fish in authentic mustard & green chilli gravy, slow-braised in clay handi", price:449, img:"https://image.qwenlm.ai/public_source/f247fb40-e315-4fc9-b5a4-ce33905e2cd3/171b0f915-22f9-46d0-a1b8-9cd26f86e99c.png", veg:false},
  {id:2, name:"Kosha Mangsho", tag:"👑 SIGNATURE", rating:"4.9 (180+)", desc:"Slow-braised rich dark mutton curry with aromatic roasted spices & mustard oil", price:399, img:"https://image.qwenlm.ai/public_source/f247fb40-e315-4fc9-b5a4-ce33905e2cd3/13b9e9a48-4a05-49aa-9d16-077215b47ae3.png", veg:false},
  {id:3, name:"Chingri Malai Curry", tag:"✨ CHEF'S CHOICE", rating:"4.8 (110+)", desc:"Jumbo prawns simmered in velvety coconut milk gravy with mild royal spices", price:479, img:"https://i.postimg.cc/SRbqjKg6/1784414323037-2-jpg.jpg", veg:false},
  {id:4, name:"Bhetki Paturi", tag:"🍃 BANANA LEAF", rating:"4.9 (130+)", desc:"Fresh Bhetki fillet marinated in mustard-poppy paste, wrapped & steamed in banana leaf", price:389, img:"https://i.postimg.cc/V631dPqB/Fish-Curry-Masala.jpg", veg:false},
  {id:5, name:"Kolkata Mutton Biryani", tag:"👑 ROYAL BIRYANI", rating:"5.0 (250+)", desc:"Fragrant Gobindobhog rice layered with melt-in-mouth mutton, spiced potato & egg", price:429, img:"https://i.postimg.cc/Y2YBbVf4/Takshila-X-DNY-Hospitality.jpg", veg:false},
  {id:6, name:"Rajbari Royal Thali", tag:"🍽️ ROYAL FEAST", rating:"5.0 (210+)", desc:"Complete feast with Gobindobhog Rice, Luchi, Fish, Kosha Mangsho & Mishti Doi", price:549, img:"https://image.qwenlm.ai/public_source/f247fb40-e315-4fc9-b5a4-ce33905e2cd3/1fb62d747-c690-4099-8e1d-91166a43dc86.png", veg:false},
  {id:7, name:"Basanti Pulao & Chholar Dal", tag:"🌾 FESTIVE SPECIAL", rating:"4.9 (160+)", desc:"Sweet golden rice with cashews & raisins paired with coconut Narkel Chholar Dal", price:279, img:"https://i.postimg.cc/4dcq27tk/How-To-Make-Bengali-Basanti-Pulao-At-Home.jpg", veg:true},
  {id:8, name:"Mishti Doi & Rosogolla Handi", tag:"🍮 AUTHENTIC SWEET", rating:"4.9 (195+)", desc:"Traditional sweet fermented yogurt in earthen clay pot with sponge Rosogollas", price:249, img:"https://image.qwenlm.ai/public_source/f247fb40-e315-4fc9-b5a4-ce33905e2cd3/1be8e945c-5a3d-4ab7-93b5-904a2615cc49.png", veg:true},
  {id:9, name:"Kolkata Bhetki Fish Fry", tag:"⚡ STARTER FAVOURITE", rating:"4.8 (145+)", desc:"Crispy crumbed Bhetki fillet served with Kolkata Kasundi mustard & pickled onions", price:299, img:"https://i.postimg.cc/ryS7S4M8/enjoy-weather.jpg", veg:false}
];

const categories = [
  {
    id: "fish",
    catGroup: "fish",
    name: "Maach-o-Chingri (Fish & Seafood)",
    badge: "🐟 RIVER & SEA",
    desc: "The soul of Bengal—hilsa, bhetki, prawn & katla delicacies cooked in mustard oil, poppy seed paste & clay handis.",
    price: "₹349 – ₹549",
    items: ["Shorshe Ilish", "Bhetki Paturi", "Chingri Malai Curry", "Katla Kalia", "Doi Maach", "Pabda Jhol"],
    veg: false,
    img: "https://i.postimg.cc/V631dPqB/Fish-Curry-Masala.jpg"
  },
  {
    id: "mutton",
    catGroup: "meat",
    name: "Mangsho (Mutton Delicacies)",
    badge: "👑 HERITAGE CURRIES",
    desc: "Slow-braised mutton curries cooked with whole spices, iron handis & generations of family recipes.",
    price: "₹379 – ₹499",
    items: ["Kosha Mangsho", "Mutton Rezala", "Goalondo Ghat Curry", "Mutton Dakbunglow"],
    veg: false,
    img: "https://i.postimg.cc/Y2YBbVf4/Takshila-X-DNY-Hospitality.jpg"
  },
  {
    id: "chicken",
    catGroup: "meat",
    name: "Murgi (Poultry Delights)",
    badge: "🍗 SPECIALTY CHICKEN",
    desc: "Rich chicken curries ranging from royal Kolkata Chaap to spicy village-style Jhal Murgi.",
    price: "₹279 – ₹399",
    items: ["Kolkata Chicken Chaap", "Chicken Kosha", "Jhal Murgi", "Chicken Dakbunglow"],
    veg: false,
    img: "https://i.postimg.cc/YCX5vwkx/download-(1).jpg"
  },
  {
    id: "veg",
    catGroup: "veg",
    name: "Niramish (Pure Vegetarian)",
    badge: "🥬 TRADITIONAL VEG",
    desc: "Authentic Bengali vegetarian classics—bitter-sweet Shukto, poppy seed Aloo Posto & handmade cottage-cheese gravy.",
    price: "₹179 – ₹299",
    items: ["Shukto", "Aloo Posto", "Chhanar Dalna", "Dhokar Dalna", "Mochar Ghonto", "Begun Bhaja"],
    veg: true,
    img: "https://i.postimg.cc/1XpBwDF8/Gathi-Kochur-Torkari-Bengali-Style-Arbi-Ki-Sabji-Pikturenama.jpg"
  },
  {
    id: "rice",
    catGroup: "rice",
    name: "Bhaat, Pulao & Biryani (Staples)",
    badge: "🍚 FRAGRANT RICE",
    desc: "Fragrant Gobindobhog rice, golden Basanti Pulao & iconic Kolkata Mutton Biryani with spiced potato.",
    price: "₹149 – ₹429",
    items: ["Kolkata Mutton Biryani", "Basanti Pulao", "Gobindobhog Ghee Bhaat", "Radhabhallavi & Alur Dom"],
    veg: false,
    img: "https://i.postimg.cc/4dcq27tk/How-To-Make-Bengali-Basanti-Pulao-At-Home.jpg"
  },
  {
    id: "snacks",
    catGroup: "veg",
    name: "Telebhaja-o-Chop (Starters)",
    badge: "🥟 CRISPY BITES",
    desc: "Crispy tea-time snacks, Bhetki fish fry, mocha chops & Kasundi mustard sauce for afternoon adda.",
    price: "₹129 – ₹299",
    items: ["Bhetki Fish Fry", "Mocha Chop", "Postor Bora", "Dimer Devil", "Luchi & Chholar Dal"],
    veg: false,
    img: "https://i.postimg.cc/ryS7S4M8/enjoy-weather.jpg"
  },
  {
    id: "sweets",
    catGroup: "sweet",
    name: "Mishti-o-Pesh (Heritage Sweets)",
    badge: "🍮 CLAY POT SWEETS",
    desc: "Handchurned Mishti Doi in earthen pots, soft sponge Rosogollas & Nolen Gur cottage cheese delights.",
    price: "₹199 – ₹399",
    items: ["Mishti Doi", "Sponge Rosogolla", "Nolen Gur Sandesh", "Chhanar Payesh", "Patishapta"],
    veg: true,
    sweet: true,
    img: "https://i.postimg.cc/6qLSwkY3/rasgulla.jpg"
  },
  {
    id: "thali",
    catGroup: "thali",
    name: "Rajbari Bhoj (Royal Thalis)",
    badge: "🍽️ COMPLETE MEAL",
    desc: "Complete royal banana leaf feast—pulao, luchis, dal, fries, non-veg gravies, chutney & mishti doi.",
    price: "₹499 – ₹799",
    items: ["Sunday Special Thali", "Rajbari Fish Thali", "Royal Mutton Thali", "Niramish Bhoj"],
    veg: false,
    img: "https://i.postimg.cc/1zPWHCHc/download.jpg"
  }
];

// Cart
let cart = [];

function renderBestsellers(){
  const row = document.getElementById('bestsellerRow');
  row.innerHTML = bestsellers.map(p=>`
    <div class="product-card">
      <div class="product-img-wrap">
        <img class="product-img" loading="lazy" src="${p.img}" alt="${p.name}">
        <div class="product-ribbon">${p.tag}</div>
        <div class="product-badge-wrap">
          <div class="${p.veg?'veg-badge':'nonveg-badge'}"></div>
        </div>
      </div>
      <div class="product-body">
        <div>
          <div class="product-rating">★ ${p.rating}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
        </div>
        <div class="product-footer">
          <div class="product-price">₹${p.price}</div>
          <button class="add-cart" onclick="addToCart(${p.id},'best')">
            <span>+ Add</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function scrollBestsellers(dir){
  const row = document.getElementById('bestsellerRow');
  if(row){
    row.scrollBy({ left: dir * 320, behavior: 'smooth' });
  }
}

function filterCat(filterKey, btnEl){
  if(btnEl){
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
  }
  renderCategories(filterKey);
}

function renderCategories(filter='all'){
  const grid = document.getElementById('catGrid');
  const filtered = categories.filter(c => {
    if(filter==='all') return true;
    if(filter==='fish') return c.catGroup==='fish';
    if(filter==='meat') return c.catGroup==='meat';
    if(filter==='veg') return c.veg;
    if(filter==='sweet') return c.catGroup==='sweet' || c.sweet;
    if(filter==='thali') return c.catGroup==='thali';
    return true;
  });

  grid.innerHTML = filtered.map(c => `
    <div class="cat-card reveal visible">
      <div>
        <div class="cat-img-wrapper">
          <img class="cat-icon-img" loading="lazy" src="${c.img}" alt="${c.name}">
          <div class="cat-badge-overlay">${c.badge}</div>
        </div>
        <div class="cat-header-row">
          <div class="cat-name">${c.name}</div>
          <div class="cat-price">${c.price}</div>
        </div>
        <div class="cat-desc">${c.desc}</div>
      </div>
      <div class="cat-items">
        ${c.items.map(i => `<span class="cat-item">✦ ${i}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function addToCart(id,type){
  const item = type==='best' ? bestsellers.find(p=>p.id===id) : null;
  if(!item) return;
  const existing = cart.find(c=>c.id===id);
  if(existing){existing.qty++}
  else{cart.push({...item,qty:1})}
  updateCart();
  openCart();
}

function updateCart(){
  document.getElementById('cartCount').textContent = cart.reduce((s,i)=>s+i.qty,0);
  const itemsEl = document.getElementById('cartItems');
  if(cart.length===0){
    itemsEl.innerHTML = '<div class="cart-empty">Your basket is empty. Add some delicious Bengali dishes! </div>';
  } else {
    itemsEl.innerHTML = cart.map(i=>`
      <div class="cart-item">
        <img class="cart-item-img" src="${i.img}" alt="${i.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${i.name}</div>
          <div class="cart-item-price">₹${i.price}</div>
          <div class="cart-qty">
            <button class="qty-btn" onclick="changeQty(${i.id},-1)">−</button>
            <span>${i.qty}</span>
            <button class="qty-btn" onclick="changeQty(${i.id},1)">+</button>
          </div>
        </div>
      </div>
    `).join('');
  }
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  document.getElementById('cartTotal').textContent = '₹'+total;
}

function changeQty(id,delta){
  const item = cart.find(c=>c.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart = cart.filter(c=>c.id!==id);
  updateCart();
}

function openCart(){
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('overlay').classList.add('show');
}
function closeCart(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}
document.getElementById('cartBtn').addEventListener('click',openCart);
document.getElementById('cartClose').addEventListener('click',closeCart);
document.getElementById('overlay').addEventListener('click',closeCart);

function checkout(){
  if(cart.length===0){alert('Add some dishes first! ');return}
  alert('Thank you! Your order has been placed. We\'ll deliver the warmth of Bengal soon! ');
  cart = [];updateCart();closeCart();
}

// Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filterKey = btn.dataset.filter || 'all';
    renderCategories(filterKey);
  });
});


// Menu toggle
document.getElementById('menuToggle').addEventListener('click',()=>{
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open'));
});

// Copy coupon
function copyCode(code, btn){
  navigator.clipboard.writeText(code).then(()=>{
    let toast = document.getElementById('cartToast');
    if(!toast){
      toast = document.createElement('div');
      toast.id = 'cartToast';
      toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:var(--vermillion);color:var(--cream);padding:0.8rem 1.4rem;border-radius:50px;box-shadow:0 8px 24px rgba(0,0,0,0.25);z-index:999;font-weight:600;font-size:0.9rem;transition:all 0.4s;opacity:0;transform:translateY(20px);pointer-events:none;border:1px solid var(--mustard);';
      document.body.appendChild(toast);
    }
    toast.textContent = `Coupon "${code}" copied to clipboard!`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(()=>{
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
    }, 2500);

    if(btn){
      const orig = btn.innerHTML;
      btn.innerHTML = '<span>Copied ✓</span>';
      btn.classList.add('copied');
      setTimeout(()=>{
        btn.innerHTML = orig;
        btn.classList.remove('copied');
      }, 2000);
    }
  }).catch(()=>{
    prompt('Copy this code:', code);
  });
}

// Form
function submitForm(e){
  e.preventDefault();
  alert('Thank you! We\'ll get back to you soon. ');
  e.target.reset();
}

// Scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Stats counter
const statsObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el = e.target;
      const target = parseFloat(el.dataset.target);
      const isDecimal = target%1!==0;
      let current = 0;
      const step = target/60;
      const timer = setInterval(()=>{
        current += step;
        if(current>=target){current=target;clearInterval(timer)}
        el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString() + (target>=1000?'+':'');
      },25);
      statsObserver.unobserve(el);
    }
  });
},{threshold:0.5});
document.querySelectorAll('.stat-num').forEach(el=>statsObserver.observe(el));

// Instant Loader Hide
const hideLoader = () => {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('hide');
};
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  hideLoader();
} else {
  document.addEventListener('DOMContentLoaded', hideLoader);
  window.addEventListener('load', hideLoader);
}

// Init
lucide.createIcons();
renderBestsellers();
renderCategories();
