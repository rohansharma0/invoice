import SquareContainer from "./SquareContainer";

const Image = ({ image }: { image: any }) => {
    return (
        <SquareContainer className="border-1 border-border w-full h-full">
            <img
                src={image}
                alt="Logo"
                className="object-cover w-full h-full rounded-lg"
            />
        </SquareContainer>
    );
};

export default Image;
