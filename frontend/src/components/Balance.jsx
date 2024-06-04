export const Balance=({value})=>{
    return <div className="flex">
        <div className="fond-bold text-lg">Your balance</div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}