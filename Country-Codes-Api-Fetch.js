async function getCountryName(str) {
  async function getData(pageNr) {
    const root = "https://jsonmock.hackerrank.com/api/countries?page=";
    let arr = [];
    let countryName = null;
    let currentPage = null;

    await fetch(root + pageNr)
      .then((response) => response.json())
      .then((data) => {
        arr = [...data.data];
        currentPage = Number(data.page);
      });

    for (const country of arr) {
      if (country.alpha2Code === str) {
        countryName = country.name;
      }
    }

    if (countryName === null) {
      getData(currentPage + 1);
    } else {
      console.log(countryName);
      return countryName;
    }
  }
  getData(1);
}

console.log(getCountryName("PT"));
