from app import app
from models import db, Game, Team, League


def run_seeds():
    with app.app_context():
        db.drop_all()
        db.create_all()
        print('Seeding database ... 🌱')
   
        league1 = League("amateur", 'this is a test description')
        league2 = League("pro", 'this text should be longer')
        league3 = League("plebs", 'whatever')
    
    # for league in leagues:
    #   new_league = League(league)

        db.session.add(league1)
        db.session.add(league2)
        db.session.add(league3)
        db.session.commit()

        # for room in rooms:
        #     new_classroom = Classroom(room)
        #     db.session.add(new_classroom)
        #     db.session.commit()
        #     for i in range(3):
        #         new_event = Event(event_names[i], datetime.strptime(
        #             start_times[i], '%m/%d/%y %H:%M:%S'), datetime.strptime(end_times[i], '%m/%d/%y %H:%M:%S'), new_classroom.id)
        #         db.session.add(new_event)
        #         db.session.commit()
        #         for i in range(1, 17):
        #             new_seat = Seat(new_event.id, i, True, '')
        #             db.session.add(new_seat)
        #             db.session.commit()
        #     print(new_classroom.toJSON())
        # new_booking_1 = Booking(user1.id, 10)
        # seat1 = Seat.query.get(10)
        # seat1.is_empty = False
        # seat1.student_name = user1.username
        # db.session.add(new_booking_1)
        # db.session.commit()
        # new_booking_1 = Booking(user1.id, 20)
        # seat2 = Seat.query.get(20)
        # seat2.is_empty = False
        # seat2.student_name = user1.username
        # db.session.add(new_booking_1)
        # db.session.commit()
        # new_booking_1 = Booking(user1.id, 30)
        # seat3 = Seat.query.get(30)
        # seat3.is_empty = False
        # seat3.student_name = user1.username
        # db.session.add(new_booking_1)
        # db.session.commit()
        
    print('Done! 🌳')


run_seeds()