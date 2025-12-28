import Image from "next/image";
import React, { useContext } from "react";
import { UserContext } from "@/context/userContext"

export default function Info() {
    const { name } = useContext(UserContext)
    return <div>
        <div className="rounded-full overflow-hidden max-w-full mt-10 mb-5">
            <Image
                src="/profile.png"
                alt="profile"
                width={100}
                height={100}
                className="object-cover rounded-full w-full h-full"
            />
        </div>
        <p className="text-3xl pb-5 font-bold">{name}</p>
        <p className="pb-5 text-2xl">Quản lý cộng đồng</p>
    </div>
}