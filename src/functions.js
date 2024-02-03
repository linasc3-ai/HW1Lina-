// IMPLEMENT YOUR FUNCTIONS HERE
// PLEASE USE ES6 features:
// 1) Template Literals instead of string concatenation
// 2) forEach arrow function instead of regular for loop
// 3) use arrow functions for declaration
// 4) use object destructuring

/**
 * Merges `city`, `province`, and `country` together into a single field
 * called `location` with the format "city, province, country"
 *
 * e.g. if a record has city = "c", province = "p", and country = "co",
 * there should be a new field location = "c, p, co"
 *
 * @param {{city: string, province: string, country: string, location?: string}[]} data
 * The array of COVID patient records generated in main.js
 * @returns {{location: string}[]} The same `data` array that was passed in with the location merged as specified
 */
function mergeLocation(data) {
  // TODO: implement
  // hint: You should also delete city, province, and country fields from the records

  // YOU SHOULD NOT INCLUDE AN INVALID CITY IN YOUR LOCATION
  // i.e. if the city is either empty or equals to 'etc', your location should just be "p, co"

  data.forEach((entry) => {

  const {city, province, country} = entry; 


  // delete old entries 

  delete entry.city;
  delete entry.province;
  delete entry.country;
  // !city checks for empty strings, null, or undefined 

  !city || city === "etc" ?  entry.location = `${province}, ${country}` : entry.location =  `${city}, ${province}, ${country}`;
  
    // check if city empty or equal to etc, if so, only combine state and country
    // lower case in case etc is spelled differently 
    // arrow function with template literals and deconstruction 
    // replaced with ternary operator for style guide 

}); 

return(data) 

}

// -------------
// personal testing 
// const testArray = new Array("princeton", "mercer", "USA"); 
// const testArrayEtc = new Array("etc", "mercer", "USA"); 
// const testArrayEmpty = new Array("", "mercer", "USA"); 

// console.log(mergeLocation(testArray)) 
// console.log(mergeLocation(testArrayEtc)) 
// console.log(mergeLocation(testArrayEmpty)) 
// ---------

// TODO: create a function called mostConfirmedCase that decides which
// age group has the most confirmed case
// Input: the array of COVID patient records generated in main.js
// Output: a string of the age group (e.g. '50s')

/**
 * Finds which age group has the most confirmed cases
 *
 * @param {{age:string}[]} data
 * the array of COVID patient records generated in main.js
 * @returns {string} the age group (e.g. '50s')
 */

  function mostConfirmedCases(data) {
    // TODO: implement
    // SKIP RECORDS WHICH DO NOT HAVE AGE GROUP SPECIFIED (empty string)
    // YOU CAN ASSUME THAT THERE ARE NO TIES
  
    // empty object to keep count of ages count 
    const agesCount = {}; 
  
  // iterating over each entry in array of objects,
  // and if age range not in object yet, add the age range of each entry into that empty object and set count to 1 
  // if that entry already in object, update count by 1 
    data.forEach((element) => { 
    if (element.age !== "") {  // do not add empty strings to object 
    if (`${element.age}` in agesCount) {
        agesCount[element.age] += 1;
        } else { 
     agesCount[element.age] = 1 }}}); // = is assignment operator 
   // console.log(agesCount) for debugging 
  
    // iterate through agesCount to pull out highest count 

    let highestAge = 0 // counter 
    let highestAgeRange = "" // keep track of highest ageRange

    for (const ranges in agesCount) { 
      if (agesCount[ranges] > highestAge) {
        highestAge = agesCount[ranges]; 
        highestAgeRange = ranges 
      }
  }

    return(highestAgeRange) // return highest age group 
  }


/**
 * For those who are confirmed and released, this function computes
 * the average recovery time (in days)
 *
 * @param {{confirmed_date: string, released_date: string}[]} data
 * the array of COVID patient records generated in main.js
 * @returns {number} the average time of recovery in days, rounded down to the nearest integer
 */
function averageRecoveryTime(data) {
  // TODO: implement
  // You should do the round down at the last step of computation, specifically use Math.floor
  // SKIP RECORDS WHICH DO NOT HAVE A RELEASED DATE (empty string)
  // YOU CAN USE THE BUILT-IN `Date` CONSTRUCTOR

  let runningTotal = 0 // store recovery times in list 
  let runningPeople = 0 

  data.forEach((element) => { 
    if (element.state === "released" && element.confirmed_date !== "" && element.released_date !== "") {
      const startDate = new Date(`${element.confirmed_date}`);
      const endDate = new Date(`${element.released_date}`);
      // need to convert miliseconds to days 
      const difference = endDate - startDate; 
      const inDays = difference / (1000  * 60  * 60  * 24 );
      runningTotal += inDays;
      runningPeople += 1; 
     }} // only consider released, confirmed, and non-empty release dates });
     );

    const average = Math.floor(runningTotal / runningPeople) 
    return(average)

}

/**
 * Out of all the valid records in the CSV file, this function computes the percentages of:
 *
 * 1) males that are released
 * 2) males that are deceased
 * 3) males that are isolated
 * 4) females that are released
 * 5) females that are deceased
 * 6) females that are isolated
 *
 * @param {{sex: 'male'|'female', status: 'released'|'deceased'|'isolated'}[]} data
 * the array of COVID patient records generated in main.js
 * @returns {{male_released: number, female_released: number, male_isolated: number,
 * female_isolated: number, female_deceased: number, male_deceased: number}}
 * a dictionary of the above format. the percentages should be rounded down to integers (Math.floor)
 */
function percentages(data) {
  // TODO: implement
  // SKIP ALL RECORDS THAT DO NOT HAVE SEX OR STATE SPECIFIED, ALL OTHER RECORDS ARE VALID

  // initialize counters 
  let numMales = 0; 
  let numFemales = 0;
  let numMalesDeceased = 0;
  let numMalesIsolated = 0;
  let numMalesReleased = 0; 
  let numFemalesDeceased = 0;
  let numFemalesIsolated = 0;
  let numFemalesReleased = 0; 

  data.forEach((element) => { 
    if (element.sex && element.state) { // filter for only valid records
      // count number males, count number males released, calculate percentage 
      if (element.sex === "male") { 
        numMales += 1;
        if (element.state === "released") {
          numMalesReleased += 1; 
        }
        if (element.state === "isolated") {
          numMalesIsolated += 1;
        }
        if (element.state === "deceased") 
        {
          numMalesDeceased += 1;
        }
      } else {
        numFemales += 1; 
        if (element.state === "released") {
          numFemalesReleased += 1; 
        }
        if (element.state === "isolated") {
          numFemalesIsolated += 1;
        }
        if (element.state === "deceased") 
        {
          numFemalesDeceased += 1;
        }
      }
    }
    }   
    );
    
    
    // calculate percentages 
    const percentMalesDeceased = Math.floor((numMalesDeceased / numMales)*100); 
    const percentMalesIsolated = Math.floor((numMalesIsolated / numMales)*100); 
    const percentMalesReleased = Math.floor((numMalesReleased / numMales)*100); 
    const percentFemalesDeceased = Math.floor((numFemalesDeceased / numFemales)*100); 
    const percentFemalesIsolated = Math.floor((numFemalesIsolated / numFemales)*100); 
    const percentFemalesReleased = Math.floor((numFemalesReleased / numFemales)*100); 

    // create dictionary
    const percentagesStore = {}; 
    percentagesStore["male_released"] = percentMalesReleased;
    percentagesStore["female_released"] = percentFemalesReleased;
    percentagesStore["male_isolated"] = percentMalesIsolated;
    percentagesStore["female_isolated"] = percentFemalesIsolated; 
    percentagesStore["male_deceased"] = percentMalesDeceased;
    percentagesStore["female_deceased"] = percentFemalesDeceased;

    return(percentagesStore);

}

// TODO: export your functions HERE
export { mergeLocation, mostConfirmedCases, averageRecoveryTime, percentages };



