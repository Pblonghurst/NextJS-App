export const Badge = () => {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-secondary/70 backdrop-blur-sm ">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent"></span>
            <p className="small">
             Now available</p>
        </div>
    )
}