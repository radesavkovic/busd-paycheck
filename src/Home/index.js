import { styled } from "@mui/system";

import Connect from "./components/Connect";
import Header from "./components/Header";
import BakeCard from "./components/BakeCard";
import NutritionFacts from "./components/NutritionFacts";
import Statistics from "./components/Statistics";
// import ReferralLink from "./components/ReferralLink";
import { useAuthContext } from "../providers/AuthProvider";
import Footer from "./components/Footer";
// import FAQs from "./components/FAQ";
import FAQNew from "./components/FAQNew";

import Link from "@mui/material/Link";
import banner from "../assets/banner.jpg";

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: 680,
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%"
  }
}));

export default function Home() {
  const { address } = useAuthContext();

  return (
    <>
    <Wrapper>
      <Header />
      {/* <Connect /> */}
      <BakeCard />
      <NutritionFacts address={address} />
      <Statistics />
      {/* <ReferralLink address={address} /> */}
      {/* <FAQNew /> */}
      {/* <FAQs /> */}
      <Footer />
    </Wrapper>
    {/* <div style={{position: 'absolute', width: '100%', height: '100%', left: '0px', top: '0px'}}>
      <Wrapper>
        <Link href="https://busdautomine.org?ref=0x4679c3BE0cf5A61639E49BdBc04560a176Ad033A">
          <img src={banner} alt=""/>
        </Link>
      </Wrapper>
    </div> */}
    </>
  );
}
