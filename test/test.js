var assert = require('assert');
const fs = require('fs');
const { parse } = require('csv-parse/sync');

const PATIENT_INFO_FILE = './data/PatientInfo.csv';

const {
  mergeLocation,
  mostConfirmedCase,
  averageRecoveryTime,
  percentages,
} = require('../src/functions.js');

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

describe('mostConfirmedCase', () => {
  it('should return the correct value', () => {
    if (mostConfirmedCase(records) !== '20s') {
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
