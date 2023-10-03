import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className='flex gap-4 justify-center items-center z-10'>
            <Link href='https://m.facebook.com/people/Ariive/61551255532171/'>
                <BiLogoFacebook size={24} fill='gray' />
            </Link>
            <Link href='https://instagram.com/ariive._?igshid=MzRlODBiNWFlZA=='>
                <AiOutlineInstagram size={24} fill='gray' />
            </Link>
        </div>
    );
};

export default Footer;
