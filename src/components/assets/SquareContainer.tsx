import { cn } from "@/lib/utils";

const SquareContainer = ({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn(
                "aspect-square rounded-lg flex items-center justify-center",
                className
            )}
            {...props}>
            {children}
        </div>
    );
};

export default SquareContainer;
