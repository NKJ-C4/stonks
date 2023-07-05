// This file was created to mock the API response before integrating the alphavantage APIs.
// Keeping it for now as it might come of use
export const mockSearchResults = {
  count: 4,
  result: [
    {
      description: "APPLE INC",
      displaySymbol: "AAPL",
      symbol: "AAPL",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "AAPL.SW",
      symbol: "AAPL.SW",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.BE",
      symbol: "APC.BE",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.DE",
      symbol: "APC.DE",
      type: "Common Stock",
    },
  ],
};

export const mockCompanyDetails = {
  country: "US",
  currency: "USD",
  exchange: "NASDAQ/NMS (GLOBAL MARKET)",
  ipo: "1980-12-12",
  marketCapitalization: 1415993,
  name: "Apple Inc",
  phone: "14089961010",
  shareOutstanding: 4375.47998046875,
  ticker: "AAPL",
  weburl: "https://www.apple.com/",
  logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
  finnhubIndustry: "Technology",
};

export const mockStockQuote = {
  c: 261.74,
  h: 263.31,
  l: 260.68,
  o: 261.07,
  pc: 259.45,
  t: 1582641000,
};

export const mockHistoricalData = {
  c: [217.68, 221.03, 219.89],
  h: [222.49, 221.5, 220.94],
  l: [217.19, 217.1402, 218.83],
  o: [221.03, 218.55, 220],
  s: "ok",
  t: [1569297600, 1569384000, 1569470400],
  v: [33463820, 24018876, 20730608],
};

export const rawData = [
  {
    high: 7.18131,
    low: 7.17473,
    open: 7.17819,
    close: 7.18131,
    ts: 1562790960,
  },
  {
    high: 7.17874,
    low: 7.17475,
    open: 7.17874,
    close: 7.17604,
    ts: 1562791020,
  },
  {
    high: 7.19077,
    low: 7.18493,
    open: 7.18684,
    close: 7.19077,
    ts: 1562791080,
  },
  {
    high: 7.1837,
    low: 7.17899,
    open: 7.1792,
    close: 7.18246,
    ts: 1562791140,
  },
  {
    high: 7.18788,
    low: 7.18098,
    open: 7.18338,
    close: 7.18788,
    ts: 1562791200,
  },
  {
    high: 7.20103,
    low: 7.19715,
    open: 7.19778,
    close: 7.19715,
    ts: 1562791260,
  },
  {
    high: 7.21353,
    low: 7.20752,
    open: 7.20873,
    close: 7.21116,
    ts: 1562791320,
  },
];

export const rawData2 = [{
  "high": 7.19571,
  "low": 7.18276,
  "open": 7.18256,
  "close": 7.18751,
  "ts": 1562791070
}, {
  "high": 7.21075,
  "low": 7.20598,
  "open": 7.19465,
  "close": 7.17911,
  "ts": 1562791211
}, {
  "high": 7.17644,
  "low": 7.18271,
  "open": 7.20844,
  "close": 7.20975,
  "ts": 1562791132
}, {
  "high": 7.21274,
  "low": 7.17589,
  "open": 7.19969,
  "close": 7.18052,
  "ts": 1562791229
}, {
  "high": 7.20285,
  "low": 7.18883,
  "open": 7.18305,
  "close": 7.18159,
  "ts": 1562791286
}, {
  "high": 7.19413,
  "low": 7.18322,
  "open": 7.208,
  "close": 7.19237,
  "ts": 1562790981
}, {
  "high": 7.18585,
  "low": 7.20637,
  "open": 7.18125,
  "close": 7.20486,
  "ts": 1562791045
}, {
  "high": 7.20285,
  "low": 7.17552,
  "open": 7.17899,
  "close": 7.20863,
  "ts": 1562790969
}, {
  "high": 7.17836,
  "low": 7.18766,
  "open": 7.17886,
  "close": 7.20881,
  "ts": 1562791278
}, {
  "high": 7.20155,
  "low": 7.18317,
  "open": 7.1791,
  "close": 7.19729,
  "ts": 1562791168
}, {
  "high": 7.20534,
  "low": 7.19865,
  "open": 7.20488,
  "close": 7.20036,
  "ts": 1562790974
}, {
  "high": 7.17515,
  "low": 7.192,
  "open": 7.19816,
  "close": 7.20397,
  "ts": 1562791289
}, {
  "high": 7.20871,
  "low": 7.20303,
  "open": 7.2039,
  "close": 7.20181,
  "ts": 1562790984
}, {
  "high": 7.179,
  "low": 7.18798,
  "open": 7.19133,
  "close": 7.18661,
  "ts": 1562791096
}, {
  "high": 7.17901,
  "low": 7.19015,
  "open": 7.2016,
  "close": 7.21042,
  "ts": 1562791005
}, {
  "high": 7.20462,
  "low": 7.1814,
  "open": 7.19819,
  "close": 7.1953,
  "ts": 1562791141
}, {
  "high": 7.20808,
  "low": 7.20544,
  "open": 7.20274,
  "close": 7.18391,
  "ts": 1562791200
}, {
  "high": 7.20031,
  "low": 7.20191,
  "open": 7.18385,
  "close": 7.18627,
  "ts": 1562791101
}, {
  "high": 7.19069,
  "low": 7.2009,
  "open": 7.19052,
  "close": 7.20651,
  "ts": 1562791290
}, {
  "high": 7.17476,
  "low": 7.19297,
  "open": 7.20514,
  "close": 7.19304,
  "ts": 1562791113
}, {
  "high": 7.19663,
  "low": 7.17661,
  "open": 7.20292,
  "close": 7.19164,
  "ts": 1562791264
}, {
  "high": 7.20878,
  "low": 7.19344,
  "open": 7.18665,
  "close": 7.20177,
  "ts": 1562791302
}, {
  "high": 7.20623,
  "low": 7.20017,
  "open": 7.20636,
  "close": 7.20433,
  "ts": 1562791102
}, {
  "high": 7.21094,
  "low": 7.19635,
  "open": 7.18794,
  "close": 7.1993,
  "ts": 1562790981
}, {
  "high": 7.20478,
  "low": 7.17576,
  "open": 7.18246,
  "close": 7.17683,
  "ts": 1562791107
}, {
  "high": 7.19421,
  "low": 7.19633,
  "open": 7.20197,
  "close": 7.19184,
  "ts": 1562791068
}, {
  "high": 7.20661,
  "low": 7.18941,
  "open": 7.18346,
  "close": 7.18239,
  "ts": 1562791262
}, {
  "high": 7.18865,
  "low": 7.19049,
  "open": 7.18677,
  "close": 7.20913,
  "ts": 1562791178
}, {
  "high": 7.19762,
  "low": 7.19135,
  "open": 7.20077,
  "close": 7.18227,
  "ts": 1562791194
}, {
  "high": 7.19232,
  "low": 7.18863,
  "open": 7.18354,
  "close": 7.19205,
  "ts": 1562791079
}];

export const rawData3 = [
  {
    high: 7.18811,
    low: 7.18127,
    open: 7.18631,
    close: 7.183,
    ts: 1562790720,
  },
  {
    high: 7.21184,
    low: 7.20139,
    open: 7.20139,
    close: 7.21138,
    ts: 1562790780,
  },
  {
    high: 7.21808,
    low: 7.21524,
    open: 7.2168,
    close: 7.21675,
    ts: 1562790840,
  },
  {
    high: 7.19661,
    low: 7.19343,
    open: 7.19633,
    close: 7.1936,
    ts: 1562790900,
  },
  {
    high: 7.18131,
    low: 7.17473,
    open: 7.17819,
    close: 7.18131,
    ts: 1562790960,
  },
  {
    high: 7.17874,
    low: 7.17475,
    open: 7.17874,
    close: 7.17604,
    ts: 1562791020,
  },
  {
    high: 7.19077,
    low: 7.18493,
    open: 7.18684,
    close: 7.19077,
    ts: 1562791080,
  },
  {
    high: 7.1837,
    low: 7.17899,
    open: 7.1792,
    close: 7.18246,
    ts: 1562791140,
  },
  {
    high: 7.18788,
    low: 7.18098,
    open: 7.18338,
    close: 7.18788,
    ts: 1562791200,
  },
  {
    high: 7.20103,
    low: 7.19715,
    open: 7.19778,
    close: 7.19715,
    ts: 1562791260,
  },
  {
    high: 7.21353,
    low: 7.20752,
    open: 7.20873,
    close: 7.21116,
    ts: 1562791320,
  },
];