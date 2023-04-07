import React, {FC} from 'react'
import { LayoutProps } from './types/types'

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className="py-10 bg-gray-900 min-h-screen">
            {children}
        </div>
    )
}

export default Layout