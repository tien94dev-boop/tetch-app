interface buttonProps {
    className?: string,
    onClick?: ()=>{} | undefined,
    type: "primary" | "secondary"
    name: string

}

export default function Button({
    className, type, onClick, name
}: buttonProps){
    let classNameByType = ""
    switch (type) {
        case "primary":
            classNameByType = "bg-white text-gray-600"
            break;
        case "secondary":
            classNameByType = "bg-[#FF6D2C] text-white"
            break;
        default:
            break;
    }
    return <button 
    className={`border border-gray-800 shadow-sm shadow-black rounded px-2 py-1 ${classNameByType} ${className}`}
    onClick={onClick}>
        {name}
    </button>
}