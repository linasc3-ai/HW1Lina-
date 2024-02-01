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

  return data;
}

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
}

// TODO: export your functions HERE
