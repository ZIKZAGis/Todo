import React from 'react'
import { FaScroll } from "react-icons/fa"

const EmptyList = () => {
    const SIZE = 22

    return (
        <div className="flex items-center text-center justify-center">
            <p className="text-center text-gray-400 transform text-xl mr-2">Список пуст</p>
            <FaScroll size={SIZE} className="text-gray-400"/>
        </div>
    )
}

export default EmptyList
