function scrapeFacade() {
  function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }

  const getScrape = () => {
    return fetch("http://localhost:8080/webscraper/api/scrape").then(
      handleHttpErrors
    );
  };

  return {
    getScrape
  };
}

export default scrapeFacade;
