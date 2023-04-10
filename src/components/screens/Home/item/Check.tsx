import React, {FC} from 'react'
import {BsCheck} from 'react-icons/bs'
import { CheckProps } from './../../../types/types'

const Check: FC<CheckProps> = ({isCompleted}) => {
    const ICON_SIZE = 24
    const STATUS = isCompleted ? 'bg-pink-400' : ''

    return (
        <div className={`flex items-center justify-center border-2 rounded-lg border-pink-400 w-6 h-6 mr-2 ${STATUS}`}
        >
            {isCompleted && <BsCheck size={ICON_SIZE} className='text-gray-900'/>}
        </div>
    )
}

export default Check