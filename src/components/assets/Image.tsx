import SquareContainer from "./SquareContainer";

const Image = () => {
    return (
        <SquareContainer className="border-1 border-border">
            <img src="/path/to/logo.png" alt="Logo" className="object-cover" />
        </SquareContainer>
    );
};

export default Image;
