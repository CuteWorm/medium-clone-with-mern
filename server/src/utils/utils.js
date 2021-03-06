
const fs = require('fs');

module.exports = {

   deleteAllAvatars: async (absoluteFolderPath) => {

      try {
         const files = await fs.promises.readdir(absoluteFolderPath);
         const unlinkPromises = files.map(filename => {
            if (![].includes(filename)) {
               console.log(`- Deleting avatar ${filename}`);
               return fs.promises.unlink(`${absoluteFolderPath}/${filename}`);
            }
            return Promise.resolve();
         })

         return Promise.all(unlinkPromises);

      } catch (error) {
         console.log(error);
      }
   },

   isValidUrl: str => {
      var urlRegex =
         '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
      var url = new RegExp(urlRegex, 'i');
      return str && str.length < 2083 && url.test(str);
   },

   randomNumber: max => {
      return Math.floor(Math.random() * Math.floor(max));
   },

   sortDescByCreatedAt: (a, b) => {
      if (a.createdAt < b.createdAt) {
         return 1;
      }
      if (a.createdAt > b.createdAt) {
         return -1;
      }
      return 0;
   },

   getWords: function (str, count = 20) {
      return str.split(/\s+/).slice(0, count).join(" ");
   }

}