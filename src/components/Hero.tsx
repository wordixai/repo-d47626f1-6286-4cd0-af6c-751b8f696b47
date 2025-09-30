import { Button } from '@/components/ui/button';
import { Sparkles, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 pop-dots">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 speech-bubble animate-bounce-slow">
            <span className="text-sm font-bold">HOT! NEW ARRIVAL</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="inline-block transform -rotate-2 bg-primary text-white px-4 py-2 comic-border-sm">
              RETRO
            </span>
            <br />
            <span className="inline-block transform rotate-2 bg-secondary text-white px-4 py-2 mt-4 comic-border-sm">
              VIBES!
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl font-bold mb-8 max-w-2xl mx-auto">
            Discover the coolest vintage fashion that'll make you stand out! 
            <span className="inline-block ml-2 animate-pulse-scale">✨</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="comic-border-sm text-lg font-black px-8 py-6 hover-jump bg-primary hover:bg-primary/90"
            >
              <Zap className="mr-2" />
              SHOP NOW!
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="comic-border-sm text-lg font-black px-8 py-6 hover-jump bg-white"
            >
              <Sparkles className="mr-2" />
              NEW DROPS
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-accent rounded-full comic-border animate-bounce-slow opacity-50" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-secondary rounded-full comic-border animate-wiggle opacity-50" />
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-primary rounded-full comic-border animate-pulse-scale opacity-50" />
    </section>
  );
};