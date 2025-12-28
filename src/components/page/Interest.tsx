import React from "react";

interface InterestProps {
    interest: {
        title: string;
        des: string;
    };
}
function Interest({ interest }: InterestProps) {
    const { title, des } = interest
    return (
        <div>
            <p className="text-3xl font-bold pb-4">{title}</p>
            <div className="flex flex-col gap-4">
                <p className="italic" dangerouslySetInnerHTML={{ __html: des }}></p>
            </div>
        </div>
    );
}

export default Interest