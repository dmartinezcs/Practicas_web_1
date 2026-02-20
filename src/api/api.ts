import type{ ApiResponse } from "../types/Character";

export const BASE_URL = "https://swapi.dev/api";

export const PEOPLE_ENDPOINT = `${BASE_URL}/people/`;

export const fetchCharacters = async (
  url: string
): Promise<ApiResponse> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error fetching characters");
  }

  return response.json();
};