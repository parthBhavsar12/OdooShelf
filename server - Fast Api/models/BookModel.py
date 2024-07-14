from pydantic import BeforeValidator, EmailStr, BaseModel, Field
from typing import Annotated, Optional
# from bson import ObjectId

PyObjectId = Annotated[str, BeforeValidator(str)]


class Book(BaseModel):
    name: str = Field(...) # Book title
    isbn: str = Field(...)
    author: str = Field(...)
    publisher: str = Field(...)
    year: str = Field(...)
    genre: str = Field(...)
    quantity: str = Field(...)
    status: str = Field(...)