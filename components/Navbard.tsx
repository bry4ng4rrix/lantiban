import  {Card , CardHeader , CardTitle , CardDescription , CardContent} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import Link from 'next/link';
import Image from 'next/image';




export default function Navbar() {
    return (
       <div className=' p-4 justify-between items-center flex w-full '>
        <Link href="/">
            <Image src="/logo.avif" alt="Lantiban" width={100} height={100} />
        </Link>
        <div>
            <ul className='flex gap-5'>
               <Link href="/legal" className='hover:scale-105 hover:underline-offset-5 hover:underline trasnlation-all duration-300 text-sm font-semibold'>Legal Notice</Link>
               <Link href="/cgv" className='hover:scale-105 hover:underline-offset-5 hover:underline trasnlation-all duration-300 text-sm font-semibold'>TERMS OF SERVICE</Link>
               <Link href="/privacy" className='hover:scale-105 hover:underline-offset-5 hover:underline trasnlation-all duration-300 text-sm font-semibold'>PRIVACY POLICY</Link>
            </ul>
        </div>
      
       </div>
    );
}