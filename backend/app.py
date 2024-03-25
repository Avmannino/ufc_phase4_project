from flask import Flask, make_response, jsonify, request, session, g
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from dotenv import dotenv_values
from flask_bcrypt import Bcrypt
from models import db,Match,Fighter,Event,User,Comment

import json

# config = dotenv_values(".env")

app = Flask(__name__)
app.debug = True
# app.secret_key = config['FLASK_SECRET_KEY']
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)

db.init_app(app)

@app.get('/fighters')
def get_fighters():
    fighters=Fighter.query.all()
    return [f.to_dict() for f in fighters],200

@app.get('/matches')
def get_matches():
    matches = Match.query.all()
    return [m.to_dict() for m in matches]

@app.get('/events')
def get_events():
    events = Event.query.all()
    return [e.to_dict() for e in events]

@app.get('/check_session')
def check_session():
    user = db.session.get(User, session.get('user_id'))
    print(f'check session {session.get("user_id")}')
    if user:
        return user.to_dict(rules=['-password_hash']), 200
    else:
        # The first time a user visits a page (i.e. is not logged in)
        # we will return this.
        return {"message": "No user logged in"}, 401

@app.post('/login')
def login():
    # get the data from the post request (dict of username/password)
    data = request.json
    # get the user based on username
    user = User.query.filter(User.name == data.get('name')).first()

    # check that the hash of supplied password matches the hash stored in the db
    if user and bcrypt.check_password_hash(user.password_hash, data.get('password')):
        # if successful, set a key in the session with the user id
        session["user_id"] = user.id
        print("success")
        
        return user.to_dict(), 200
    else:
        return { "error": "Invalid username or password" }, 401

@app.get("/comments")
def get_reviews():
    comments = Comment.query.all()

    return [c.to_dict() for c in comments]

# @app.post("/comments")
# def post_comments():
#     data = request.json

#     try:
#         restaurant = Restaurant.query.filter(
#             Restaurant.name == data.get("restaurant")
#         ).first()
#         new_review = Review(
#             reviewer=data.get("reviewer"),
#             review=data.get("review"),
#             rating=data.get("rating"),
#             restaurant=restaurant,
#         )
#         db.session.add(new_review)
#         db.session.commit()
#         return new_review.to_dict(), 201
#     except Exception as e:
#         print(e)
#         return {"error": f"could not post review: {e}"}, 405

if __name__ == "__main__":
    app.run(port=5555, debug=True)