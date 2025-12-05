from flask import Flask
from flask_cors import CORS
from db import Base, engine
from routes.adopters import adopters_bp
from routes.dogs import dogs_bp
from routes.applications import applications_bp
from routes.home_checkers import home_checkers_bp
from routes.home_checks import home_checks_bp


app = Flask(__name__)
CORS(app)

# Create tables if not exist
Base.metadata.create_all(engine)
@app.route("/", methods=["GET"])
def home_string():
    return "adopta api"
# Register Blueprints
app.register_blueprint(adopters_bp)
app.register_blueprint(dogs_bp)
app.register_blueprint(applications_bp)
app.register_blueprint(home_checkers_bp)
app.register_blueprint(home_checks_bp)

if __name__ == "__main__":
    app.run(debug=True)




