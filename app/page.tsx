"use client"
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { Card , CardContent, CardFooter} from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowDown,ArrowRight,ShoppingCart, Star, X ,Trash2} from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

interface PackItem {
    title: string;
    image: string;
    price: string;
    badge: string;
    color: string;
    star: number;
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
            const price = item.price.replace(/[^\d]/g, '');
            return total + parseInt(price, 10);
        }, 0);
    };

    const pack = [
        {
             title: "Starter",
             image: "image",
             price: "350",
             badge: "Popular",
             color: 'primary',
             star: 3
         },
        
         {
             title: "Premium",
             image: "image",
             price: "1000/mois",
             badge: "Best Value",
             color: 'green-500',
             star: 5
         },
        {
            title: "Pro",
            image: "image",
            price: "500/mois",
            badge: "Professional",
            color: 'primary',
            star: 4
        },
    ]



  return (
    <main className="min-h-screen w-full h-full bg-white">
      {/* Hero Section */}
      <section className="relative  py-20 ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-sky-500">
              Boost Your Online Visibility!
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Effective Marketing Solutions for Your Business
            </p>
            <Button 
            size="lg"
            className="rounded-lg"
            >Get Started <ArrowDown/> </Button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            {/* Products images */}
            <Image
              src="/bm.webp"
              alt="Caméra de surveillance"
              className="absolute top-0 right-0 w-48 md:w-64 lg:w-80 -mt-10 md:-mt-20 transform rotate-6"
              width={300}
              height={300}
            />
             <Image
              src="/google.webp"
              alt="Montre connectée"
              className="absolute bottom-0 left-0 w-32 md:w-48 lg:w-60 -mb-10 md:-mb-20 transform -rotate-6"
              width={300}
              height={300}
            /> 
           
          </div>
        </div>
      </section>

    

      {/* Offers Section */}
     <section className="mt-3 py-20 px-4 md:px-8 bg-linear-to-b via-sky-50 to-green-200">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Ad Image Creation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

         
        {pack.map((i, index) => ( 
            <Card
                key={index}
                className='group rounded-lg overflow-hidden border-border shadow-lg 
                hover:border-sky-500 hover:shadow-xl transition-all duration-300 bg-card/70 hover:scale-105 backdrop-blur-sm hover:bg-card'
              >
                {/* Image Container */}
                <div className='relative w-full h-48 bg-muted overflow-hidden'>
                  <img
                    // src={produit.image || "/placeholder.svg"}
                    src={i.image}
                    
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute top-3 right-3'>
                    <Badge
                    className={`rounded-full bg-${i.color}`}
                    >{i.badge}</Badge>
                  </div>
                </div>

                {/* Content */}
                <CardContent className='pt-4'>
                  <div className='mb-2'>
                   
                    <h3 className='text-xl font-semibold text-foreground mt-1 line-clamp-2'>
                     {i.title}
                    </h3>
                   
                   
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. A, asperiores?
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index}
                        className={`w-4 h-4 ${
                          index < i.star 
                            ? `text-yellow-500 fill-current` 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div> 
                  
                </CardContent>

                {/* Footer */}
                <CardFooter className='flex items-center justify-between pt-4 border-t border-border'>
                  <div>
                    <p className='text-2xl font-bold text-stone-800'>
                      £ {i.price}
                    </p>
                   
                  </div>
                  {/* Add to cart */}
                  <Button
                    size="lg"
                   
                    className={`bg-${i.color} text-primary-foreground rounded hover:bg-${i.color} gap-2  hover:scale-105 hover:shadow-2xl
                    translation-all duration-300
                   
                    shadow-lg `}
                    onClick={() => addToCart(i)}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </Button>
                  {/* end add to cart */}
                </CardFooter>
              </Card>
          
        ))}
         

          
         

        </div>
      </div>
    </section>
  

      {/* WhatsApp CTA */}
      <section className="bg-green-200 text-green-950 py-12 ">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold mb-4">Contact us via WhatsApp!</h2>
          <p className="text-xl mb-6">Chat with our team to find the perfect solution</p>
          <a
            href="https://wa.me/XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-50 transition duration-300"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Start Conversation
          </a>
        </div>
      </section>

      {/* Floating Cart */}
      {cartItems.length > 0 && (
          <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-primary text-primary-foreground shadow-xl hover:opacity-90 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <ShoppingCart size={24} />
          {cartItems.length > 0 && (
            <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-destructive text-destructive-foreground animate-pulse">
              {cartItems.length}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="pb-4">
          <div className="flex  items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary rounded-lg">
                <ShoppingCart className="w-5 h-5 text-secondary-foreground" />
              </div>
              <DialogTitle className="text-2xl font-bold">Shopping Cart</DialogTitle>
            </div>
            {cartItems.length > 0 && (
              <Badge variant="secondary">
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
                <Card key={index} className="p-4 hover:shadow-md transition-shadow duration-200 group">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-muted flex items-center justify-center">
                      <div className="w-6 h-6 rounded bg-primary/30"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground truncate">{item.title}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {item.badge}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="font-bold text-lg text-foreground">£{item.price}</span>
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
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Subtotal</span>
                  <span className="text-sm font-semibold">£{getTotalPrice()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Shipping</span>
                  <Badge variant="secondary" className="text-xs">Free</Badge>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold">Total</span>
                <span className="text-2xl font-bold">£{getTotalPrice()}</span>
              </div>

              <div className="space-y-2 pt-2">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
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
      
    </main>
  );
}