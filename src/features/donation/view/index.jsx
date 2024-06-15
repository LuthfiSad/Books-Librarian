import TopSection from "@/features/global/container/TopSection";
import DonationSlider from "../components/DonationSlider";
import Section from "@/features/global/container/Section";
// import Footer from "@/features/global/components/Footer";
import BookDonationForm from "../components/BookDonationForm";

const Donation = () => {
  return (
    <TopSection>
      <Section>
        <DonationSlider />
        <BookDonationForm />
      </Section>
      {/* <Footer /> */}
    </TopSection>
  );
};

export default Donation;
