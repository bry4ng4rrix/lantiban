import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen h-full w-full bg-gray-50 text-gray-900 p-4 ">

      {/* HERO */}
      <section className="bg-linear-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Boost Your Online Visibility
        </h1>
        <p className="text-lg mb-6">
          High-performance marketing solutions for your business
        </p>

        <a
          href="https://lantiban.fr"
          className="inline-block bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold"
        >
          www.lantiban.fr
        </a>
      </section>

      {/* PRODUCTS */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Products
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((p) => (
            <Card key={p} className="rounded-2xl shadow-md">
              <CardContent className="p-4 text-center">
                <div className="h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                  Image {p}
                </div>
                <h3 className="font-semibold mb-2">Product {p}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Product description {p}
                </p>

                <a
                  href={`https://wa.me/XXXXXXXX?text=I'm interested in Product ${p}`}
                >
                  <Button className="w-full">
                    Contact via WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Offers
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Starter */}
          <Card className="text-center rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Starter Pack</h3>
              <p className="text-3xl font-bold mb-2">350€</p>
              <p className="text-gray-500 mb-4">One-time payment</p>

              <Button className="w-full">
                Select
              </Button>
            </CardContent>
          </Card>

          {/* Premium */}
          <Card className="text-center rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Premium Pack</h3>
              <p className="text-3xl font-bold mb-2">500€/month</p>
              <p className="text-gray-500 mb-4">Advanced campaigns</p>

              <Button className="w-full">
                Select
              </Button>
            </CardContent>
          </Card>

          {/* Pro */}
          <Card className="text-center rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Pro Pack</h3>
              <p className="text-3xl font-bold mb-2">1000€/month</p>
              <p className="text-gray-500 mb-4">Full campaigns</p>

              <Button className="w-full">
                Select
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-blue-600 text-white">
        <h2 className="text-2xl font-bold mb-6">
          Interested? Contact us on WhatsApp
        </h2>

        <a href="https://wa.me/XXXXXXXX">
          <Button className="bg-green-500 hover:bg-green-600">
            Chat on WhatsApp
          </Button>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © 2026 Lantiban LLC • Terms • Privacy • Legal
      </footer>
    </main>
  )
}