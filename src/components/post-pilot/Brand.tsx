import BrandItem from "./BrandItem"

export default function Brand() {
    const brands = [
        {
            url: "/img/post-pilot/brand1.jpg",
            name: "RUNGUM"
        },
        {
            url: "/img/post-pilot/brand2.jpg",
            name: "BreadBrand"
        },
        {
            url: "/img/post-pilot/brand3.jpg",
            name: "PROMIX"
        },
        {
            url: "/img/post-pilot/brand4.jpg",
            name: "SCOTCH PORTER"
        },
    ]
    return <div className="py-10 px-10 my-16">
        <p className="text-[63px] text-center font-bold leading-18">Trusted by thousands <br></br> of top DTC <span className="text-[#009387] font-handwritten">brands.</span></p>
        <div className="grid grid-cols-4 gap-6 mt-10">
            {brands.map((brand, index) => {
                return <BrandItem url={brand.url} name={brand.name} key={index} />
            })}
        </div>
    </div>
}