import os
class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'abc123')
    SQLALCHEMY_DATABASE_URI = os.getenv(
        'SQLALCHEMY_DATABASE_URI', 'sqlite:///development.sqlite3')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = "abc123"
    DEBUG = True