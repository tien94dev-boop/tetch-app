import Image from "next/image"
import Link from "next/link"
export default function Navbar({ }) {
    const menus = [
        {
            name: "Shop",
            link: "/shop"
        },
        {
            name: "On Sale",
            link: "/shop"
        },
        {
            name: "New Arrivals",
            link: "/shop"
        },
        {
            name: "Brands",
            link: "/shop"
        },

    ]
    return <div className="flex gap-8 py-6 justify-between items-center px-25">
        <div className="w-40 h-5">
            <Image
                src={"/mega-mart/logo.png"}
                alt="logo"
                width={160}
                height={22}
            />
        </div>
        <div className="flex gap-4">
            {menus.map((menu: { name: string, link: string }) => {
                return <div key={menu.name}>
                    <Link
                        href={menu.link}
                    >{menu.name}</Link>
                </div>
            })}
        </div>
            <div className="w-[577px] flex items-center bg-gray-200 py-1 px-4 gap-2 rounded-full">
                <div className="">
                    <Image
                        src={"/mega-mart/search-icon.png"}
                        alt="search icon"
                        width={24}
                        height={24}
                    />
                </div>
                <input className="h-10 flex-1 outline-none" placeholder="Search for products..." />
            </div>
        <div className="flex gap-4">
            <div>
                <Image
                    src={"/mega-mart/shopping-cart-icon.png"}
                    alt="search icon"
                    width={24}
                    height={24}
                />
            </div>
            <div>
                <Image
                    src={"/mega-mart/login-icon.png"}
                    alt="search icon"
                    width={24}
                    height={24}
                />
            </div>


        </div>
    </div>
}