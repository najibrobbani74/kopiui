import { forwardRef, HTMLProps } from "react"

interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
    size?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({size = 1,...props}, ref) => {
    switch (size) {
        case 1:
            return (
                <h1 ref={ref} {...props} className="text-3xl py-2 font-bold text-foreground w-fit">
                    {props.children}
                </h1>
            )
        case 2:
            return (
                <h2 ref={ref} {...props} className="text-2xl py-2 font-bold text-foreground w-fit">
                    {props.children}
                </h2>
            )
        case 3:
            return (
                <h3 ref={ref} {...props} className="text-xl py-2 font-bold text-foreground w-fit">
                    {props.children}
                </h3>
            )
        case 4:
            return (
                <h4 ref={ref} {...props} className="text-lg py-2 font-bold text-foreground w-fit">
                    {props.children}
                </h4>
            )
        case 5:
            return (
                <h5 ref={ref} {...props} className="text-base py-2 font-bold text-foreground w-fit">
                    {props.children}
                </h5>
            )
        case 6:
            return (
                <h6 ref={ref} {...props} className="text-sm py-2 font-bold text-foreground w-fit">
                    {props.children}
                </h6>
            )
    }
})
Heading.displayName = "Heading"

export default Heading