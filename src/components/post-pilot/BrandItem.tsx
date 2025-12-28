import Image from "next/image"
interface BrandItemProps {
    url: string,
    name: string
}
export default function BrandItem({ name, url }: BrandItemProps) {
    return <div className="flex flex-col gap-2">
        <Image
            src={url}
            width={284}
            height={193}
            alt="brand"
            className="w-full h-full"
        />
        <p className="font-bold text-center text-2xl">{name}</p>
    </div>
}