import { v4 as uuid } from 'uuid';

export function saveHolidays(data) {
  let holidays = localStorage.getItem('holidays');
  const holidayId = uuid();
  const newHoliday = {
    id: holidayId,
    start: data.start,
  };
  if (!holidays) {
    holidays = [];
  } else {
    holidays = JSON.parse(holidays);
  }
  holidays.push(newHoliday);
  localStorage.setItem('holidays', JSON.stringify(holidays));
}

export function loadHolidays() {
  const holidays = JSON.parse(localStorage.getItem('holidays'));
  if (holidays && holidays.length > 0) {
    return holidays;
  }
  return '';
}

export function saveSettings(data) {
  localStorage.setItem('settings', JSON.stringify(data));
}

export function loadSettings() {
  const settings = JSON.parse(localStorage.getItem('settings'));
  if (settings && settings.length > 0) {
    return settings;
  }
  return '';
}
