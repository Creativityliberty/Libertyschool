export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-full overflow-hidden bg-white border border-[#E7E7E7] shrink-0">
                <img
                    src="/Creativityliberty.png"
                    alt="Liberty Creativity School"
                    className="w-full h-full object-contain p-0.5"
                />
            </div>
            <div className="ml-2 grid flex-1 text-left text-sm">
                <span className="truncate leading-tight font-bold text-foreground">
                    Liberty Creativity
                </span>
                <span className="truncate text-xs text-muted-foreground">
                    School
                </span>
            </div>
        </>
    );
}
