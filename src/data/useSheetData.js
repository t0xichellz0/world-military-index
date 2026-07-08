import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTMmVA2HmgM8MLrlj31DcYL-xnxFupMGODiWbu1v-iAlyXLV7NTUQ3nNQ2Z3B8dI2QYg9aZbD8nCoBt/pub?output=csv';

function parseNum(val) {
  if (val === null || val === undefined || val === '') return 0;
  return parseFloat(String(val).replace(',', '.')) || 0;
}

let cachedData = null;

export function useSheetData() {
  const [data, setData] = useState(cachedData || []);
  const [loading, setLoading] = useState(!cachedData);

  useEffect(() => {
    if (cachedData) {
      setData(cachedData);
      setLoading(false);
      return;
    }

    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      complete: (results) => {
        const sorted = results.data
          .filter(row => row.Country)
          .map(row => ({
            Country: row.Country,
            Personnel: parseNum(row.Personnel),
            Arms: parseNum(row.Arms),
            Nuclear: parseNum(row.Nuclear),
            Combat: parseNum(row.Combat),
            Willingness: parseNum(row.Willingness),
            Budget: parseNum(row.Budget),
            Total: parseNum(row.Total),
          }))
          .sort((a, b) => b.Total - a.Total);
        cachedData = sorted;
        setData(sorted);
        setLoading(false);
      }
    });
  }, []);

  return { data, loading };
}