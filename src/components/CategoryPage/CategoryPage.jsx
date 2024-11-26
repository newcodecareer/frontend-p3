import { Heading, Article, PageContainer } from "./CategoryPage.styles";

const CategoryPage = () => {
  return (
    <PageContainer>
      <Heading>Explore categories to see what you need.</Heading>
      <Article>
        Plumbing is any system that conveys fluids for a wide range of applications.
      </Article>
      <Article>
        {" "}
        Plumbing uses pipes, valves, plumbing fixtures, tanks, and other apparatuses to convey
        fluids.[1] Heating and cooling (HVAC), waste removal, and potable water delivery are among
        the most common uses for plumbing, but it is not limited to these applications.[2] The word
        derives from the Latin for lead, plumbum, as the first effective pipes used in the Roman era
        were lead pipes.[3]
      </Article>
      <Article>
        Plumbing reached its early apex in ancient Rome, which saw the introduction of expansive
        systems of aqueducts, tile wastewater removal, and widespread use of lead pipes. The Romans
        used lead pipe inscriptions to prevent water theft. With the Fall of Rome both water supply
        and sanitation stagnated—or regressed—for well over 1,000 years. Improvement was very slow,
        with little effective progress made until the growth of modern densely populated cities in
        the 1800s. During this period, public health authorities began pressing for better waste
        disposal systems to be installed, to prevent or control epidemics of disease.{" "}
      </Article>
    </PageContainer>
  );
};

export default CategoryPage;
