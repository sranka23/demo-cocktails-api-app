export const urls = {
  searchByName: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
  searchByCategory: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=",
  searchByInitial: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=",
  searchByType: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=",
  searchByIngredient:
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=",
  lists: {
    ingredient: "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
    category: "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
  },
  getDrinkDetail: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
};

export const baseURL = process.env.PUBLIC_URL || "";

export const getUrl = (key, value) => {
  switch (key) {
    case "name":
      return `${urls.searchByName}${value}`;
    case "category":
      return `${urls.searchByCategory}${value}`;
    case "initial":
      return `${urls.searchByInitial}${value}`;
    case "type":
      return `${urls.searchByType}${value}`;
    case "ingredient":
      return `${urls.searchByIngredient}${value}`;
    default:
      return ``;
  }
};
