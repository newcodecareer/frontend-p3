import NeedsCard from "./NeedsCard/NeedsCard";
import { NeedsContainerSection } from "./NeedsContainer.styles";

// TODO temporary use for displaying cards, will use API mapping later
const NeedsContainer = () => {
  return (
    <NeedsContainerSection>
      <NeedsCard />
      <NeedsCard />
      <NeedsCard />
      <NeedsCard />
      <NeedsCard />
      <NeedsCard />
    </NeedsContainerSection>
  );
};

export default NeedsContainer;
