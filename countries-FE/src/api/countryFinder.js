
export const getCountries = async (type = '', query = '') => {
    const searchParams = new URLSearchParams({ type, query });
    const requestUrl = `/countries?${searchParams.toString()}`;
  
    const response = await fetch(requestUrl, {
      method: 'GET'
    });
  
    const json = await response.json();
  
    return json;
  };
  
  export const getRegion = async (type) => {
    const requestUrl = `/countries/${type}`;
    const response = await fetch(requestUrl, {
      method: 'GET'
    });
  
    const json = await response.json();
  
    return json;
  };
  
  