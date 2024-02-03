
import  fs  from 'fs'; // built in node file reader 
import { parse }  from 'csv-parse/sync';
import  assert  from 'assert'; 
// const { parse } = import('csv-parse/sync');
// const assert = import('assert'); 

const PATIENT_INFO_FILE = './data/PatientInfo.csv';

import {
  mergeLocation,
  mostConfirmedCases,
  averageRecoveryTime,
  percentages,
} from '../src/functions.js';

let patientCsv = fs.readFileSync(PATIENT_INFO_FILE);
let records = parse(patientCsv, {
  columns: true,
  skip_empty_lines: true,
});

const recordsCopy = parse(patientCsv, {
  columns: true,
  skip_empty_lines: true,
});

describe('mergeLocation', () => {
  it('should return the correct value', () => {
    // records is the student's answer
    mergeLocation(records);

    // recordsCopy is the standard answer
    recordsCopy.forEach((record) => {
      const { city, province, country } = record;
      delete record.city;
      delete record.province;
      delete record.country;

      if (!city || city === 'etc') {
        record.location = `${province}, ${country}`;
      } else {
        record.location = `${city}, ${province}, ${country}`;
      }
    });

    assert.deepEqual(records, recordsCopy);
  });
});

patientCsv = fs.readFileSync(PATIENT_INFO_FILE);
records = parse(patientCsv, {
  columns: true,
  skip_empty_lines: true,
});

describe('mostConfirmedCases', () => {
  it('should return the correct value', () => {
    if (mostConfirmedCases(records) !== '20s') {
      assert.fail('wrong age group returned');
    }
  });
});

patientCsv = fs.readFileSync(PATIENT_INFO_FILE);
records = parse(patientCsv, {
  columns: true,
  skip_empty_lines: true,
});

describe('averageRecoveryTime', () => {
  it('should return the correct value', () => {
    if (averageRecoveryTime(records) !== 13) {
      assert.fail('wrong average recovery time returned');
    }
  });
});

patientCsv = fs.readFileSync(PATIENT_INFO_FILE);
records = parse(patientCsv, {
  columns: true,
  skip_empty_lines: true,
});

describe('percentages', () => {
  it('should return the correct value', () => {
    const answer = {
      male_released: 14,
      female_released: 14,
      male_isolated: 83,
      female_isolated: 84,
      female_deceased: 0,
      male_deceased: 2,
    };
    assert.deepEqual(percentages(records), answer);
  });
});
