Part I
Use the following object for this set of questions:

// var users = [
// {
//   username: "larry",
//   email: "larry@foo.com",
//   yearsExperience: 22.1,
//   favoriteLanguages: ["Perl", "Java", "C++"],
//   favoriteEditor: "Vim",
//   hobbies: ["Fishing", "Sailing", "Hiking"],
//   hometown: {
//     city: "San Francisco",
//     state: "CA"
//   }
// },
// {
//   username: "jane",
//   email: "jane@test.com",
//   yearsExperience: 33.9,
//   favoriteLanguages: ["Haskell", "Clojure", "PHP"],
//   favoriteEditor: "Emacs",
//   hobbies: ["Swimming", "Biking", "Hiking"],
//   hometown: {
//     city: "New York",
//     state: "NY"
//   }
// },
// {
//   username: "sam",
//   email: "sam@test.com",
//   yearsExperience: 8.2,
//   favoriteLanguages: ["JavaScript","Ruby", "Python", "Go"],
//   favoriteEditor: "Atom",
//   hobbies: ["Golf", "Cooking", "Archery"],
//   hometown: {
//     city: "Fargo",
//     state: "SD"
//   }
// },
// {
//   username: "anne",
//   email: "anne@test.com",
//   yearsExperience: 4,
//   favoriteLanguages: ["C#", "C++", "F#"],
//   favoriteEditor: "Visual Studio Code",
//   hobbies: ["Tennis", "Biking", "Archery"],
//   hometown: {
//     city: "Albany",
//     state: "NY"
//   }
// },
// {
//   username: "david",
//   email: "david@test.com",
//   yearsExperience: 12.5,
//   favoriteLanguages: ["JavaScript", "C#", "Swift"],
//   favoriteEditor: "Sublime Text",
//   hobbies: ["Volunteering", "Biking", "Coding"],
//   hometown: {
//     city: "Los Angeles",
//     state: "CA"
//   }
// }
// ]


Write a function called printEmails which console.log's each email for the users.
printEmails()
// larry@foo.com
// jane@test.com
// sam@test.com
// anne@test.com
// david@test.com

function printEmails(users) {
  users.forEach(function(email){
    console.log(user.email);
  })
}

Write a function called printHobbies which console.log's each hobby for each user.
printHobbies()
// "Fishing", 
// "Sailing", 
// "Hiking",
// "Swimming", 
// "Biking", 
// "Hiking",
// "Golf", 
// "Cooking", 
// "Archery",
// "Tennis", 
// "Biking", 
// "Archery",
// "Volunteering", 
// "Biking", 
// "Coding",

function printHobbies(users){
  users.forEach(function(user){
    users.hobbies.forEach(function(hobby){
        console.log(hobbies);
    });
  });
}

Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in
findHometownByState("CA")
/*/
{
    username: "larry",
    email: "larry@foo.com",
    years_experience: 22.1,
    favorite_languages: ["Perl", "Scala", "C++"],
    favorite_editor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
        city: "San Francisco",
        state: "CA"
    }
}
/*/

function findHometownByState(state){
  return users.reduce(function(user){
    if (user.hometown.state === state){
      return user;
    }
  });
}

  // for (var i = 0, i < users.length; i++){
  //   if (user[i].hometown.state === state) {
  //     return user;
  //   }
  // }


Write a function called allLanguages which returns an array of all of the unique values
allLanguages()
// ["Perl", "Scala", "C++","Haskell", "PHP","JavaScript","Ruby", "Python", "Go","C#", "F#", "Swift"]

function allLanguages(users){
  users.reduce(function(languages, user){
    for (var i = 0; i < user.favorite_languages.length; i++){
        if (!user.favorite_languages[i]) {
          languages.user.favorite_languages[i] = true;
          return languages
        }
    }
  },{});
}

// var languages = users.favorite_languages
// for (var i = 0; i < users.length; i++){
//   for (var j = 0; j < languages.length; j++) {
//     put the language into an object..........
//   }
// }




Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in
hasFavoriteEditor("Sublime Text") // true
hasFavoriteEditor("Eclipse") // false


function hasFavoriteEditor(editor){
  return users.some(function(user){
      return user.favoriteEditor === editor;
  });
}

// user.favoriteEditor



Write a function called findByUsername which takes in a string and returns an object in the users array that has that username
findByUsername("david") 
/*/
{
    username: "david",
    email: "david@test.com",
    years_experience: 12.5,
    favorite_languages: ["JavaScript", "C#", "Swift"],
    favorite_editor: "Sublime Text",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
        city: "Los Angeles",
        state: "CA"
    }
}
/*/


function findByUsername(str){
  return users.find(function(user){
    return user.username === str;
  });
}

// function findByUsername(str) {
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].username === str) {
//       return users[i];
//     }
// }
// } 




Part II
Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).
vowelCount("incredible")
// {i:2, e: 2}
vowelCount("awesome")
// {a:1, e:2, o:1}


//Not working
function vowelCount(str){
  return str.split('').reduce(function(obj, letter, index){
    for (letter in obj) {
      obj[letter] ++;
    }
    return obj;
  }, {a:0, e:0, i:0, o:0, u:0});
}


function vowelCount(str){
  var obj = {a:0, e:0, i:0, o:0, u:0};
  for (var i = 0; i < str.length; i++) {
    for (str[i] in obj) {
      obj.[str[i]] ++;
    }
  }
  return obj;
}


Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function).
removeVowels("amazing") // ["m","z","n","g"]
removeVowels("fun") // ["f","n"]
removeVowels("silly") // ["s","l","l","y"]

function removeVowels(str){
  var vowel = ["a","e","i","o","u"];
  var removed = [];
  str.split("").forEach(function(letter){
    if (vowel.indexOf(letter) === -1) {
      removed.push(letter)
    }
  })
  return removed;
}

// function removeVowels(str){
//   var vowel = ["a","e","i","o","u"];
//   var removed = [];
//   for (var i = 0; i < str.length; i++) {
//     if (vowel.indexOf(str[i]) === -1) {
//       removed.push(str[i])
//     }
//   }
//   return removed;
// }

