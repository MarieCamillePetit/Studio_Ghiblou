import { useQueries } from "@tanstack/react-query";

export const fetchGhibli = async () => {
  const result = await fetch(
    `https://studio-ghibli-films-api.herokuapp.com/api/`
  );
  const json = await result.json();
  return json;
};

export const useGhibloux = (ghibloux: string[]) => {
  const userQueries = useQueries({
    queries: ghibloux.map((index) => {
      return {
        queryKey: ["ghiblou", `ghiblou-${index}`],
      };
    }),
  });

  return userQueries;
};
