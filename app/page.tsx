"use client"
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowDown,ArrowRight,ShoppingCart, Star,Trash2} from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

interface PackItem {
  id: number;
  image: string;
  title: string;
  type: string;
  price: number;
  moi: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function Home() {
    const [cartItems, setCartItems] = useState<PackItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (item: PackItem) => {
        setCartItems([...cartItems, item]);
        // Le dialog ne s'ouvre plus automatiquement
    };

    const removeFromCart = (index: number) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total: number, item: PackItem) => {
            return total + item.price;
        }, 0);
    };

    const sendToWhatsApp = () => {
        const message = `hello , new order details :\n\n` +
            cartItems.map((item, index) => 
                `type : ${item.title}\n` +
                `price : ${item.price}\n €`
            ).join('\n');
        
        const whatsappUrl = `https://wa.me/33623126517?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        setIsCartOpen(false);
    };

const pack: PackItem[] = [
  {
    id: 1,
    image: '🚀',
    title: 'STARTER',
    type: 'PACK',
    price: 350,
    moi: '/mo',
    description: 'Perfect for testing',
    features: ['Perfect for Testing', 'Cancel Anytime'],
    popular: false
  },
  {
    id: 2,
    image: '🚀',
    title: 'SCALING',
    type: 'PLAN',
    price: 500,
    moi: '/mo',
    description: 'Built to scale',
    features: ['Built to Scale', 'Priority Delivery', 'Cancel Anytime'],
    popular: true
  },
  {
    id: 3,
    image: '👑',
    title: 'DOMINATOR',
    type: 'TIER',
    price: 1000,
    moi: '/mo',
    description: 'Aggressive scaling',
    features: ['Aggressive Scaling', 'VIP Priority Delivery', 'Cancel Anytime'],
    popular: false
  }
];

    const Chose = [
      {
        titre :"+60% Engagement",
        badge : "Performance",
        emoji : "🔥",
        descri : "We build psychological triggers into every design to increase CTR, reduce CPC, and maximize ROI." ,      
      },
      {
        titre : "100% Compliant",
        badge : "Safe Ads",
        emoji : "🛡️",
        descri : "Fully aligned with Meta & TikTok policies to avoid rejections and bans." ,
      },
        {      
        titre : "Full Flexibility",
        badge : "No Lock-in",
        emoji : "🔓",
        descri : " Upgrade, downgrade, or cancel anytime. No contracts, no friction." ,
      },
      
      {
        titre : "Lightning Fast",
        badge : "Speed",
        emoji : "⚡",
        descri : "Get your ads live in under 24 hours with our streamlined approval process." ,
      },
      
    ]


  return (
    <div className="min-h-screen w-full bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 border border-border  ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-foreground text-balance">
              Boost Your Online Visibility!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Effective Marketing Solutions for Your Business
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-fit">
              <Button 
                size="lg"
                className="rounded-lg font-semibold hover:shadow-lg shadow-sm hover:scale-105"
              >
               <a href="#produit" className="flex justify-center items-center text-lg"> Get Started <ArrowDown className="w-4 h-4 ml-2" /></a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end relative h-96">
            {/* Products images */}
            <Image
              src="/bm.webp"
              alt="lantiban google"
              className="absolute top-0 right-0 w-48 md:w-64 lg:w-80 -mt-10 md:-mt-20 transform rotate-6 hover:scale-105 transition-all duration-300 animate-floatY"
              width={300}
              height={300}
            />
             <Image
              src="/google.webp"
              alt="Lantiban fb"
              className="absolute bottom-0 left-0 w-32 md:w-48 lg:w-60 -mb-10 md:-mb-20 transform -rotate-6 hover:scale-105 transition-all duration-300 animate-floatY"
              width={300}
              height={300}
            /> 
           
          </div>
        </div>
      </section>

    

      {/* Offers Section */}
     <section className="py-24 md:py-32 px-4 md:px-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Banner Image */}
        <div className="w-full mb-10">
          <Image
            src="/banner.jpg"
            alt="Ad Image Creation Banner"
            className="w-full h-64 md:h-96 object-fit rounded-2xl shadow-md"
            width={1200}
            height={600}
            loading="eager"
            priority
          />
        </div>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground text-balance">
            Ad Image Creation
          </h2>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the creative firepower you need. Pause or cancel whenever you want. No contracts, no headaches—just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 " id="produit">
          {pack.map((item, index) => (
            <div key={index} className="relative group h-full">
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-linear-to-r from-amber-400 to-amber-500 text-slate-950 px-4 py-1.5 font-bold text-sm">
                    MOST POPULAR 🔥
                  </Badge>
                </div>
              )}

              {/* Card Container */}
              <div
                className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl ${
                  item.popular
                    ? 'border-2 border-amber-400 bg-linear-to-br from-blue-950 to-slate-900 shadow-lg shadow-amber-400/20'
                    : 'border-2 border-blue-500/50 bg-linear-to-br from-blue-950/80 to-slate-900/80 hover:border-blue-400'
                }`}
              >
                {/* Icon with rotation */}
                <div className="absolute -right-6 -top-6 text-7xl opacity-30 transform group-hover:rotate-12 transition-transform duration-500">
                  {item.image}
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Title Section */}
                  <div className="text-center mb-8">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                      THE
                    </p>
                    <h2 className="text-4xl font-bold text-amber-400 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-lg font-semibold text-white">
                      {item.type}
                    </p>
                  </div>

                  {/* Price Section */}
                  <div className="mb-8 text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-slate-300">€</span>
                      <span className="text-5xl font-bold text-amber-400">
                        {item.price}
                      </span>
                      <span className="text-slate-400 text-lg">{item.moi}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-linear-to-r from-transparent via-blue-400/30 to-transparent mb-6" />

                  {/* Features */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-3">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                          <span className="text-slate-200 font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <Button
                    onClick={() => addToCart(item)}
                    className={`w-full py-6 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      item.popular
                        ? 'bg-linear-to-r from-amber-400 to-amber-500 text-slate-950 hover:shadow-lg hover:shadow-amber-400/50'
                        : 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400/30'
                    }`}
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </Button>
                </div>

                {/* Glow effect for popular */}
                {item.popular && (
                  <div className="absolute inset-0 bg-linear-to-br from-amber-400/10 to-transparent pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </div>
            </div>
          ))}
         
     

          
         

        </div>

        {/* Marketing Content */}
        <div className="mb-20 mt-16 border-t border-border pt-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground text-balance">
            Dominate Your Market with High-Converting Ad Creatives
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop wasting ad spend on visuals that get ignored—or worse, get your accounts banned. At Lantiban, we design premium, scroll-stopping static ads engineered to scale your business and crush your CPA.
          </p>
        </div>

        {/* Why Choose Section */}
        <div className="">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <Badge variant="outline" className="text-sm px-4 py-1 bg-yellow-200 text-yellow-800">
          Why Us ? 
        </Badge>

        <h3 className="text-4xl md:text-5xl font-bold text-balance">
          Why Choose Lantiban?
        </h3>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Not just design. Performance-driven creatives engineered to scale your campaigns.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        
      {Chose.map((i, index) => (
        <Card key={index} className="space-y-2 shadow-md border border-dashed">
          <CardHeader>
            <CardTitle className="text-center text-4xl">{i.emoji}</CardTitle>
           
          </CardHeader>
          <CardContent className="h-20 space-y-2">
             <div className="flex justify-between items-center">
              <h1 className="font-bold text-md">{i.titre}</h1> <Badge className="bg-green-400 text-white"> {i.badge}</Badge>
             </div>
           <CardDescription>
            {i.descri}
           </CardDescription>
          </CardContent>
          <CardFooter className="justify-center">
            <Button className="hover:scale-105 shadow-md hover:shadow-md"><a href="#contact">Learn more</a></Button>
          </CardFooter>
        </Card>
       
      ))}
      

      </div>
    </div>

      </div>
    </section>

    {/* Final CTA Section */}
    <section className="py-24 md:py-32 px-4 md:px-8 bg-primary/5 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <div className="bg-linear-to-br from-primary to-primary/80 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Stop Guessing. Start Scaling.
          </h3>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Your product deserves to be seen. Let our expert designers fuel your ad accounts with visuals that turn scrollers into buyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-lg font-semibold">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-lg font-semibold border-primary-foreground/20 hover:bg-primary-foreground/10">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
    <div className="w-full px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <Image
          src="/second.jpg"
          alt="Portfolio showcase"
          className="w-full h-64 md:h-96 object-fit rounded-2xl shadow-lg"
          width={1200}
          height={600}
        />
      </div>
    </div>

      {/* WhatsApp CTA */}
      <section className="py-16 px-4 md:px-8 bg-green-200" id="contact">
        <div className="max-w-3xl mx-auto">
          <div className="bg-green-400 border-none rounded-2xl p-8 md:p-12 border border-border shadow-sm">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6  shadow-lg">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-green-50">Contact us via WhatsApp!</h2>
              <p className="text-lg text-muted mb-8">Chat with our team to find the perfect solution</p>
              <a
                href="https://wa.me/33623126517"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent text-accent-foreground font-semibold px-8 py-3  rounded-lg hover:opacity-90 transition duration-300 shadow-lg hover:scale-105 hover:shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Start Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Cart */}
      {cartItems.length > 0 && (
          <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-green-500 text-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <ShoppingCart size={20} />
          {cartItems.length > 0 && (
            <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center 
              bg-destructive text-destructive-foreground animate-pulse font-semibold text-xs">
              {cartItems.length}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col border border-border">
        <DialogHeader className="pb-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-accent" />
              </div>
              <DialogTitle className="text-2xl font-bold text-foreground">Shopping Cart</DialogTitle>
            </div>
            {cartItems.length > 0 && (
              <Badge className="bg-accent text-accent-foreground">
                {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
              </Badge>
            )}
          </div>
        </DialogHeader>

        <Separator className="my-2" />

        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-4">
              <div className="p-4 bg-muted rounded-full mb-4">
                <ShoppingCart className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="text-lg font-semibold mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-foreground text-center">
                Add items to your cart to see them here
              </p>
            </div>
          ) : (
            <div className="space-y-3 px-6">
              {cartItems.map((item, index) => (
                <Card key={index} className="p-4 border border-border hover:shadow-sm transition-all duration-200 group bg-card">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-14 h-14 rounded-lg bg-muted/50 flex items-center justify-center">
                      <div className="w-6 h-6 rounded bg-accent/20"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground truncate">{item.title}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-bold text-lg text-foreground">€{item.price}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(index)}
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <>
            <Separator className="my-4" />
            <div className="px-6 pb-6 space-y-4">
              <div className="space-y-2 bg-muted/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Subtotal</span>
                  <span className="text-sm font-semibold text-foreground">€{getTotalPrice()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Shipping</span>
                  <Badge className="text-xs bg-accent/10 text-accent">Free</Badge>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between pt-2">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-3xl font-bold text-accent">€{getTotalPrice()}</span>
              </div>

              <div className="space-y-2 pt-2">
                <Button className="w-full bg-accent text-accent-foreground hover:opacity-90 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2" size="lg" onClick={sendToWhatsApp}>
                  <ShoppingCart className="w-5 h-5" />
                  Send Order via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-lg font-semibold"
                  size="lg"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
      )}

      {/* Footer */}
      
    </div>
  );
}
