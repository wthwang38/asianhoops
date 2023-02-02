from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import json

db = SQLAlchemy()
migrate = Migrate(db)

class League(db.Model):
    __tablename__ = 'leagues'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(80), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, name, description):
        self.name = name
        self.description = description

    def toJSON(self):
        return {"id": self.id, "name": self.name, "description": self.description}

    def __repr__(self):
        return "<League: {self.name}>".format(self=self)

class Team(db.Model):
    __tablename__ = 'teams'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    wins = db.Column(db.Integer, default=0)
    losses = db.Column(db.Integer, default=0)
    league = db.Column(db.Integer, db.ForeignKey('leagues.id'), nullable=False)

    def __init__(self, name, wins, losses, league):
        self.name = name
        self.wins = wins
        self.losses = losses
        self.league = league

    def __repr__(self):
        return "<Team: {self.name} has {self.wins} W and {self.losses} L>".format(self=self)

class Game(db.Model):
    __tablename__ = 'games'
    id = db.Column(db.Integer, primary_key=True)
    home_id = db.Column(db.Integer, db.ForeignKey('teams.id'), nullable=False)
    away_id = db.Column(db.Integer, db.ForeignKey('teams.id'), nullable=False)
    home_score = db.Column(db.Integer)
    away_score = db.Column(db.Integer)

    def _init_(self, home, away, home_score, away_score):
        self.home = home
        self.away = away
        self.home_score = home_score
        self.away_score = away_score
        home = db.relationship(Team, lazy="joined", foreign_keys="Game.home_id", backref="games_ashome")
        away = db.relationship(Team, lazy="joined", foreign_keys="Game.away_id", backref="games_asaway")
    
    def __repr__(self):
        templ = "<Game: {self.home.name} vs {self.away.name} score: {self.home_score}:{self.away_score}>" 
        return templ.format(self=self)



