function jokeFacade() {
  function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }

  const getJokes = () => {
    return fetch("http://localhost:8080/jokeFetcher/api/jokes").then(
      handleHttpErrors
    );
  };

  return {
    getJokes
  };
}

export default jokeFacade;
