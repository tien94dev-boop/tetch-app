import Image from "next/image"
import Link from "next/link"
import Button from "@/components/common/Button"
export default function HeaderPostPilot() {
    const menus = [
        {
            name: "Resources",
            link: ""
        },
        {
            name: "Success stories",
            link: ""
        },
        {
            name: "Company",
            link: ""
        },
        {
            name: "Pricing",
            link: ""
        },
    ]
    return <div className="flex justify-between items-center pt-8 pb-4">
        <div>
            <Image
                src="/img/post-pilot/icon.jpg"
                width={100}
                height={100}
                className="w-32"
                alt="profile"
            />
        </div>
        <div className="flex gap-4">
            <div className="flex items-center">
                <ul className="flex gap-4 item-center">
                    {menus.map((menu, index) => {
                        return <li key={menu.name}>
                            <Link href={menu.link}>{menu.name}</Link>
                        </li>
                    })}
                </ul>
            </div>
            <div className="flex gap-4">
                <Button
                    name="Login"
                    type="primary"
                />
                <Button
                    name="Create Free Account"
                    type="secondary"
                />
            </div>
        </div>
    </div>
}