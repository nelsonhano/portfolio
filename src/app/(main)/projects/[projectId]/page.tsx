type params = {
    projectId: string;
};

export default function page({ projectId }: params) {
    console.log({projectId});
    
    return <div className="text-white text-9xl">{projectId}</div>;
}
