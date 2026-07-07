import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTMmVA2HmgM8MLrlj31DcYL-xnxFupMGODiWbu1v-iAlyXLV7NTUQ3nNQ2Z3B8dI2QYg9aZbD8nCoBt/pub?output=csv';

export function useSheetData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        const sorted = results.data
          .filter(row => row.Country)
          .sort((a, b) => b.Total - a.Total);
        setData(sorted);
        setLoading(false);
      }
    });
  }, []);

  return { data, loading };
}   