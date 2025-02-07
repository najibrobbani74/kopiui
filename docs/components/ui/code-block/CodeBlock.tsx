"use client"
import { Highlight, themes } from 'prism-react-renderer';
import { forwardRef, HTMLProps, useState } from 'react';
import { cn } from "@/lib/utils"

interface CodeBlockProps extends HTMLProps<HTMLDivElement> {
    code: string;
    language: string;
    collapsible?: boolean;
    lineCount?: number;
    withLineNumbers?: boolean;
}

const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(({ code, language, collapsible = true, lineCount, className, style, withLineNumbers = false, ...props }, ref) => {
    const [copied, setCopied] = useState(false);
    const [expanded, setExpanded] = useState(false);

    function copyToClipboard() {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <div ref={ref} {...props} className={cn('relative', className)} style={{
            height: collapsible ? (((expanded ? (lineCount ?? 30) : 10) * 1.5) + 1 + 'rem') : lineCount ? ((lineCount * 1.5) + 1 + 'rem') : 'auto',
            ...style
        }}>
            {collapsible ? (
                <div className='absolute bottom-0 left-0 z-[1] flex justify-center py-5 w-full bg-gradient-to-t from-background via-background/70'>
                    <button onClick={() => setExpanded(!expanded)} className='bg-background border hover:bg-primary/50 text-foreground px-5 py-2 rounded-lg'>{expanded ? "Collapse" : "Expand"}</button>
                </div>
            ) : null}

            <button onClick={copyToClipboard} className={cn('absolute z-[1] top-2 right-2 p-1 hover:opacity-100 rounded', copied ? "opacity-100 bg-success" : "opacity-70 bg-background/50")}>
                <svg className={cn("fill-foreground", !copied ? "block" : "hidden")} id='Copy_24' width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0' />
                    <g transform="matrix(1 0 0 1 12 12)" >
                        <path transform=" translate(-12, -12)" d="M 4 2 C 2.895 2 2 2.895 2 4 L 2 18 L 4 18 L 4 4 L 18 4 L 18 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z" strokeLinecap="round" />
                    </g>
                </svg>
                <div className={cn(copied ? "flex flex-row justify-center bg-green-500/20 p-1 rounded-lg items-center gap-1" : "hidden")}>
                    <svg className={cn('fill-green-500')} id='Checkmark_24' width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0' />
                        <g transform="matrix(1.15 0 0 1.15 12 12)" >
                            <path transform=" translate(-12, -11.84)" d="M 19.28125 5.28125 L 9 15.5625 L 4.71875 11.28125 L 3.28125 12.71875 L 8.28125 17.71875 L 9 18.40625 L 9.71875 17.71875 L 20.71875 6.71875 Z" strokeLinecap="round" />
                        </g>
                    </svg>
                    <span className={cn('text-green-500 font-bold text-xs')}>Copied</span>
                </div>
            </button>
            <div className={cn('absolute overflow-y-scroll w-full', (collapsible || lineCount ? "h-full" : "h-fit"), expanded ? "pb-20" : "")}>
                <Highlight
                    theme={themes.okaidia}
                    code={code}
                    language={language}
                >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className='px-4 py-2 rounded-lg overflow-x-scroll' style={style}>
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })}>
                                    {withLineNumbers && <span className='text-right inline-block mr-4 w-6 text-foreground opacity-50'>{i + 1}</span>}
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
});

CodeBlock.displayName = 'CodeBlock'

export default CodeBlock;