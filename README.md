# saurav-chrome-download-youtube-videos
This project aims to help users build their own simple chrome extension for downloading videos from youtube.
# project-setup:

Run-server-locally:
1. you need to have `node-js` installed locally
2. Run `git clone` to clone the repository
3. `cd` into the repository
4. Run `npm install`
5. Run the server by running `node index.js` into the terminal

Upload extension to chrome:
1. open `chrome://extensions` in the chrome browser
2. set developer mode on
3. click load unpacked and load the `src` directory of this repository
4. After doing so, extension icon button will start to appear in extension place
5. Open any youtube video and click on extension icon
6. fill up the required details and click `Download`
7. Video will be downloaded to `YoutubeDownloader` folder in default downloads directory
