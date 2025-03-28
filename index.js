'use strict';

const mockData = require('./mockData.js').data;
const prompt = require('prompt-sync')();

// Your code here
const profile = {
    first_name: '',
    last_name: '',
    age: '',
    gender: '',
    gender_interest: '',
    location: '',
    min_age_interest: '',
    max_age_interest: ''
  };

let firstName = '';
let lastName = '';
let age = '';
let gender = '';
let genderInterest = '';
let location = '';
let minAgeInterest = '';
let maxAgeInterest = '';

// const questions

const questions = [
    "What is your first name?",
    "What is your last name?",
   "What is your age?",
    "What is your gender? (F, M, X)",
    "Which genders are you interested in dating? (F, M, X)",
    "Where do you live? (rural or city)",
    "What is the minimum age you are interested in?",
    "What is the maximum age you are interested in?"
  ];
//   let i = 0;
//   const answers = [];
//     for (const question of questions){
//         const answer = prompt(question);
//         answers.push(answer);
       
//       while(i === 0 )
//       {
//        firstName = answers[0];    
//         while(firstName === '')
//         {
//            console.log("Please enter your first name.");
//            firstName = prompt("Enter your first name : ");
//         }
//         profile.first_name = firstName;
//         i++;
//       }
       
//       while(i === 1 )
//       {   
//         lastName = answers[1];       
//         while(lastName === '' ){
//           console.log("Please enter your last name");
//           lastName = prompt("Enter your last name : ");
//         }
//         profile.last_name = lastName;
//         i++;
//       }
      
      
//         age = answers[2];       
//         while(age !== undefined)
//         {
//         while (isNaN(age) || Number(age) < 18 || age === '') {
//           console.log("Please enter a valid age (a number higher than 18).");
//           // Prompt the user for input again
//            age = prompt("Enter your age: "); 
//           }
//         }
//       profile.age = age;
      
      
//       gender = answers[3];     
//       while(gender !==undefined)
//       {
//         while(gender === '' || gender !== 'F' && gender !== 'M' && gender !== 'X')
//         {
//           console.log("Please enter your gender (F, M, X).")
//           gender = prompt("Enter your gender(F,M,X): "); 
//         }
//       }
//         profile.gender = gender;
      
             
//         genderInterest = answers[4];    
//       while(genderInterest !== undefined)
//       {
//         while(genderInterest === '' || genderInterest !== 'F' && genderInterest !== 'M' && genderInterest !== 'X')
//         {
//           console.log("Please enter the gender you are interested in (F, M, X).");
//           genderInterest = prompt("Enter your the gender you are interested in(F,M,X): "); 
//         }
//       }
//         profile.gender_interest = genderInterest;
      
              
//         location = answers[5];  
//          while(location !== undefined)
//       {
//         while(location === '' || location !== 'rural' && location !== 'city')
//         {
//           console.log("Plese enter your location (rural or city).");
//           location = prompt("Enter your location(city or rural): ");
//         }
//       }
//         profile.location = location;
          
         
//         minAgeInterest = answers[6];    
        
//        while(minAgeInterest !== undefined) 
//         {  
//         while(minAgeInterest === '' || Number(minAgeInterest) < 18 || isNaN(minAgeInterest))
//         {
//           console.log("Please enter the minimum age you are interested in or a number higher than 18.");
//           minAgeInterest = prompt("Enter the minimum age you are interested in: ");
//         }
//       }
//         profile.min_age_interest = minAgeInterest;

        
       
//         maxAgeInterest = answers[7];    
        
//       while(maxAgeInterest !== undefined)
//       {
//         while(maxAgeInterest === '' || Number(maxAgeInterest) < 18 || Number(maxAgeInterest) < Number || isNaN(maxAgeInterest))
//         {
//           console.log("Please enter the maximum age you are interested in or a number higher than 18.");
//           maxAgeInterest = prompt("Enter the maximum age you are interested in : ");
//         }
//       }
//         profile.max_age_interest = maxAgeInterest;
//     }
    
    
//           //console.table(answers);
          
//         console.table(profile);


// First name
while (profile.first_name === '') {
  profile.first_name = prompt(questions[0]);
  if (profile.first_name === '') {
      console.log("Please enter your first name.");
  }
}

// Last name
while (profile.last_name === '') {
  profile.last_name = prompt(questions[1]);
  if (profile.last_name === '') {
      console.log("Please enter your last name.");
  }
}

// Age
while (isNaN(profile.age) || Number(profile.age) < 18 || profile.age === '') {
  profile.age = prompt(questions[2]);
  if (isNaN(profile.age) || Number(profile.age) < 18 || profile.age === '') {
      console.log("Please enter a valid age (a number higher than 18).");
  }
}

// Gender
while (profile.gender !== 'F' && profile.gender !== 'M' && profile.gender !== 'X') {
  profile.gender = prompt(questions[3]);
  if (profile.gender !== 'F' && profile.gender !== 'M' && profile.gender !== 'X') {
      console.log("Please enter your gender (F, M, X).");
  }
}

// Gender interest
while (profile.gender_interest !== 'F' && profile.gender_interest !== 'M' && profile.gender_interest !== 'X') {
  profile.gender_interest = prompt(questions[4]);
  if (profile.gender_interest !== 'F' && profile.gender_interest !== 'M' && profile.gender_interest !== 'X') {
      console.log("Please enter the gender you are interested in (F, M, X).");
  }
}

// Location
while (profile.location !== 'rural' && profile.location !== 'city') {
  profile.location = prompt(questions[5]);
  if (profile.location !== 'rural' && profile.location !== 'city') {
      console.log("Please enter your location (rural or city).");
  }
}

// Minimum age interest
while (isNaN(profile.min_age_interest) || Number(profile.min_age_interest) < 18 || profile.min_age_interest === '') {
  profile.min_age_interest = prompt(questions[6]);
  if (isNaN(profile.min_age_interest) || Number(profile.min_age_interest) < 18 || profile.min_age_interest === '') {
      console.log("Please enter a valid minimum age.");
  }
}

// Maximum age interest
while (isNaN(profile.max_age_interest) || Number(profile.max_age_interest) < 18 || profile.max_age_interest === '') {
  profile.max_age_interest = prompt(questions[7]);
  if (isNaN(profile.max_age_interest) || Number(profile.max_age_interest) < 18 || profile.max_age_interest === '') {
      console.log("Please enter a valid maximum age.");
  }
}

// Display the profile
console.table(profile);

        
        let matches = [];
        for(let person of mockData)
        {
          const ageMatch = person.age >= profile.min_age_interest && person.age <= profile.max_age_interest;
          const theirAgeMatch = profile.age >= person.min_age_interest && profile.age <= person.max_age_interest;
          const genderMatch = person.gender_interest === profile.gender;
          const interestMatch = profile.gender_interest === person.gender;
          const locationMatch = person.location === profile.location;
  
          if (ageMatch && theirAgeMatch && genderMatch && interestMatch && locationMatch) {
              matches.push(person);
          }
      }
  
      console.log(`\nTotal Matches: ${matches.length}`);
      if (matches.length > 0) {
          console.log("Here are your matches:");
        
         for (let i = 0; i < matches.length; i++) {
          let person = matches[i];
          console.log("- " + person.first_name + " " + person.last_name + ", Age: " + person.age + ", Location: " + person.location);
          }
      } else {
          console.log("No matches found.");
      }
  
     
  
          
          