import { ShoppingBag, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 pop-dots-large bg-muted/95 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 comic-border-sm bg-primary rounded-full flex items-center justify-center animate-wiggle">
              <span className="text-2xl">⚡</span>
            </div>
            <h1 className="text-3xl font-black tracking-wider transform -skew-x-6">
              POP SHOP
            </h1>
          </div>
          
          <nav className="hidden md:flex gap-6 font-bold">
            <a href="#" className="hover:text-primary transition-colors hover-jump">NEW</a>
            <a href="#" className="hover:text-secondary transition-colors hover-jump">VINTAGE</a>
            <a href="#" className="hover:text-accent transition-colors hover-jump">SALE</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover-jump">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-jump">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover-jump">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-xs rounded-full flex items-center justify-center border-2 border-black">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};