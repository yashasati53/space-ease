export type Category = 
  | 'Storage organization'
  | 'Bath Furnishings'
  | 'Cutlery'
  | 'Home decor & Accessories'
  | 'Fragrance & wellness';

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: Category;
  ecoScore: number;
  description: string;
  stock: number;
}

export const products: Product[] = [
  // Storage organization
  {
    id: "st-1",
    name: "Under-bed Eco Box",
    price: 2200,
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    category: "Storage organization",
    ecoScore: 10,
    description: "Maximize your bedroom space with this low-profile, eco-friendly bamboo storage box.",
    stock: 12
  },
  {
    id: "st-2",
    name: "Tetris Modular Bookshelf",
    price: 8500,
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    category: "Storage organization",
    ecoScore: 8,
    description: "Build it your way. A modular shelving unit that adapts to any tight corner.",
    stock: 5
  },
  {
    id: "st-3",
    name: "Hanging Closet Organizer",
    price: 1500,
    imageUrl: "https://images.unsplash.com/photo-1582736183427-4a17cdedb16a?auto=format&fit=crop&w=800&q=80",
    category: "Storage organization",
    ecoScore: 9,
    description: "6-tier hanging shelves made from recycled ocean plastics.",
    stock: 45
  },
  {
    id: "st-4",
    name: "Magnetic Key & Mail Rack",
    price: 950,
    imageUrl: "https://images.unsplash.com/photo-1601275225755-f6a6c1730cb1?auto=format&fit=crop&w=800&q=80",
    category: "Storage organization",
    ecoScore: 7,
    description: "Sleek entryway organizer to never lose your keys again.",
    stock: 30
  },

  // Bath Furnishings
  {
    id: "bf-1",
    name: "Bamboo Bath Caddy",
    price: 3400,
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    category: "Bath Furnishings",
    ecoScore: 9,
    description: "Expandable bamboo tray for the ultimate relaxing bath experience.",
    stock: 18
  },
  {
    id: "bf-2",
    name: "Organic Cotton Towel Set",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=800&q=80",
    category: "Bath Furnishings",
    ecoScore: 10,
    description: "Plush, ultra-absorbent towels woven from 100% organic cotton.",
    stock: 22
  },
  {
    id: "bf-3",
    name: "Teak Wood Shower Mat",
    price: 5200,
    imageUrl: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    category: "Bath Furnishings",
    ecoScore: 8,
    description: "A spa-like, water-resistant teak mat that elevates your bathroom aesthetic.",
    stock: 8
  },
  {
    id: "bf-4",
    name: "Ceramic Soap Dispenser",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=800&q=80",
    category: "Bath Furnishings",
    ecoScore: 9,
    description: "Refillable matte ceramic dispenser to reduce single-use plastic.",
    stock: 50
  },

  // Cutlery
  {
    id: "ct-1",
    name: "Minimalist Matte Black Set",
    price: 3200,
    imageUrl: "https://images.unsplash.com/photo-1593005856484-90a8a6498bd9?auto=format&fit=crop&w=800&q=80",
    category: "Cutlery",
    ecoScore: 8,
    description: "24-piece stainless steel set with a scratch-resistant matte black finish.",
    stock: 14
  },
  {
    id: "ct-2",
    name: "Bamboo Handle Cutlery",
    price: 2800,
    imageUrl: "https://images.unsplash.com/photo-1600857319985-79a81da144fb?auto=format&fit=crop&w=800&q=80",
    category: "Cutlery",
    ecoScore: 10,
    description: "Eco-friendly dining set featuring sustainably sourced bamboo handles.",
    stock: 20
  },
  {
    id: "ct-3",
    name: "Travel Cutlery Pouch",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1576087532393-df818e6ce607?auto=format&fit=crop&w=800&q=80",
    category: "Cutlery",
    ecoScore: 10,
    description: "Reusable wooden cutlery set with a canvas travel wrap.",
    stock: 100
  },
  {
    id: "ct-4",
    name: "Gold Accent Serving Spoons",
    price: 1800,
    imageUrl: "https://images.unsplash.com/photo-1565151443690-0f2c41938561?auto=format&fit=crop&w=800&q=80",
    category: "Cutlery",
    ecoScore: 7,
    description: "Elegant serving spoons designed for modern dining tables.",
    stock: 12
  },

  // Home decor & Accessories
  {
    id: "hd-1",
    name: "Terracotta Vase Trio",
    price: 2400,
    imageUrl: "https://images.unsplash.com/photo-1612152505322-b69c7da797cb?auto=format&fit=crop&w=800&q=80",
    category: "Home decor & Accessories",
    ecoScore: 9,
    description: "Handcrafted earthen vases by artisans in Rajasthan.",
    stock: 7
  },
  {
    id: "hd-2",
    name: "Macrame Wall Hanging",
    price: 1600,
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80",
    category: "Home decor & Accessories",
    ecoScore: 10,
    description: "Add a bohemian touch with this handmade cotton macrame piece.",
    stock: 15
  },
  {
    id: "hd-3",
    name: "Minimalist Wall Clock",
    price: 3100,
    imageUrl: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
    category: "Home decor & Accessories",
    ecoScore: 7,
    description: "Silent sweep wooden wall clock with a sleek, frameless design.",
    stock: 9
  },
  {
    id: "hd-4",
    name: "Recycled Glass Centerpiece",
    price: 2900,
    imageUrl: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80",
    category: "Home decor & Accessories",
    ecoScore: 10,
    description: "A stunning table centerpiece blown from 100% recycled glass.",
    stock: 6
  },

  // Fragrance & wellness
  {
    id: "fw-1",
    name: "Sandalwood Soy Candle",
    price: 1100,
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    category: "Fragrance & wellness",
    ecoScore: 9,
    description: "Hand-poured soy wax candle infused with pure Mysore sandalwood.",
    stock: 40
  },
  {
    id: "fw-2",
    name: "Ceramic Essential Oil Diffuser",
    price: 3500,
    imageUrl: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80",
    category: "Fragrance & wellness",
    ecoScore: 8,
    description: "Ultrasonic diffuser with a matte ceramic cover, acts as decor and wellness tool.",
    stock: 11
  },
  {
    id: "fw-3",
    name: "Himalayan Salt Lamp",
    price: 1800,
    imageUrl: "https://images.unsplash.com/photo-1526364005436-b631d8e1c667?auto=format&fit=crop&w=800&q=80",
    category: "Fragrance & wellness",
    ecoScore: 9,
    description: "Natural salt crystal lamp that emits a warm, ambient glow.",
    stock: 25
  },
  {
    id: "fw-4",
    name: "Organic Incense Bundle",
    price: 600,
    imageUrl: "https://images.unsplash.com/photo-1608670577054-946e382d5e23?auto=format&fit=crop&w=800&q=80",
    category: "Fragrance & wellness",
    ecoScore: 10,
    description: "Set of 5 organic incense varieties, chemical-free and ethically sourced.",
    stock: 80
  }
];

export const getProductsByCategory = (category: Category) => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};
