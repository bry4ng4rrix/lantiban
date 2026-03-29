import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import {Card , CardContent, CardHeader ,CardTitle} from "@/components/ui/card"


export default function Home() {
  return (
    <main className="min-h-screen w-full h-full bg-white">
      {/* Hero Section */}
      <section className="relative  py-20 ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-sky-500">
              Boostez Votre Visibilité en Ligne!
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Des Solutions Marketing Performantes pour votre Business
            </p>
            <a
              href="https://www.lantiban.fr"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
            >
              www.lantiban.fr
            </a>
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
     <section className="py-20 px-4 md:px-8 bg-muted/40">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Ads Image Creation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Starter */}
          <Card className="rounded-2xl shadow-sm hover:shadow-lg transition">
            <CardHeader className="text-center">
              <CardTitle>Starter Pack</CardTitle>
              <p className="text-3xl font-bold mt-2">350€</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✔ 10 ad images creation</li>
                <li>✔ Optimized formats</li>
                <li>✔ Email support</li>
              </ul>

              <Button className="w-full rounded-xl">
                Choose Plan
              </Button>
            </CardContent>
          </Card>

          {/* Popular */}
          <Card className="rounded-2xl border-primary shadow-lg scale-105">
            <CardHeader className="text-center">
              <Badge className="mx-auto mb-2">Most Popular</Badge>
              <CardTitle>Growth Pack</CardTitle>
              <p className="text-3xl font-bold mt-2">500€/month</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✔ Unlimited ad images</li>
                <li>✔ Multiple formats</li>
                <li>✔ Priority support</li>
                <li>✔ Monthly optimization</li>
              </ul>

              <Button className="w-full rounded-xl">
                Choose Plan
              </Button>
            </CardContent>
          </Card>

          {/* Pro */}
          <Card className="rounded-2xl shadow-sm hover:shadow-lg transition">
            <CardHeader className="text-center">
              <CardTitle>Pro Pack</CardTitle>
              <p className="text-3xl font-bold mt-2">1000€/month</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✔ Full premium service</li>
                <li>✔ Unlimited creation</li>
                <li>✔ 24/7 support</li>
                <li>✔ Custom strategy</li>
                <li>✔ Monthly reports</li>
              </ul>

              <Button className="w-full rounded-xl">
                Choose Plan
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  

      {/* WhatsApp CTA */}
      <section className="bg-green-500 text-white py-12 ">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold mb-4">Contactez-nous via WhatsApp!</h2>
          <p className="text-xl mb-6">Discutez avec notre équipe pour trouver la solution parfaite</p>
          <a
            href="https://wa.me/XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-green-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-50 transition duration-300"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Démarrer la conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LANTIBAN</h3>
              <p className="text-gray-400">Votre partenaire marketing digital</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Design</li>
                <li>Marketing Digital</li>
                <li>SEO</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@lantiban.com</li>
                <li>Téléphone: +33 XXX XXX XXX</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/legal" className="hover:text-white">Mentions Légales</a></li>
                <li><a href="/cgv" className="hover:text-white">CGV</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 LANTIBAN. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}