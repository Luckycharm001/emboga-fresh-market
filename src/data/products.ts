export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
  description: string;
  unit: string;
  featured?: boolean;
  origin?: string;
  freshness?: number;
}

export const products: Product[] = [
  // Vegetables
  {
    id: 'veg-cabbage-1',
    name: 'Fresh Cabbage',
    category: 'Vegetables',
    subcategory: 'Cabbages',
    price: 50,
    image: '/lovable-uploads/51a24aa9-1f66-48f4-a152-7d8c9636d3de.png',
    description: 'Organic locally grown cabbage, perfect for salads and cooking.',
    unit: 'per piece',
    featured: true,
    origin: 'Limuru, Kenya',
    freshness: 5
  },
  {
    id: 'veg-lettuce-1',
    name: 'Green Lettuce',
    category: 'Vegetables',
    subcategory: 'Lettuce',
    price: 45,
    image: '/lovable-uploads/498671cc-e5bd-4608-b4ae-c1aa50242fbe.png',
    description: 'Crisp and fresh lettuce, ideal for sandwiches and salads.',
    unit: 'per bunch',
    origin: 'Naivasha, Kenya',
    freshness: 4
  },
  {
    id: 'veg-tomato-1',
    name: 'Ripe Tomatoes',
    category: 'Vegetables',
    subcategory: 'Tomatoes',
    price: 120,
    image: '/lovable-uploads/27f3a922-bd64-425d-b4c1-f71b72694947.png',
    description: 'Juicy and ripe tomatoes, perfect for salads and cooking.',
    unit: 'per kg',
    featured: true,
    origin: 'Nakuru, Kenya',
    freshness: 5
  },
  {
    id: 'veg-onion-1',
    name: 'Red Onions',
    category: 'Vegetables',
    subcategory: 'Onion',
    price: 80,
    image: '/lovable-uploads/8870b07f-d87e-4de7-85fb-47d4a814dea8.png',
    description: 'Flavorful red onions, essential for most dishes.',
    unit: 'per kg',
    featured: true,
    origin: 'Narok, Kenya',
    freshness: 4
  },
  {
    id: 'veg-kale-1',
    name: 'Fresh Kale',
    category: 'Vegetables',
    subcategory: 'Kales',
    price: 35,
    image: '/lovable-uploads/009b23d5-af3e-4fc5-96c5-61859e916a40.png',
    description: 'Nutritious kale, perfect for smoothies and stir-fries.',
    unit: 'per bunch',
    origin: 'Kikuyu, Kenya',
    freshness: 5
  },
  {
    id: 'veg-spinach-1',
    name: 'Spinach',
    category: 'Vegetables',
    subcategory: 'Spinach',
    price: 30,
    image: '/lovable-uploads/f80100d5-393b-4078-9196-ad9b5a2bd23f.png',
    description: 'Iron-rich spinach, great for salads and cooking.',
    unit: 'per bunch',
    origin: 'Thika, Kenya',
    freshness: 4
  },
  {
    id: 'veg-carrot-1',
    name: 'Fresh Carrots',
    category: 'Vegetables',
    subcategory: 'Carrot',
    price: 60,
    image: '/lovable-uploads/c56da87a-1cce-47ea-9a30-69b284858732.png',
    description: 'Sweet and crunchy carrots, great for snacking and cooking.',
    unit: 'per bunch',
    featured: true,
    origin: 'Nanyuki, Kenya',
    freshness: 5
  },
  
  // Fruits
  {
    id: 'fruit-apple-1',
    name: 'Red Apples',
    category: 'Fruits',
    subcategory: 'Apples',
    price: 35,
    image: '/lovable-uploads/35cc2b18-d2c9-484b-8da6-c53a9309fbf3.png',
    description: 'Sweet and crisp red apples, perfect for snacking.',
    unit: 'per piece',
    featured: true,
    origin: 'Imported',
    freshness: 4
  },
  {
    id: 'fruit-banana-1',
    name: 'Ripe Bananas',
    category: 'Fruits',
    subcategory: 'Bananas',
    price: 15,
    image: '/lovable-uploads/c4f4bb99-12de-4f14-9711-6b5910a3702e.png',
    description: 'Sweet and ripe bananas, ready to eat.',
    unit: 'per piece',
    origin: 'Kisii, Kenya',
    freshness: 5
  },
  {
    id: 'fruit-mango-1',
    name: 'Juicy Mangoes',
    category: 'Fruits',
    subcategory: 'Mangos',
    price: 50,
    image: '/lovable-uploads/b0083816-487e-48a5-943b-bcfed8d6c5f6.png',
    description: 'Sweet and juicy mangoes, perfect for desserts and smoothies.',
    unit: 'per piece',
    featured: true,
    origin: 'Kilifi, Kenya',
    freshness: 5
  },
  
  // Animal Products
  {
    id: 'animal-eggs-1',
    name: 'Farm Fresh Eggs',
    category: 'Animal Products',
    subcategory: 'Eggs',
    price: 360,
    image: '/lovable-uploads/877bdc8a-a9a2-4a98-bdee-9da22b976a61.png',
    description: 'Farm fresh eggs from free-range chickens.',
    unit: 'tray of 30',
    featured: true,
    origin: 'Kiambu, Kenya',
    freshness: 5
  },
  {
    id: 'animal-milk-1',
    name: 'Fresh Cow Milk',
    category: 'Animal Products',
    subcategory: 'Milk',
    price: 60,
    image: '/lovable-uploads/3f5633af-c48b-449b-8f80-f67b71cf32c7.png',
    description: 'Fresh cow milk from grass-fed cows.',
    unit: 'per liter',
    origin: 'Eldoret, Kenya',
    freshness: 4
  },
  {
    id: 'animal-chicken-1',
    name: 'Whole Chicken',
    category: 'Animal Products',
    subcategory: 'Chicken',
    price: 500,
    image: '/lovable-uploads/7934d23a-b561-4afe-bb3e-7ae39142a480.png',
    description: 'Free-range whole chicken, perfect for roasting.',
    unit: 'per kg',
    origin: 'Machakos, Kenya',
    freshness: 5
  },
  {
    id: 'animal-honey-1',
    name: 'Pure Honey',
    category: 'Animal Products',
    subcategory: 'Honey',
    price: 350,
    image: '/lovable-uploads/e7167b5b-a193-4770-a96a-27dd0fe53dea.png',
    description: 'Pure and natural honey, harvested locally.',
    unit: '500g jar',
    featured: true,
    origin: 'Mt. Kenya Region',
    freshness: 5
  },
  
  // Cereals
  {
    id: 'cereal-rice-1',
    name: 'White Rice',
    category: 'Cereals',
    subcategory: 'Rice',
    price: 150,
    image: '/lovable-uploads/f25f9b70-c54f-433f-a4c2-3f6af650b99e.png',
    description: 'Premium quality white rice, perfect for everyday meals.',
    unit: 'per kg',
    origin: 'Mwea, Kenya',
    freshness: 5
  },
  {
    id: 'cereal-maize-1',
    name: 'Maize',
    category: 'Cereals',
    subcategory: 'Maize',
    price: 120,
    image: '/lovable-uploads/b65bf5d6-01d4-4617-b90a-f462ffe23565.png',
    description: 'Freshly harvested maize, perfect for cooking.',
    unit: 'per kg',
    featured: true,
    origin: 'Trans Nzoia, Kenya',
    freshness: 4
  },
  
  // Organic Juices
  {
    id: 'juice-sugarcane-1',
    name: 'Sugarcane Juice',
    category: 'Organic Juices',
    subcategory: 'Sugarcane juice',
    price: 80,
    image: '/lovable-uploads/9ef8f357-f320-4a05-a26f-9a415940b96f.png',
    description: 'Refreshing sugarcane juice, packed with nutrients.',
    unit: 'per bottle',
    featured: true,
    origin: 'Kakamega, Kenya',
    freshness: 5
  },
  {
    id: 'juice-beetroot-1',
    name: 'Beetroot Juice',
    category: 'Organic Juices',
    subcategory: 'Beetroot juice',
    price: 100,
    image: '/lovable-uploads/93a9885b-a824-45ca-a969-41b167b9d099.png',
    description: 'Nutritious beetroot juice, great for health.',
    unit: 'per bottle',
    origin: 'Nairobi, Kenya',
    freshness: 4
  },
  {
    id: 'juice-jaba-1',
    name: 'Jaba Fruit Juice',
    category: 'Organic Juices',
    subcategory: 'Jaba juice',
    price: 120,
    image: '/lovable-uploads/8db64de2-8452-4585-b243-2163803721cf.png',
    description: 'Sweet and tangy jaba fruit juice, rich in vitamins.',
    unit: 'per bottle',
    origin: 'Kitale, Kenya',
    freshness: 5
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const categories = [
  { 
    id: 'vegetables', 
    name: 'Vegetables',
    image: '/lovable-uploads/51a24aa9-1f66-48f4-a152-7d8c9636d3de.png',
    subcategories: ['Cabbages', 'Lettuce', 'Tomatoes', 'Onion', 'Kales', 'Spinach', 'Carrot']
  },
  { 
    id: 'fruits', 
    name: 'Fruits',
    image: '/lovable-uploads/35cc2b18-d2c9-484b-8da6-c53a9309fbf3.png',
    subcategories: ['Apples', 'Bananas', 'Mangos']
  },
  { 
    id: 'animal-products', 
    name: 'Animal Products',
    image: '/lovable-uploads/877bdc8a-a9a2-4a98-bdee-9da22b976a61.png',
    subcategories: ['Eggs', 'Milk', 'Chicken', 'Honey']
  },
  { 
    id: 'cereals', 
    name: 'Cereals',
    image: '/lovable-uploads/f25f9b70-c54f-433f-a4c2-3f6af650b99e.png',
    subcategories: ['Rice', 'Maize']
  },
  { 
    id: 'organic-juices', 
    name: 'Organic Juices',
    image: '/lovable-uploads/93a9885b-a824-45ca-a969-41b167b9d099.png',
    subcategories: ['Sugarcane juice', 'Beetroot juice', 'Jaba juice']
  }
];
