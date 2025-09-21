import CheckIcon from '@/svg/CheckIcon';

export default function Step({title}:{title:string}) {
    return (
        <li className="flex gap-2 items-start">
            <CheckIcon />
            <p className="text-white">{title}</p>
        </li>
);
}
