import Link from "next/link"


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">LANTIBAN</h3>
                        <p className="text-gray-400">Your digital marketing partner</p>
                    </div>
                    
                  
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: contact@lantiban.fr</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/legal" className="hover:text-white">Legal Notice</Link></li>
                            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2026 LANTIBAN. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}