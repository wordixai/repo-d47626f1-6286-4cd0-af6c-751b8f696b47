import { ProductCard } from './ProductCard';

const products = [
  {
    name: 'Retro Tee',
    price: '$29',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    tag: 'HOT!'
  },
  {
    name: 'Pop Art Jacket',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    tag: 'NEW'
  },
  {
    name: 'Vintage Sneakers',
    price: '$65',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
  },
  {
    name: 'Cool Shades',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    tag: 'SALE'
  },
  {
    name: 'Funky Hat',
    price: '$35',
    image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400&h=400&fit=crop',
  },
  {
    name: 'Groovy Bag',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
    tag: 'HOT!'
  },
];

export const ProductGrid = () => {
  return (
    <section className="py-16 pop-dots-large bg-white/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <h2 className="text-5xl md:text-6xl font-black transform -rotate-1 bg-secondary text-white px-6 py-3 comic-border">
              TRENDING NOW!
            </h2>
          </div>
          <p className="text-xl font-bold mt-4">
            Get 'em before they're gone! <span className="animate-bounce-slow inline-block">⚡</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};