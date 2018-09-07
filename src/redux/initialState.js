const initialState = {
  settings: {
    company: 'Booker',
    name: 'Lucye',
    daysHol: '28',
    bankHols: '8',
    yearStart: '04/2018',
    yearEnd: '03/2019',
    mon: true,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false,
    errors: {},
  },

  holiday: {
    holname: '',
    holstart: '',
    holend: '',
    daysbooked: 0,
    notes: '',
    holList: [],
  },

  summary: {
    daystaken: 5,
    daysremaining: 10,
    yearEnd: '03/2020',
  },
};

export default initialState;
