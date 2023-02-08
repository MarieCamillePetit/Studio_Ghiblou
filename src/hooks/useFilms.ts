import { useQuery } from "@tanstack/react-query";

export const fetchGhibli = async () => {
  const result = await fetch(
    `https://studio-ghibli-films-api.herokuapp.com/api/`
  );
  const json = await result.json();
  return json;
};


export const useFilms = () => {
  const result = useQuery(
    ["films"],
    fetchGhibli,
  )
  return result;
};
