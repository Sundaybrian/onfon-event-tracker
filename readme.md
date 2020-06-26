# Onfon even tracker

###

## By **[Onfon Event Tracker](https://github.com/Sundaybrian/onfon-event-tracker)**

## Goal:

Design and implement a program that logs when tasks should be carried out as explained herein.
Problem:
A supervisor monitors the number of virtual servers running on his platform. To achieve this, the supervisor requires a server tracker that logs when a server started or stopped. Supervisor also requires a report of count of start/stop operations carried out on the servers and also the number of running servers .
Each operation has a predetermined interval in which it should be started or stopped as well as the order of precedence in case operations coincide, as summarized below:

## Specifications

| Task   | Interval(seconds) | Precedence |
| ------ | :---------------: | ---------: |
| Start  |        30         |          1 |
| Stop   |        40         |          2 |
| Report |        50         |          3 |

## Task description:

- START – an application should start N servers every 30 seconds, where N is a random integer value between 10 and 20 inclusive.
- STOP – an application should stop n servers every 40 seconds, where n is a random integer value between 5 and K inclusive (K is the total number of servers running at any particular point in time).
- REPORT – every 50 seconds, the application should report K servers running, where K is the total number of servers running at the time of reporting.

## User stories

```js
    iii. UI
        a. Should comprise of a 12-hour wall clock hanging on a masonry wall of a color of your choice.
        b. For every START task log, change the color of the wall to the new wall color obtained from the API.
        c. For every STOP task log, change the color of the clock’s face to the new face color obtained from the API.
        d. For every REPORT task log, change the color of the hour labels to the new hour labels color obtained from the API.
        e. The clock MUST simulate a real clock, with all the three hands (hour, minute and second hands).
        f. The clock hands should all be set at 12:00 o’clock whenever the program starts and time simulation runs independent of the host system time.
        g. Place a display area below the wall clock to be used for showing the most recent task(s). Every new due task overwrites any task displayed.
        h. Periodically post current time and colors of the three UI sections (refer (iii) b, (iii) c and (iii) d above) to the API to query if an event is happening at that particular time. For every task due retrieved from the API, print the returned message on the display area and update the associated section color.
        i. Strategically, place a report button that when clicked, retrieves a detailed report from the API of every event logged since the program was started (sample report given below).
        j. The UI shall NOT directly access the data storage, but depend on the API to retrieve the current task(s) and the logged tasks’ report.

    iv. ;BACKEND API
        a. Logs actual time the program was started (sample provided below)
        b. Accepts current time and the current colors of the three sections (refer (iii) b, (iii) c and (iii) d above) from the wall clock.
        c. If some given task(s) should be carried out at the received time,
            i. Log the program-based task(s) time, task(s) type, task(s) message, actual time (sample provided below)
            ii. Respond with a display message of the current due task(s) with respect to the time received from the wall clock. (sample provided)
            iii. For each task, generate and respond with new color(s) for the appropriate section(s) as noted in (iii) b, (iii) c and (iii) d above. The new color MUST be different from the previous color.

```

## Sample Report:

| Program Time | Event  |                  Message | Actual Time | Display Message (sent to UI for display |
| ------------ | :----: | -----------------------: | ----------: | --------------------------------------: |
| 12:00:30     | START  |         Start 16 servers |  10:00:30am |             12:00:30 - start 16 servers |
| 12:00:40     |  STOP  |          Stop 10 servers |  10:00:40am |              12:00:40 - stop 10 servers |
| 12:00:50     | REPORT | Report 6 servers running |  10:00:50am |  12:00:50 - report 6 servers running 30 |
| 12:01:00     | START  |         Start 14 servers |  10:01:00am |             12:01:00 - start 14 servers |
| 12:01:20     |  STOP  |          SStop 5 servers |  10:01:20am |              112:01:20 - stop 5 servers |
| 12:01:30     | START  |         Start 15 servers | 110:01:30am |              2:01:30 - start 15 servers |

**NB: remember the wall clock always starts at 12:00 o’clock and servers are a random integer**

## Setup/Installation Requirements

- Clone the [Onfon Event Tracker](https://github.com/Sundaybrian/onfon-event-tracker)\*\* `cd onfon`
- Navigate to the backend `cd backend` run `npm install` to install all dependencies
- Navigate to frontend `cd ..` then `cd frontend` and run `npm install` to install all frontend dependencies
- open two terminals one for the frontend and the other for the backend
- `npm start` to launch the react frontend
- `npm run dev` to launch the backend
- once the socket connection is formed between the front and back, the timer will be launched, and the program starts
- consequently you can read on [concurrently](https://www.npmjs.com/package/concurrently) and try to run the whole backend and frontend with one terminal

## APis

- The local server will be on port 5000 `https://localhost:5000/api`. Already prefixed for the frontend, so all apis will just start form `/api` e.g with axios`await axios.get("/api/check-for-task)`
- endpoints include /api/check-for-task, /api/create-supervisor, /api/create-logs, /api/fetch-logs articles,

## API Documentation

1. Create a supervisor[POST]<br/>
   `http://localhost:5000/api/create-supervisor`

   ```js {
     "_id": "supervisor",
     "totalServersCount": 0,
     "totalServersRunning": 0,
     "totalStopCount": 0,
     "totalStartCount": 0,
     "actualProgramTIme": "2020-06-23T12:10:07.538Z" // will be autogenerated in the backend,no need to pass it as post obj
   }
   ```

2) Create logs [POST]<br/>
   `http://localhost:5000/api/create-logs/`

   ```js
   // the program will auto-generate the logs once an event is fired up
   {
   ,
      "event": "start",
      "message": "start 11 servers",
      "actualTime": "2020-06-23T12:10:07.538Z",
      "displayMessage": "2020-06-23T12:10:07.538Z start 11 servers"
     }

   ```

3) Fetch Logs[GET]<br/>
   `http://localhost:5000/api/fetch-logs/`
   <br/>

   ```js
   // example response for the logs
   [
     {
       _id: "5ef200b26943be0fca140113",
       programTime: "2020-06-23T12:10:07.538Z",
       event: "start",
       message: "start 11 servers",
       actualTime: "2020-06-23T12:10:07.538Z",
       displayMessage: "2020-06-23T12:10:07.538Z start 11 servers",
     },
     {
       _id: "5ef2046f3a1c1c139379d1f8",
       programTime: "2020-06-23T12:10:07.538Z",
       event: "start",
       message: "start 11 servers",
       actualTime: "2020-06-23T12:10:07.538Z",
       displayMessage: "2020-06-23T12:10:07.538Z start 11 servers",
     },
     {
       _id: "5ef204723a1c1c139379d1f9",
       programTime: "2020-06-23T12:10:07.538Z",
       event: "start",
       message: "start 11 servers",
       actualTime: "2020-06-23T12:10:07.538Z",
       displayMessage: "2020-06-23T12:10:07.538Z start 11 servers",
     },
     {
       _id: "5ef51d8dc3f3d228f29c016d",
       programTime: "12:02:20",
       event: "START",
       message: "START 18 servers",
       actualTime: "0:56:28",
       displayMessage: "12:02:20START 18 servers",
     },
     {
       _id: "5ef51d8dc3f3d228f29c016e",
       programTime: "12:02:21",
       event: "START",
       message: "START 18 servers",
       actualTime: "0:56:29",
       displayMessage: "12:02:21START 18 servers",
     },
     {
       _id: "5ef51dbdc3f3d228f29c016f",
       programTime: "12:03:08",
       event: "START",
       message: "START 13 servers",
       actualTime: "0:57:16",
       displayMessage: "12:03:08START 13 servers",
     },
     {
       _id: "5ef52052fdfcd82aa7403bb9",
       programTime: "12:00:22",
       event: "START",
       message: "START 17 servers",
       actualTime: "1:8:17",
       displayMessage: "12:00:22START 17 servers",
     },
     {
       _id: "5ef52052fdfcd82aa7403bba",
       programTime: "12:00:22",
       event: "START",
       message: "START 17 servers",
       actualTime: "1:8:17",
       displayMessage: "12:00:22START 17 servers",
     },
     {
       _id: "5ef52168290f402b10691e5f",
       programTime: "12:01:12",
       event: "START",
       message: "START 14 servers",
       actualTime: "1:12:56",
       displayMessage: "12:01:12START 14 servers",
     },
   ];
   ```

4. Fetch a supervisor [GET]<br/>
   `http://localhost:5000/api/fetch-supervisor/:id`
   <br/>

   ```js
   // returns a matching supervisor obj
   {
     "_id": "supervisor",
     "totalStartCount": 7,
     "totalStopCount": 1,
     "totalServersRunning": 6,
     "actualProgramTime": "2020-06-25T23:31:10.381Z"
   }
   ```

   ```

   ```

5) Check for a task [POST]<br/>
   `http://localhost:3000/api/article/id`
   <br/>

   ```js
   // request parameters
   {
   "programTime":"12:00:19",
   "hourColor":"#fb3",
   "faceColor":"#222",
   "wallColor":"#549ec1"
   }

   // response assuming it found an event
   // the program will gen a diff color as a response
   {
   "result": [
    {
      "programTime": "12:00:19",
      "event": "REPORT",
      "message": "REPORT 6 servers running",
      "actualTime": "3:11:40",
      "displayMessage": "12:00:19 REPORT 6 servers running",
      "_id": "5ef53d3d2955533b0e5a1963"
    }
   ],
   "hour_color": "#579ec1"
   }
   ```

## Technologies Used

- Nodejs
- express
- mongoose
- mongodb
- react
- ionic-angular
- socketio
- axios
- indicative
- bootstrap4.5
- node-cron
- any dependency not mentioned will be in the `package.json`

## Learn More

### License

MIT
