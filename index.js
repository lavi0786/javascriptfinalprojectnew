'use strict';

const mockData = require('./mockData.js').data;
const prompt = require('prompt-sync')();

// Your code here
const profile = {
    first_name: '',
    last_name: '',
    age:0,
    gender: '',
    gender_interest: '',
    location: '',
    min_age_interest: 0,
    max_age_interest: 0
  };


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

// Ensure max_age_interest is greater than or equal to min_age_interest
while (Number(profile.max_age_interest) < Number(profile.min_age_interest)) {
  console.log("Maximum age interest cannot be less than minimum age interest.");
  profile.max_age_interest = prompt(questions[7]);
}

// Display the profile
console.table(profile);

 //match with mockdata       
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
  
     
  
          
          