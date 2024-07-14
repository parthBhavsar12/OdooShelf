# # from datetime import datetime, timedelta, timezone
# # import os
# # from typing import Collection, List, Optional
# # from bson import ObjectId
# # from fastapi import Depends, HTTPException, Request, Response, status
# # from fastapi.security import OAuth2PasswordBearer
# # from pydantic import BaseModel
# # from dependencies.dependencies import get_book_collection
# # from models.BookModel import Book
# # from config import settings
# # from pymongo.collection import Collection
# # from pymongo.cursor import Cursor


# # def serialize_book(book):
# #     """Serialize MongoDB ObjectId to string if necessary."""
# #     if isinstance(book.get("_id"), ObjectId):
# #         book["_id"] = str(book["_id"])
# #     return book


# # def fetch_books(
# #     name: Optional[str] = None,  # title
# #     author: Optional[str] = None,
# #     genre: Optional[str] = None,
# #     publisher: Optional[str] = None,
# #     year: Optional[int] = None,
# #     book_collection: Collection
# # ) -> dict:

# #     if name:
# #         books_cursor: Cursor = book_collection.find({"name": name})
# #         books: List[dict] = [serialize_book(book) for book in books_cursor]
# #         return {
# #             "status": "success",
# #             "message": "Books fetched successfully.",
# #             "books": books,
# #         }

# #     if author:
# #         books_cursor: Cursor = book_collection.find({"author": author})
# #         books: List[dict] = [serialize_book(book) for book in books_cursor]
# #         return {
# #             "status": "success",
# #             "message": "Books fetched successfully.",
# #             "books": books,
# #         }

# #     if publisher:
# #         books_cursor: Cursor = book_collection.find({"publisher": publisher})
# #         books: List[dict] = [serialize_book(book) for book in books_cursor]
# #         return {
# #             "status": "success",
# #             "message": "Books fetched successfully.",
# #             "books": books,
# #         }

# #     if genre:
# #         books_cursor: Cursor = book_collection.find({"genre": genre})
# #         books: List[dict] = [serialize_book(book) for book in books_cursor]
# #         return {
# #             "status": "success",
# #             "message": "Books fetched successfully.",
# #             "books": books,
# #         }

# #     if year:
# #         books_cursor: Cursor = book_collection.find({"year": year})
# #         books: List[dict] = [serialize_book(book) for book in books_cursor]
# #         return {
# #             "status": "success",
# #             "message": "Books fetched successfully.",
# #             "books": books,
# #         }

# #     # books: List[dict] = [serialize_book(book) for book in books_cursor]
# #     # return {
# #     #     "status": "success",
# #     #     "message": "Books fetched successfully.",
# #     #     "books": books,
# #     # }
# #     # try:
# #     # query = {"shop_id": shop_id}

# #     # If prod_name is provided, add it to the query
# #     # if prod_name:
# #     #     query["prod_name"] = prod_name

# #     # books_cursor: Cursor = book_collection.find(query)
# #     #     books: List[dict] = [serialize_book(book) for book in books_cursor]
# #     #     return {
# #     #         "status": "success",
# #     #         "message": "Books fetched successfully.",
# #     #         "books": books,
# #     #     }
# #     # except Exception as e:
# #     #     raise HTTPException(status_code=500, detail=f"Books fetching failed: {str(e)}")


# from datetime import datetime, timedelta, timezone
# import os
# from typing import Collection, List, Optional
# from bson import ObjectId
# from fastapi import Depends, HTTPException, Request, Response, status
# from fastapi.security import OAuth2PasswordBearer
# from pydantic import BaseModel
# from dependencies.dependencies import get_book_collection
# from models.BookModel import Book
# from config import settings
# # from pymongo.collection import Collection
# from pymongo.cursor import Cursor


# def serialize_book(book):
#     """Serialize MongoDB ObjectId to string if necessary."""
#     if isinstance(book.get("_id"), ObjectId):
#         book["_id"] = str(book["_id"])
#     return book


# def fetch_books(
#     book_collection: Collection,
#     name: Optional[str] = None,  # title
#     author: Optional[str] = None,
#     genre: Optional[str] = None,
#     publisher: Optional[str] = None,
#     year: Optional[int] = None
# ) -> dict:

#     if any([name, author, genre, publisher, year]):
#         # Build query object based on provided parameters
#         query = {}
#         if name:
#             query["name"] = name
#             books_cursor: Cursor = book_collection.find(query)
#             books: List[dict] = [serialize_book(book) for book in books_cursor]
#             return {
#                 "status": "success",
#                 "message": "Books fetched successfully.",
#                 "books": books,
#             }
#         if author:
#             query["author"] = author
#             books_cursor: Cursor = book_collection.find(query)
#             books: List[dict] = [serialize_book(book) for book in books_cursor]
#             return {
#                 "status": "success",
#                 "message": "Books fetched successfully.",
#                 "books": books,
#             }
#         if genre:
#             query["genre"] = genre
#             books_cursor: Cursor = book_collection.find(query)
#             books: List[dict] = [serialize_book(book) for book in books_cursor]
#             return {
#                 "status": "success",
#                 "message": "Books fetched successfully.",
#                 "books": books,
#             }
#         if publisher:
#             query["publisher"] = publisher
#             books_cursor: Cursor = book_collection.find(query)
#             books: List[dict] = [serialize_book(book) for book in books_cursor]
#             return {
#                 "status": "success",
#                 "message": "Books fetched successfully.",
#                 "books": books,
#             }
#         if year:
#             query["year"] = year
#             books_cursor: Cursor = book_collection.find(query)
#             books: List[dict] = [serialize_book(book) for book in books_cursor]
#             return {
#                 "status": "success",
#                 "message": "Books fetched successfully.",
#                 "books": books,
#             }

#     # No parameters provided, handle empty result or return all books (optional)
#     # You can modify this behavior to suit your needs
#     return {"status": "info", "message": "No search criteria provided."}

from datetime import datetime, timedelta, timezone
from typing import Collection, List, Optional
from bson import ObjectId
from fastapi import HTTPException, Query
from pymongo.cursor import Cursor

def serialize_book(book):
    """Serialize MongoDB ObjectId to string if necessary."""
    if isinstance(book.get("_id"), ObjectId):
        book["_id"] = str(book["_id"])
    if isinstance(book.get("userId"), ObjectId):
        book["userId"] = str(book["userId"])
    return book


# def fetch_books(
#     book_collection: Collection,
#     publisher: str = Query(...)
# ) -> dict:

def fetch_books(
    book_collection: Collection,
    name: Optional[str] = None,  # title
    author: Optional[str] = None,
    genre: Optional[str] = None,
    publisher: Optional[str] = None,
    year: Optional[int] = None
) -> dict:
    query = {}
    if name:
        query["name"] = name
    if author:
        query["author"] = author
    if genre:
        query["genre"] = genre
    if publisher:
        query["publisher"] = publisher
    if year:
        query["year"] = year

    if query:
        books_cursor: Cursor = book_collection.find(query)
        books: List[dict] = [serialize_book(book) for book in books_cursor]
        return {
            "status": "success",
            "message": "Books fetched successfully.",
            "books": books,
        }
    else:
        return {"status": "info", "message": "No search criteria provided."}
