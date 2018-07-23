//Extract only the image names

function getImageNamesFromObject (object) {

   var newArray = [];

   for (var prop in object) {
      var strinWord = prop;
      var isImg = "";

      for (var i=0; i<3; i++) {
         isImg+= prop[i]
      }

      if (isImg === "img") {
         newArray.push(object[prop])
      }
   }   
   
   return newArray
}


var jennyObj = {
   name: "jenny",
   img_40x40: "selfy-ig-profile.png",
   job: 'seamstress',
   age:  28,
   profileActive: false,
   img_40x40: "thumnail-me.jpg",
   img_100x100: "jenny-profile.jpg",
   img_244x244: "frend-kitkat.jpg",
   img_200x200: "penguin-hat.png",
}

var rufusDolanObj = {
   name: "rufus",
   img_50x50: "srs-photo.png",
   job: 'cook',
   age:  48,
   hasFace: false,
   img_100x100: "glamour-shot.png",
   img_300x200: "at-the-game.png",
}

var userImageList2 = getImageNamesFromObject(rufusDolanObj)
//=> ["srs-photo.png", "glamour-shot.png", "at-the-game.png"]
console.log(getImageNamesFromObject(rufusDolanObj))