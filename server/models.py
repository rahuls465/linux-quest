from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    progress = db.Column(db.Integer, default=0) #current quest day
    attempts = db.Column(db.Integer, default=0) #number of attempts to complete the quest

