import BookData from "../../data/Books";
import Booksdetail from "./Booksdetail";

const Bookdetails = () => {
  return (
    <div>
      <div class="row">
        {BookData.map((booksdetail) => (
          <Booksdetail data={booksdetail} />
        ))}
      </div>
    </div>
  );
};

export default Bookdetails;