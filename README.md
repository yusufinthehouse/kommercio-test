# Kommercio Test #

## How to run ##
1. run `npm install` 
2. run `npm start`
3. call the api from *** http://localhost:3000/ ***
4. make sure if content type header is `application/json` or call api with x-www-for-urlencoded before do request 

## Sample POST body for Create Product ##

### Header ###

Content-Type: "spplication/json"

### Body ###

{	
	"name" : "testing",
	"price": 2000
}