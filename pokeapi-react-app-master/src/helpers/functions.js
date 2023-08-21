export const stripPageNumberFromQuery = (search) => {
  const query = new URLSearchParams(search);

  return Number(query.get('page'));
};

export const getNumberOfPages = (count) => Math.ceil(count / 20);

export const stripIdFromUrl = (item) => item.id || Number(item.url.match(/(?<=\/)\d+(?=\/)/)[0]);

export const getFavouritesFromLocalStorage = () => JSON.parse(localStorage.getItem('favourites')) || [];

export const saveFavouritesToLocalStorage = (favourites) => {
  localStorage.setItem('favourites', JSON.stringify(favourites));
};
