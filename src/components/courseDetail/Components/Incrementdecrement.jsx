import React from 'react'

const Incrementdecrement = () => {
    return (
        <div>

            <div className="flex">
                <div className="w-[25px] h-[25px] sm:h-[35px] sm:w-[35px] bg-slate-100 flex items-center justify-center rounded-sm outline outline-[0.5px] outline-gray-500">
                    <p className="text-lg">-</p>
                </div>
                <div className="w-[60px] h-[25px]  sm:h-[35px] sm:w-[60px] outline outline-[0.5px] outline-gray-500 flex items-center justify-center rounded-sm">
                    <p>2</p>
                </div>
                <div className="w-[25px] h-[25px]  sm:h-[35px] sm:w-[35px] bg-blue-900 flex items-center justify-center rounded-sm outline outline-[0.5px] outline-gray-500">
                    <p className="text-lg text-slate-100">+</p>
                </div>
            </div>
        </div>
    )
}

export default Incrementdecrement