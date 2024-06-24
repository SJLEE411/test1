# Test 1 Readme.md

## Set up
1.  Clone the repository
2.  Run `npm install`to install dependencies
3.  Start the server with `node src/index.js`

Below are screen shots of Postman, testing endpoints

Lend a book testing
![alt text](assests/lend-book.png)
Return a book testing
![alt text](assests/return-book.png)
Overdue testing
![alt text](assests/lend-for-overdue.png)
![alt text](assests/overdue.png)

Return and sequences ( returned then return again, return then checks overdue)
![alt text](assests/return-book2.png)
return again
![alt text](assests/return2-nobook.png)
overdue checking after return
![alt text](assests/return2-overdue.png)

Lend and no overdue
![alt text](assests/lend2.png)
overdue checks
![alt text](assests/lend-no-overduecheck.png)

console logs during testing:

(base) sangjunelee@SangjuncBookPro test1 % node src/index.js
Server is running on port 3001
GET /
OPTIONS /api/users/lend
OPTIONS /api/users/return
OPTIONS /api/users/lend
OPTIONS /api/users/lend
POST /api/users/lend
POST /api/users/lend
POST /api/users/lend
GET /api/users/check-overdue
GET /api/users/check-overdue
GET /api/users/check-overdue
GET /api/users/check-overdue
GET /api/users/check-overdue
GET /api/users/check-overdue
GET /api/users/check-overdue?username=navid%0A
GET /api/users/check-overdue%0A
POST /api/users/lend%0A
POST /api/users/lend
POST /api/users/lend
POST /api/users/return
POST /api/users/lend
GET /api/users/check-overdue?username=sangjune
POST /api/users/return
POST /api/users/return
GET /api/users/check-overdue?username=sangjune
POST /api/users/lend
GET /api/users/check-overdue?username=sangjune