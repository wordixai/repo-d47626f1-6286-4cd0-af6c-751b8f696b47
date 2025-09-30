import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 pop-dots-large bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-black text-2xl mb-4 uppercase">Pop Shop</h3>
            <p className="font-bold">
              The grooviest vintage fashion store in the universe! ✨
            </p>
          </div>

          <div>
            <h4 className="font-black text-lg mb-4 uppercase">SHOP</h4>
            <ul className="space-y-2 font-bold">
              <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-4 uppercase">HELP</h4>
            <ul className="space-y-2 font-bold">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-4 uppercase">FOLLOW US!</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary rounded-full comic-border-sm flex items-center justify-center hover-jump">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full comic-border-sm flex items-center justify-center hover-jump">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full comic-border-sm flex items-center justify-center hover-jump">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-white pt-8 text-center">
          <p className="font-black text-lg">
            © 2024 POP SHOP - ALL RIGHTS RESERVED! 
            <span className="inline-block ml-2 animate-wiggle">⚡</span>
          </p>
        </div>
      </div>
    </footer>
  );
};