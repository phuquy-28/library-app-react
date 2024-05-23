import BookModel from "../../../models/BookModel"

export const ReturnBook: React.FC<{ book: BookModel }> = (props) => {
    return (
        <div className="col-xs-6 col-sm-6 cold-md-4 col-lg-3 mb-3">
            <div className="text-center">
                {props.book.img ?
                    <img src={props.book.img}
                        alt="book"
                        width='151'
                        height='233'
                    />
                    :
                    <img src={require('./../../../Images/BooksImages/book-luv2code-1000.png')}
                        alt="book"
                        width='151'
                        height='233'
                    />
                }
                <h6 className="mt-2">Book</h6>
                <p>Luv2Code</p>
                <a href="#" className="btn main-color text-white">Reserve</a>
            </div>
        </div>
    )
}