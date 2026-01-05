export default function Banner({ }) {
    const bannerData = [
        {
            countText: "200+",
            description: "International Brands"
        },
        {
            countText: "2,000+",
            description: "High-Quality Products"
        },
        {
            countText: "30,000+",
            description: "Happy Customers"
        }
    ]
    return <div className="grid grid-cols-2 bg-[url(/mega-mart/banner-bg.jpg)] bg-fit py-25 px-25">
        <div className="flex flex-col gap-8 ">
            <h1 className="text-6xl font-black">FIND CLOTHES<br></br> THAT MATCHES<br></br>  YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="px-16 py-4 bg-gray-900 text-white rounded-full cursor-pointer w-fit">
                Shop Now
            </button>
            <div className="flex justify-between">
                {bannerData.map((banner, index) => {
                    return <div key={index} className="flex flex-col">
                        <p className="text-5xl pb-2">{banner.countText}</p>
                        <p className="text-base text-gray-600">{banner.description}</p>
                    </div>
                })}
            </div>
        </div>
    </div>
}