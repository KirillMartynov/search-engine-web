Installation steps.

# Prerequisites.
You need to have installed Node.js v6.x. and npm v3.x if they are not already installed.


# Configuring REST service.
This application uses another server where backend logic is implemented ("search-engine" project)
To make it work you need to configure proxy.config.json file 
and change target property to point it to real server.
The default property is "target":"http://localhost:8093"
That means that REST service with backend logic runs at localhost at port 8093.
Make it to point to correct address of REST service.

# Steps.
1. Open command prompt in project folder.
2. Type in command prompt
   npm install
3. After step 2 is finished type in command prompt
   npm start
4. After step 3 open your browser and type in in address bar 
   http://localhost:4200
   The start page should be opened

# Problems.
In case some problems arised at step 3-4 do the following:
1. Delete content of node_modules folder in project folder.
2. Run command prompt and type
   npm cache clean
3. Repeat section "Steps".
