import { ReactNode } from 'react'

import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export default function ToolTip({ children, message }: { children: ReactNode, message: string }) {
    return (
        <Tooltip>
            <TooltipTrigger>{children}</TooltipTrigger>
            <TooltipContent>{message}</TooltipContent>
        </Tooltip>
);}
