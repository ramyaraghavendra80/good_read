const Booksdetail = (props) => {
    const { title, image } = props.data;
   
    return (
        <>
            <div className="container-sm">
                    <img src={image} class="float-left" alt="..." />
            </div>
            <div className="container-fluid fixed-right">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                </div>
            </div>
        </>
    )
};

export default Booksdetail;