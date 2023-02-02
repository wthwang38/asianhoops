from flask_sqlalchemy import SQLAlchemy
from flask_migrate import migrate
import json

db = SQLAlchemy()
migrate = Migrate(db)



class Game(db.model):
    id = db.Column(db.Integer, primary_key=True)
    home_id = db.Column(db.Integer, db.ForeignKey('team.id'), nullable=False)
    away_id = db.Column(db.Integer, db.ForeignKey('team.id'), nullable=False)
    home_score = db.Column(db.Integer)
    away_score = db.Column(db.Integer)

    def _init_(self, home, away, home_score, away_score):
        self.home = home
        self.away = away
        self.home_score = home_score
        self.away_score = away_score
        home = db.relationship(Team, lazy="joined", foreign_keys="Game.home_id", backref="games_ashome")
        away = db.relationship(Team, lazy="joined", foreign_keys="Game, away_id", backref="games_asaway")
    
    

