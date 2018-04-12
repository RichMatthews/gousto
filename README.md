# Cat test notes

1. I had a lot of trouble early on in the test trying to use fetch api with CORS issues and preflight responses
2. Eventually got it working with axios though!
3. Another big issue was converting the xml response to json but eventually found a good npm module as it's historically
difficult to do xml => json
4. I focused more on the functionality than on the css as I believe that is a more important skill
5. I am just toggling the likes between 0 and 1 at the moment. my solution is easy to extend though and if you
had a database of cats with the number of likes attributed to each one then my solution would be able to toggle it between
current number and current number + 1 (similar to any like platform e.g. instagram)
6. I was thinking at times to use Redux but deemed it might be overkill for this application
7. was an enjoyable test to do!

### running the app
1. npm i
2. npm run start
3. npm run watch (in another terminal window)
