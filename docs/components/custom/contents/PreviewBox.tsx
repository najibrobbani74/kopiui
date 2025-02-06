import { FC, ReactNode } from 'react'
const PreviewBox: FC<{ children: ReactNode, childClassname?:string }> = ({ children, childClassname }) => {
    return (
        <div className="bg-gradient-to-br from-primary to-secondary flex justify-center items-center rounded-lg py-14">
            <div className={childClassname ?? 'bg-background'}>
            {children}
            </div>
        </div>
    )
}

export default PreviewBox