// Product data for different categories

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
  featured?: boolean;
  salePrice?: number;
  isNew?: boolean;
  rating?: number;
  reviewCount?: number;
  sizes?: string[];
}

export const bandhaniSareesProducts: Product[] = [
  {
    _id: 'bandhani-1',
    name: "Traditional Rajasthani Bandhani Saree",
    description: "Authentic tie-dye bandhani saree with intricate patterns in vibrant red and yellow colors. Handcrafted by skilled artisans from Rajasthan.",
    price: 4999,
    images: ["/Images/bandhani-saree-1.svg"],
    category: "sarees",
    stock: 12,
    featured: true,
    rating: 4.8,
    reviewCount: 24
  },
  {
    _id: 'bandhani-2',
    name: "Gujarati Bandhani Silk Saree",
    description: "Premium silk saree with traditional Gujarati bandhani work. Features beautiful peacock motifs and geometric patterns.",
    price: 7999,
    images: ["/Images/bandhani-saree-2.svg"],
    category: "sarees",
    stock: 8,
    featured: true,
    rating: 4.9,
    reviewCount: 18
  },
  {
    _id: 'bandhani-3',
    name: "Modern Bandhani Cotton Saree",
    description: "Contemporary design meets traditional bandhani technique. Comfortable cotton fabric perfect for daily wear.",
    price: 2999,
    images: ["/Images/bandhani-saree-3.svg"],
    category: "sarees",
    stock: 15,
    isNew: true,
    rating: 4.6,
    reviewCount: 32
  },
  {
    _id: 'bandhani-4',
    name: "Bridal Bandhani Saree",
    description: "Luxurious bridal bandhani saree with heavy work and golden threads. Perfect for wedding ceremonies.",
    price: 12999,
    images: ["/Images/bandhani-saree-4.svg"],
    category: "sarees",
    stock: 5,
    featured: true,
    rating: 5.0,
    reviewCount: 12
  },
  {
    _id: 'bandhani-5',
    name: "Vintage Bandhani Saree",
    description: "Classic vintage-style bandhani saree with traditional motifs. Timeless elegance for special occasions.",
    price: 5999,
    images: ["/Images/bandhani-saree-5.svg"],
    category: "sarees",
    stock: 10,
    rating: 4.7,
    reviewCount: 28
  },
  {
    _id: 'bandhani-6',
    name: "Festival Bandhani Saree",
    description: "Bright and colorful bandhani saree perfect for festivals and celebrations. Features multiple color combinations.",
    price: 3999,
    images: ["/Images/bandhani-saree-6.svg"],
    category: "sarees",
    stock: 18,
    rating: 4.5,
    reviewCount: 41
  }
];

export const cottonSuitsProducts: Product[] = [
  {
    _id: 'cotton-suit-1',
    name: "Printed Cotton Suit Set",
    description: "Beautiful printed cotton suit with matching dupatta. Comfortable and stylish for everyday wear.",
    price: 1999,
    images: ["/Images/cotton-suit-1.svg"],
    category: "suits",
    stock: 20,
    featured: true,
    rating: 4.4,
    reviewCount: 35,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    _id: 'cotton-suit-2',
    name: "Embroidered Cotton Suit",
    description: "Elegant embroidered cotton suit with intricate threadwork. Perfect for office and casual occasions.",
    price: 2999,
    images: ["/Images/cotton-suit-2.svg"],
    category: "suits",
    stock: 15,
    featured: true,
    rating: 4.6,
    reviewCount: 28,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    _id: 'cotton-suit-3',
    name: "Block Print Cotton Suit",
    description: "Traditional block print cotton suit with natural dyes. Eco-friendly and comfortable.",
    price: 2499,
    images: ["/Images/cotton-suit-3.svg"],
    category: "suits",
    stock: 12,
    isNew: true,
    rating: 4.7,
    reviewCount: 22,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    _id: 'cotton-suit-4',
    name: "Designer Cotton Suit",
    description: "Contemporary designer cotton suit with modern cuts and styling. Perfect for young professionals.",
    price: 3999,
    images: ["/Images/cotton-suit-4.svg"],
    category: "suits",
    stock: 8,
    featured: true,
    rating: 4.8,
    reviewCount: 19,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    _id: 'cotton-suit-5',
    name: "Casual Cotton Suit",
    description: "Comfortable casual cotton suit for daily wear. Simple yet elegant design with soft fabric.",
    price: 1799,
    images: ["/Images/cotton-suit-5.svg"],
    category: "suits",
    stock: 25,
    rating: 4.3,
    reviewCount: 45,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    _id: 'cotton-suit-6',
    name: "Festive Cotton Suit",
    description: "Special festive cotton suit with golden accents and beautiful embellishments.",
    price: 4999,
    images: ["/Images/cotton-suit-6.svg"],
    category: "suits",
    stock: 6,
    rating: 4.9,
    reviewCount: 15,
    sizes: ["S", "M", "L", "XL"]
  }
];

// Combined products for general use
export const allProducts: Product[] = [
  ...bandhaniSareesProducts,
  ...cottonSuitsProducts
];