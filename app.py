from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    # Models importieren

    # Routes registrieren
    from adopta.routes.dogs import dogs_bp
    app.register_blueprint(dogs_bp, url_prefix="/dogs")

    return app

# Flask CLI braucht diese Variable
app = create_app()
