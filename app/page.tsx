"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowDown,
  ArrowRight,
  ShoppingCart,
  Star,
  Trash2,
} from "lucide-react";
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
    const message =
      `hello , new order details :\n\n` +
      cartItems
        .map(
          (item, index) =>
            `type : ${item.title}\n` + `price : ${item.price}\n €`,
        )
        .join("\n");

    const whatsappUrl = `https://wa.me/33623126517?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsCartOpen(false);
  };

  const pack: PackItem[] = [
    {
      id: 1,
      image: "🚀",
      title: "STARTER",
      type: "PACK",
      price: 350,
      moi: "/mo",
      description:
        "The Starter Pack Perfect for testing new offers and finding winning angles.",
      features: [
        "10 Premium Static Creatives per month",
        "100% Platform Compliant (0 Risk of Bans)",
        "Optimized for +60% Engagement Rate",
        "Cancel Anytime",
      ],
      popular: false,
    },
    {
      id: 2,
      image: "🚀",
      title: "SCALING",
      type: "PLAN",
      price: 500,
      moi: "/mo",
      description:
        "Built for growing brands that need constant fresh creatives to beat ad fatigue.",
      features: [
        "50 Premium Static Creatives per month",
        "100% Platform Compliant (0 Risk of Bans)",
        "Optimized for +60% Engagement Rate",
        "Priority Delivery",
        "Cancel Anytime",
      ],
      popular: true,
    },
    {
      id: 3,
      image: "👑",
      title: "DOMINATOR",
      type: "TIER",
      price: 1000,
      moi: "/mo",
      description:
        "The Dominator Tier For aggressive scaling and multi-platform domination. Never run out of winning ads again.",
      features: [
        "100 Premium Static Creatives per month",
        "100% Platform Compliant (0 Risk of Bans)",
        "Optimized for +60% Engagement Rate",
        "VIP Priority Delivery",
        "Cancel Anytime",
      ],
      popular: false,
    },
  ];

  const Chose = [
    {
      titre: "+60% Average Engagement Rate",
      badge: "Performance",
      emoji: "🔥",
      descri:
        "We don't just make pretty pictures. We build psychological triggers into every design. Our creatives are proven to boost click-through rates, lower your CPC, and skyrocket your ROI.",
    },
    {
      titre: "100% Ban-Proof & Platform Compliant",
      badge: "Safe Ads",
      emoji: "🛡️",
      descri:
        "Tired of Meta or TikTok rejecting your ads? We know the algorithms and the rulebooks inside out. Our designs strictly respect all advertising policies and terms of service. 0 risk of blockages, 100% peace of mind.",
    },
    {
      titre: "Ultimate Flexibility (Cancel Anytime)",
      badge: "No Lock-in",
      emoji: "🔓",
      descri:
        " We believe in earning your business every single month. There are absolutely no lock-in contracts. Upgrade, downgrade, or cancel your subscription with a single click.",
    },

    {
      titre: "Ready to Launch",
      badge: "Speed",
      emoji: "⚡",
      descri:
        "Stop waiting weeks for freelancers. Get a steady stream of fresh, agency-quality creatives delivered directly to you, ready to be plugged straight into your campaigns",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Hero Section */}
      <section className="relative py-10 md:py-20 px-4 md:px-8   ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-foreground text-balance">
              Boost Your Online Visibility!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Dominate Your Market with High-Converting Ad Creatives Stop
              wasting ad spend on visuals that get ignored or worse, get your
              accounts banned. At Lantiban, we design premium, scroll-stopping
              static ads engineered to scale your business and crush your CPA.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-fit">
              <Button
                size="lg"
                className="rounded-lg font-semibold hover:shadow-lg shadow-sm hover:scale-105"
              >
                <a
                  href="#produit"
                  className="flex justify-center items-center text-lg"
                >
                  {" "}
                  Get Started <ArrowDown className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end relative h-96">
            {/* Products images */}
            <Image
              src="/antiban.jpg"
              alt="lantiban google"
              className="absolute   rounded-lg shadow-lg animate-floatY hover:scale-105 transition-all duration-300 "
              width={500}
              height={400}
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
          <div className="mb-16" id="produit">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground text-balance">
              Ad Image Creation
            </h2>
            <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the creative firepower you need. Pause or cancel whenever
              you want. No contracts, no headaches—just results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ">
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
                      ? "border-2 border-amber-400 bg-linear-to-br from-blue-950 to-slate-900 shadow-lg shadow-amber-400/20"
                      : "border-2 border-blue-500/50 bg-linear-to-br from-blue-950/80 to-slate-900/80 hover:border-blue-400"
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
                    <div className="mb-2 text-center">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-slate-300">€</span>
                        <span className="text-5xl font-bold text-amber-400">
                          {item.price}
                        </span>
                        <span className="text-slate-400 text-lg">
                          {item.moi}
                        </span>
                      </div>
                    </div>
                    <CardDescription className="text-blue-50/50">
                      {item.description}
                    </CardDescription>
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
                          ? "bg-linear-to-r from-amber-400 to-amber-500 text-slate-950 hover:shadow-lg hover:shadow-amber-400/50"
                          : "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400/30"
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
          <div className="  border-t border-border pt-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground text-balance">
              Choose Your Growth Plan Select the monthly subscription that fits
              your scaling goals. No hidden fees. Cancel anytime.
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop wasting ad spend on visuals that get ignored—or worse, get
              your accounts banned. At Lantiban, we design premium,
              scroll-stopping static ads engineered to scale your business and
              crush your CPA.
            </p>
          </div>
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

          {/* Why Choose Section */}
          <div className="">
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <Badge
                variant="outline"
                className="text-sm px-4 py-1 bg-yellow-200 text-yellow-800"
              >
                Why Us ?
              </Badge>

              <h3 className="text-4xl md:text-5xl font-bold text-balance">
                🚀 Why Choose Lantiban? The Unfair Advantage
              </h3>

              <p className="text-muted-foreground max-w-2xl mx-auto">
                Not just design. Performance-driven creatives engineered to
                scale your campaigns.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {Chose.map((i, index) => (
                <Card
                  key={index}
                  className="space-y-2 shadow-lg border border-dashed hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-center text-4xl">
                      {i.emoji}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className=" space-y-2">
                    <div className="flex justify-between items-center">
                      <h1 className="font-bold text-md">{i.titre}</h1>{" "}
                      <Badge className="bg-green-400 text-white">
                        {" "}
                        {i.badge}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg">
                      {i.descri}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}

      {/* WhatsApp CTA */}
      <section className="py-10 px-4 md:px-8 " id="contact">
        <div className="max-w-3xl mx-auto">
          <div className="bg-green-400 border-none rounded-2xl p-8 md:p-12 border border-border shadow-sm">
            <div className="text-center">
              <div className="w-16 h-16 animate-floatY rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-6  shadow-lg">
                <svg
                  className="w-8 h-8 text-accent "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-green-50">
                Contact us via WhatsApp!
              </h2>
              <p className="text-lg text-muted mb-8">
                Chat with our team to find the perfect solution
              </p>
              <a
                href="https://wa.me/33623126517"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent text-accent-foreground font-semibold px-8 py-3  rounded-lg hover:opacity-90 transition duration-300 shadow-lg hover:scale-105 hover:shadow-md"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
              className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center font-bold"
            >
              <ShoppingCart size={20} />
              {cartItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-red-500 text-white animate-pulse font-bold text-xs">
                  {cartItems.length}
                </Badge>
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col border-2 border-amber-400 bg-gradient-to-br from-slate-900 to-blue-950 shadow-2xl shadow-amber-400/20">
            <DialogHeader className="pb-4 border-b border-amber-400/30">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-400/20 rounded-lg border border-amber-400/30">
                    <ShoppingCart className="w-5 h-5 text-amber-400" />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-white">
                    Your Cart
                  </DialogTitle>
                </div>
                {cartItems.length > 0 && (
                  <Badge className="bg-amber-400 text-slate-950 font-bold">
                    {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
                  </Badge>
                )}
              </div>
            </DialogHeader>

            <div className="flex-1 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 px-4">
                  <div className="p-4 bg-slate-800/50 rounded-full mb-4 border border-slate-700">
                    <ShoppingCart className="w-10 h-10 text-slate-500" />
                  </div>
                  <p className="text-lg font-semibold mb-2 text-white">
                    Your cart is empty
                  </p>
                  <p className="text-sm text-slate-400 text-center">
                    Add items to your cart to see them here
                  </p>
                </div>
              ) : (
                <div className="space-y-3 px-6 py-4">
                  {cartItems.map((item, index) => (
                    <Card
                      key={index}
                      className="p-4 border border-blue-500/50 hover:border-amber-400/50 transition-all duration-200 group bg-gradient-to-br from-blue-950/60 to-slate-900/60 hover:shadow-lg hover:shadow-amber-400/10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 w-12 h-12 rounded-lg bg-amber-400/20 flex items-center justify-center border border-amber-400/30 text-xl">
                          {item.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-white truncate">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-400 mt-1">
                            {item.type}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-bold text-lg text-amber-400">
                            €{item.price}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(index)}
                            className="h-8 w-8 p-0 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
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
                <Separator className="my-4 bg-amber-400/20" />
                <div className="px-6 pb-6 space-y-4">
                  <div className="space-y-2 bg-blue-950/40 rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Subtotal</span>
                      <span className="text-sm font-semibold text-white">
                        €{getTotalPrice()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Shipping</span>
                      <Badge className="text-xs bg-green-500/20 text-green-300 border border-green-400/30">
                        Free
                      </Badge>
                    </div>
                  </div>
                  <Separator className="bg-amber-400/20" />
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-bold text-white">Total</span>
                    <span className="text-3xl font-bold text-amber-400">
                      €{getTotalPrice()}
                    </span>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Button
                      className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:shadow-lg hover:shadow-amber-400/50 py-6 text-lg font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                      size="lg"
                      onClick={sendToWhatsApp}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Send Order via WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full rounded-lg font-bold border-blue-400/30 text-white hover:bg-blue-950/50"
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
