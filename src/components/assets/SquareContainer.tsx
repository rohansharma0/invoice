import { cn } from "@/lib/utils";

interface SquareContainerProps extends React.ComponentProps<"div"> {}

const SquareContainer = ({
    className,
    children,
    ...props
}: SquareContainerProps) => {
    return (
        <div
            className={cn(
                "aspect-square rounded-xl flex items-center justify-center select-none transition-all",
                className
            )}
            {...props}>
            {children}
        </div>
    );
};

export default SquareContainer;
