import React from 'react';
import './books.css';
import BookImage from './book.png';

function books() {
    return (
        <div className="books-div">
            <div className="left-block">
                <div className="search-div">
                    <span className="title-books">
                        Search Books
                    </span>
                    <hr />
                    <div className='searchBar'>
                        <input type='search' placeholder='Search Books' />
                        <button className='btn-books'><i class="zmdi zmdi-search"> Search</i></button>
                    </div>
                </div>
                <span className="title-books">
                    My Books
                </span>
                <hr />
                <div className="book-card">
                    <img src={BookImage} alt="book" className="book-image" />
                    <div className="book-info">
                        <strong className="book-name">Book name</strong>
                        <span className="book-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis quas recusandae qui asperiores esse, sed repudiandae beatae, illo veniam cupiditate laboriosam atque veritatis facere deserunt nam obcaecati magni blanditiis corporis sequi autem porro iste.</span>
                        <button className="btn-books book-action">Borrow Book</button>
                    </div>
                </div>
                <div className="book-card">
                    <img src={BookImage} alt="book" className="book-image" />
                    <div className="book-info">
                        <strong className="book-name">Book name</strong>
                        <span className="book-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis quas recusandae qui asperiores esse, sed repudiandae beatae, illo veniam cupiditate laboriosam atque veritatis facere deserunt nam obcaecati magni blanditiis corporis sequi autem porro iste.</span>
                        <button className="btn-books book-action">Borrow Book</button>
                    </div>
                </div>
                <div className="book-card">
                    <img src={BookImage} alt="book" className="book-image" />
                    <div className="book-info">
                        <strong className="book-name">Book name</strong>
                        <span className="book-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis quas recusandae qui asperiores esse, sed repudiandae beatae, illo veniam cupiditate laboriosam atque veritatis facere deserunt nam obcaecati magni blanditiis corporis sequi autem porro iste.</span>
                        <button className="btn-books book-action">Borrow Book</button>
                    </div>
                </div>
                <div className="book-card">
                    <img src={BookImage} alt="book" className="book-image" />
                    <div className="book-info">
                        <strong className="book-name">Book name</strong>
                        <span className="book-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis quas recusandae qui asperiores esse, sed repudiandae beatae, illo veniam cupiditate laboriosam atque veritatis facere deserunt nam obcaecati magni blanditiis corporis sequi autem porro iste.</span>
                        <button className="btn-books book-action">Borrow Book</button>
                    </div>
                </div>
                <div className="book-card">
                    <img src={BookImage} alt="book" className="book-image" />
                    <div className="book-info">
                        <strong className="book-name">Book name</strong>
                        <span className="book-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis quas recusandae qui asperiores esse, sed repudiandae beatae, illo veniam cupiditate laboriosam atque veritatis facere deserunt nam obcaecati magni blanditiis corporis sequi autem porro iste.</span>
                        <button className="btn-books book-action">Borrow Book</button>
                    </div>
                </div>
                <div className="book-card">
                    <img src={BookImage} alt="book" className="book-image" />
                    <div className="book-info">
                        <strong className="book-name">Book name</strong>
                        <span className="book-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis quas recusandae qui asperiores esse, sed repudiandae beatae, illo veniam cupiditate laboriosam atque veritatis facere deserunt nam obcaecati magni blanditiis corporis sequi autem porro iste.</span>
                        <button className="btn-books book-action">Borrow Book</button>
                    </div>
                </div>
                <div className="book-card">
                    <img src={BookImage} alt="book" className="book-image" />
                    <div className="book-info">
                        <strong className="book-name">Book name</strong>
                        <span className="book-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis quas recusandae qui asperiores esse, sed repudiandae beatae, illo veniam cupiditate laboriosam atque veritatis facere deserunt nam obcaecati magni blanditiis corporis sequi autem porro iste.</span>
                        <button className="btn-books book-action">Borrow Book</button>
                    </div>
                </div>
                <div className="book-card">
                    <img src={BookImage} alt="book" className="book-image" />
                    <div className="book-info">
                        <strong className="book-name">Book name</strong>
                        <span className="book-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis quas recusandae qui asperiores esse, sed repudiandae beatae, illo veniam cupiditate laboriosam atque veritatis facere deserunt nam obcaecati magni blanditiis corporis sequi autem porro iste.</span>
                        <button className="btn-books book-action">Borrow Book</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default books
