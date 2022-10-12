import NeedsCard from "./NeedsCard/NeedsCard";
import { NeedsContainerDiv } from "./NeedsContainer.styles";

const NeedsContainer = () => {
    return (
        <NeedsContainerDiv>
            <NeedsCard />
            <NeedsCard />
            <NeedsCard />
            <NeedsCard />
            <NeedsCard />
            <NeedsCard />
        </NeedsContainerDiv>
    );
};

export default NeedsContainer;