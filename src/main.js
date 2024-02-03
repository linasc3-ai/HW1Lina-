/**
 * In this file, the only thing you need to do is to read the file
 * and call the functions on the COVID records
 * all functions should be defined in functions.js
 */

// TODO: Import csv parsing and file reading modules

import fs from 'fs'; // built-in Node.js file reader
import { parse } from 'csv-parse/sync';

const PATIENT_INFO_FILE = './data/PatientInfo.csv';

// TODO: import functions from `functions.js`

import {mergeLocation, mostConfirmedCases, averageRecoveryTime, percentages } from './functions.js';

// DATASET link: https://www.kaggle.com/kimjihoo/coronavirusdataset?select=PatientInfo.csv
// (already included in the `data` folder)

// TODO: read the csv file
// hint: use `{ columns: true, skip_empty_lines: true }` as options for `parse` call
// check the `csv-parse` docs for usage examples! https://csv.js.org/parse/

// package converts CSV text input into arrays or objects by implementing Node.js stream API 

// const parser = fs.createReadStream(PATIENT_INFO_FILE)
//   .pipe(parse({
//     columns: true,         
//     skip_empty_lines: true 
//   }));

//   const data = []; // empty array to hold the data 

//   parser.on('readable', function () {
//     let line;
//     while (line = parser.read()) {
//         data.push(line);
//     }});

const patientCsv = fs.readFileSync(PATIENT_INFO_FILE);
const records = parse(patientCsv, {
  columns: true,
  skip_empty_lines: true,
});

// TODO: call functions on parsed data

// parser.on('end', function () {
    // when parsing finished, call imported functions 
    mergeLocation(records);
    mostConfirmedCases(records); 
    averageRecoveryTime(records); 
    percentages(records); 

