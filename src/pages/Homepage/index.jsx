import Categorylist from "../../components/Categorylist";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <Categorylist />
      </div>
    </>
  );
};
export default HomePage;
