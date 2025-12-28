import Image from "next/image"

export default function Work() {
    return <div className="flex flex-col gap-2 bg-[#f3fafa] py-16 my-16">
        <p className="text-center text-[63px] font-bold">Why use direct mail? <br></br>
            It <span className="text-[#009387] font-handwritten">works</span> like crazy.</p>
        <div className="grid grid-cols-3 gap-6 items-end mt-10">
            <div className="flex flex-col gap-2 text-center">
                <p className="text-[63px]">28X</p>
                <p className="text-base">Higher response rate than email<br></br> & digital</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <Image
                    src={'/img/post-pilot/work.png'}
                    width={228}
                    height={228}
                    alt="work"
                    className=""
                />
                <p className="text-base">Your message get read</p>
            </div>
            <div className="flex flex-col gap-2 text-center">
                <p className="text-[63px]">17 Days</p>
                <p className="text-base">Lifespan of a postcard vs.<br></br> seconds for email or SMS</p>
            </div>
        </div>
    </div>
}