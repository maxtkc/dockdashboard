# dockdashboard

- ExpressJS server
- sqlite database with records and current status
- One shared object between all clients
  - Client update field and it is broadcasted to all other clients
  - https://github.com/websockets/ws
- Time based notifications?
- "Open new report" button and "submit report" button
- Able to browse old records

## Shared object

Needs to include:

- Date
  - Sunset
  - Could just be js date object for sunset?
- Weather
  - date
  - temp
  - weather observed
  - wind dir
  - wind speed
  - flag
  - restrictions
- Classes
  - start time
  - class name
  - attend
  - instructor
- Dockmasters
  - Name
  - In
  - Out
- Dockstaff
  - Name
  - In
  - Out
- UAP Schedule
- Announcements
  - JP Related
  - AP Related
  - UAP Related
  - Other Events
  - Color coded?
- Semi-Permanent Restrictions
- Program Closed/Opened
  - Close
  - Reopen
- DM signature/initials
  - Submit button that saves the data and resets the page for the next day


{
    Sunset: "8/24/2019, 11:22:07 PM",
    Weather: [
        {date: "8/24/2019, 5:22:07 PM", temperature: 80, weather: "Cloudy", windDirection: 90, windSpeed: 15, flag: "Yellow", restrictions: "None"}
        {date: "8/24/2019, 7:22:07 PM", temperature: 84, weather: "Cloudy", windDirection: 180, windSpeed: 10, flag: "Green", restrictions: "Pink sails"}
        {date: "8/24/2019, 9:22:07 PM", temperature: 77, weather: "Cloudy", windDirection: 45, windSpeed: 11, flag: "Green", restrictions: "Pink sails"}
    ]
}
