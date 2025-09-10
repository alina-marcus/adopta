from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session, declarative_base
import config

engine = create_engine(config.DATABASE_URL, echo=config.DEBUG)
Session = scoped_session(sessionmaker(bind=engine))
Base = declarative_base()

def get_session():
    return Session()
