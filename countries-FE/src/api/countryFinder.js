

export async function getAllCountries() {
  try {
    const allCountriesURL = 'http://localhost:3001/api/all';
    const response = await fetch(allCountriesURL);
    if (!response.ok){
      throw new Error(`http error: ${response.status}`)
          }
    const json = await response.json();
    return json
  } 
  catch(error) {
        console.log(`Could not fetch all countries: ${error}`);
      }   
  }
  
