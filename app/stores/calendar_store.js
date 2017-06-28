import RNCalendarEvents from 'react-native-calendar-events';

class CalendarStore  {

  constructor() {
      this.reminders = ['2017-06-21'];
      this.messages = {
        '2017-06-21': 'Take Blue Pill'
      };
/*
      RNCalendarEvents.authorizationStatus().then(status => {
        
        })
        .catch(error => {
         
      });
      */
      RNCalendarEvents.authorizeEventStore()
  .then(status => {
    console.log("Calendar events permission " + status);
  })
  .catch(error => {
   console.log("Calendar permission not grated" + error);
  });
  }

  addReminder(year, month, day, message) {
    if(year == "" || month == "" || day == "" || message == "")
      return;

    var date = year+'-'+month+'-'+day;
    this.reminders.push(date);
    this.messages[date] = message;

    RNCalendarEvents.saveEvent(message, {
      startDate: date+'T00:00:00.000Z',
      endDate: date+'T00:00:00.000Z',
      allDay: true
    })
    .then(id => {
      console.log("event added");// handle success
    })
    .catch(error => {
      console.log("event could not be added");// handle error
      console.log(error);
    });
  }

  getReminders() {
    return this.reminders;
  }

  getMessage(date) {
    if(date == undefined)
      date = (new Date()).toISOString().slice(0,10);
    if(this.messages[date] == undefined)
      return "No Medications on "+ date.split('T')[0];
    return this.messages[date];
  }

}

const calendarStore = new CalendarStore;

export default calendarStore;
