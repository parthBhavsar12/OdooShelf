# from typing import Collection, Optional
# from fastapi import APIRouter, Depends, Query, Request, Response

# from dependencies.dependencies import get_book_collection
# from models.BookModel import Book

# from api.controller.book_controller import fetch_books

# book_router = APIRouter()


# @book_router.get("/fetch-books")
# def fetchBooks(
#     book_collection: Collection = Depends(get_book_collection),
#     name: Optional[str] = None,  # title
#     author: Optional[str] = None,
#     genre: Optional[str] = None,
#     publisher: Optional[str] = None,
#     year: Optional[int] = None
# ):
#     return fetch_books(book_collection, name, author, genre, publisher, year)

from typing import Collection, Optional
from fastapi import APIRouter, Depends, Query, Request, Response

from dependencies.dependencies import get_book_collection
from models.BookModel import Book

from api.controller.book_controller import fetch_books

book_router = APIRouter()

@book_router.get("/fetch-books")
def fetchBooks(
    book_collection: Collection = Depends(get_book_collection),
    name: Optional[str] = None,  # title
    author: Optional[str] = None,
    genre: Optional[str] = None,
    publisher: Optional[str] = None,
    year: Optional[int] = None
):
    return fetch_books(book_collection, name, author, genre, publisher, year)

# @book_router.get("/fetch-books")
# def fetchBooks(
#     book_collection: Collection = Depends(get_book_collection),
#     publisher: str = Query(...)
# ):
#     return fetch_books(book_collection, publisher)
