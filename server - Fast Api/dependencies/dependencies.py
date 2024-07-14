from database.db import db

def get_user_collection():
    return db.get_db()["users"]

def get_book_collection():
    return db.get_db()["books"]