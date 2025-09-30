import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  tag?: string;
}

export const ProductCard = ({ name, price, image, tag }: ProductCardProps) => {
  return (
    <div className="group relative">
      <div className="comic-border bg-white p-4 hover:scale-105 transition-transform duration-300">
        <div className="relative overflow-hidden mb-4 aspect-square bg-muted pop-dots-large">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
          {tag && (
            <Badge className="absolute top-2 left-2 comic-border-sm bg-accent font-black rotate-[-5deg]">
              {tag}
            </Badge>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 bg-white/90 comic-border-sm opacity-0 group-hover:opacity-100 transition-opacity hover-jump"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-3">
          <h3 className="font-black text-lg uppercase">{name}</h3>
          
          <div className="flex items-center justify-between">
            <div className="inline-block transform -rotate-2">
              <span className="text-2xl font-black bg-primary text-white px-3 py-1 comic-border-sm">
                {price}
              </span>
            </div>
            
            <Button 
              className="comic-border-sm font-black hover-jump bg-secondary hover:bg-secondary/90"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              ADD
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute -top-3 -right-3 w-16 h-16 bg-muted rounded-full comic-border flex items-center justify-center font-black text-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-wiggle">
        WOW!
      </div>
    </div>
  );
};