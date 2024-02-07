import Header from "./components/Header";
import MainStoryGrid from "./components/MainStoryGrid";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import SpecialtyStoryGrid from './components/SpecialtyStoryGrid';
import Footer from "./components/Footer";

function App() {

  return (

    <>
      <Header />

      <MaxWidthWrapper as="main">
        <MainStoryGrid />
        <SpecialtyStoryGrid />
      </MaxWidthWrapper>
      <Footer />
    </>
  )
}

export default App
