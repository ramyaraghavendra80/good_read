import Navbar from '../../components/Navbar'
import Booklist from '../../components/Booklist'

const BookPage = () => {
    return (
     <>
        <Navbar />
        <div className="container">
            <Booklist />
        </div>
     </>
    )
}
export default BookPage;