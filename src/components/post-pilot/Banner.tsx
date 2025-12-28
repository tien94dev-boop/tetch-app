import Button from "../common/Button";
import Image from "next/image";

export default function Banner() {
    return <div className="bg-[url(/img/post-pilot/banner-bg.jpg)] bg-cover bg-center px-10 py-28">
        <p className="text-[82px] font-bold leading-[96px]">Meet your <br></br> <span className="text-[#009387] font-handwritten">favorite</span> new (old)<br></br> marketing channel.</p>
        <p className="pb-6">Remarkable results. Easier than email. Postcard marketing reinvented for modern ecommerce.</p>
        <div className="flex gap-6 pb-24">
            <Button
                type="secondary"
                name="Try it Risk-free"
                className="px-8 py-2 uppercase"
            ></Button>
            <div className="flex flex-col">
                <div className="flex">
                    {[1, 2, 3, 4, 5].map((star, index) => {
                        return <Image
                            key={star}
                            src="/img/post-pilot/star.png"
                            width={24}
                            height={24}
                            alt="star"
                        ></Image>
                    })}
                </div>
                <p className="text-base">5.0 Shopify Rating</p>
            </div>
        </div>
    </div>
}