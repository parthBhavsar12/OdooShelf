# from contextlib import asynccontextmanager
# from fastapi import FastAPI
# from fastapi.middleware import Middleware

# from config import settings
# # import os
# # import signal

# from api.routes.book_routes import book_router
# from fastapi.middleware.cors import CORSMiddleware
# from database.db import db

# from bson import ObjectId
# import json

# class ObjectIdEncoder(json.JSONEncoder):
#     def default(self, obj):
#         if isinstance(obj, ObjectId):
#             return str(obj)
#         return json.JSONEncoder.default(self, obj)

# # app = FastAPI(default_response_encoder=ObjectIdEncoder)



# @asynccontextmanager
# async def lifespan(app: FastAPI):
#     try:
#         # startup
#         db.get_client()
#         yield
#     finally:
#         # shutdown
#         db.close_connection()

# origins = ['http://localhost:5173', 'http://127.0.0.1:5173']
# middleware = [
#     Middleware(
#         CORSMiddleware,
#         allow_origins=origins,
#         allow_credentials=True,
#         allow_methods=['*'],
#         allow_headers=['*']
#     )
# ]
# app = FastAPI(lifespan=lifespan,middleware=middleware, default_response_encoder=ObjectIdEncoder)


# @app.get("/")
# async def root():
#     return {"message": "Hello World"}


# app.include_router(router=book_router, prefix="/api/v1/book")


from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware import Middleware
from fastapi.responses import JSONResponse

from config import settings
# import os
# import signal

from api.routes.book_routes import book_router
from fastapi.middleware.cors import CORSMiddleware
from database.db import db

from bson import ObjectId
import json

class ObjectIdEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return json.JSONEncoder.default(self, obj)

# Custom JSON Response
class CustomJSONResponse(JSONResponse):
    def render(self, content: any) -> bytes:
        return json.dumps(content, cls=ObjectIdEncoder).encode("utf-8")

@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        # startup
        db.get_client()
        yield
    finally:
        # shutdown
        db.close_connection()

origins = ['http://localhost:5173', 'http://127.0.0.1:5173']
middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*']
    )
]
app = FastAPI(lifespan=lifespan, middleware=middleware, default_response_class=CustomJSONResponse)

@app.get("/")
async def root():
    return {"message": "Hello World"}

app.include_router(router=book_router, prefix="/api/v1/book")
