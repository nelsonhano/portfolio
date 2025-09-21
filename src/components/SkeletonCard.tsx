import { Skeleton } from './ui/skeleton'

export function SkeletonCard() {
    return (
    <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div>
            <Skeleton className="h-4 w-20" />
        </div>
        <div className="space-y-2">
            <Skeleton className="h-4 w-7" />
            <Skeleton className="h-4 w-7" />
        </div>
    </div>
)}