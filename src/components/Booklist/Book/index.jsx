import { Link } from "react-router-dom";
const Book = (props) => {
    const { title, image } = props.data;
    return (
      <div class="col-sm-3">
        <div class="card">
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text"></p>
            <Link to='/bookdetails' class="btn btn-dark btn-block">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    );
  };
  export default Book;