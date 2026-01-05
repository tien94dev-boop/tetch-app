import Link from "next/link"
import Image from "next/image"

export default function Header({}){
    return<div className="w-full bg-gray-900 text-center text-base text-white inline-block px-4 py-1 relative">
        <p>Sign up and get 20% off to your first order. 
        <Link href={"/mega-mart"} className="font-bold underline"> Sign Up Now</Link></p>
        
        <div className="w-5 h-5 absolute right-4 top-1 cursor-pointer">
            <Image
                src={"/mega-mart/close-button.png"}
                alt="close-btn"
                width={20}
                height={20}
            />
        </div>
    </div>
}