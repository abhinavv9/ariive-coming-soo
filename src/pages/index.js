import Image from 'next/image';
import { Montserrat } from 'next/font/google';

import Logo from '../../public/logo.png';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const inter = Montserrat({ subsets: ['latin'] });

export default function Home() {
    return (
        <main
            className={`flex min-h-full gap-8 flex-col items-center justify-between p-12 ${inter.className} bg-[#f7f8fc] shadow-md rounded-lg relative`}
        >
            <div className='flex flex-col justify-center items-center gap-8 px-4'>
                <nav className='flex flex-col justify-center items-center'>
                    <Image className='-mb-12' src={Logo} alt='Logo' width={280} />
                    <p className='text-sm'>Coming Soon!</p>
                </nav>
                <div className='flex flex-col justify-center items-center'>
                    <p className='px-4 text-[12px] sm:text-lg text-center w-full max-w-full md:max-w-[85%]'>
                        Express yourself with our unique style
                    </p>
                    <div className='px-4'>
                        <Newsletter />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </main>
    );
}
