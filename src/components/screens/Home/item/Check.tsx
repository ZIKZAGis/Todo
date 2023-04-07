import React, {FC} from 'react'
import {BsCheck} from 'react-icons/bs'
import { CheckProps } from './../../../types/types'

const Check: FC<CheckProps> = ({isCompleted}) => {
    const SIZE = 24

    return (
        <div className={`flex items-center justify-center border-2 rounded-lg border-pink-400 w-6 h-6 mr-2 ${isCompleted ? 'bg-pink-400' : ''}`}
        >
            {isCompleted && <BsCheck size={SIZE} className='text-gray-900'/>}
        </div>
    )
}

export default Check