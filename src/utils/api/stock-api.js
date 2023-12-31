const basePath = "https://www.alphavantage.co";

/**
 * Searches best stock matches based on a user's query
 * @param {string} query - The user's query, e.g. 'fb'
 * @returns {Promise<Object[]>} Response array of best stock matches
 */
export const searchSymbol = async (query) => {
  const url = `${basePath}/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);

  if (!response) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

/**
 * Fetches the latest quote of a given stock
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @returns {Promise<Object>} Response object
 */
export const fetchQuote = async (stockSymbol) => {
  const url = `${basePath}/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);

  if (!response) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

/**
 * Fetches historical data of a stock (to be displayed on a chart)
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @param {string} filter - Resolution of timestamps. Supported resolution includes: 1, 5, 15, 30, 60, D, W, M
 * @returns {Promise<Object>} Response object
 */
export const fetchHistoricalData = async (
  stockSymbol,
  filter
) => {
  const url = filter === "1W" || filter === "1M" ? 
  `${basePath}/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${process.env.REACT_APP_API_KEY}`
  :
  `${basePath}/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);

  if (!response) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  
  return await response.json();
};
