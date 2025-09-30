import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="py-20 pop-dots bg-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 animate-bounce-slow">
            <span className="text-6xl">📬</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            Join the <span className="bg-secondary text-white px-3 py-1 comic-border-sm inline-block transform rotate-[-2deg]">COOL CLUB!</span>
          </h2>
          
          <p className="text-xl font-bold mb-8">
            Get exclusive deals & groovy updates straight to your inbox!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              className="comic-border-sm bg-white font-bold text-lg h-14"
            />
            <Button 
              size="lg"
              className="comic-border-sm font-black text-lg h-14 px-8 hover-jump bg-secondary hover:bg-secondary/90"
            >
              <Mail className="mr-2" />
              SIGN UP!
            </Button>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <div className="w-12 h-12 bg-accent rounded-full comic-border animate-wiggle" />
            <div className="w-12 h-12 bg-primary rounded-full comic-border animate-bounce-slow" />
            <div className="w-12 h-12 bg-secondary rounded-full comic-border animate-pulse-scale" />
          </div>
        </div>
      </div>
    </section>
  );
};