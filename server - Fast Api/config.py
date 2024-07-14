from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file_encoding='utf-8',env_file=".env",extra='ignore')
    DATABASE_URL: str 
    ACCESS_TOKEN_EXPIRES_IN:str
    JWT_PRIVATE_KEY:str
    JWT_ALGORITHM:str
    MAIL_USERNAME: str
    MAIL_PASSWORD:str
    MAIL_FROM: str
    MAIL_PORT:int
    MAIL_SERVER: str
    MAIL_FROM_NAME: str

settings = Settings()