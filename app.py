from flask import Flask
from db import Base, engine
from routes.adopters import adopters_bp
from routes.dogs import dogs_bp
from routes.applications import applications_bp

app = Flask(__name__)

# Create tables if not exist
Base.metadata.create_all(engine)

# Register Blueprints
app.register_blueprint(adopters_bp)
app.register_blueprint(dogs_bp)
app.register_blueprint(applications_bp)

if __name__ == "__main__":
    app.run(debug=True)

