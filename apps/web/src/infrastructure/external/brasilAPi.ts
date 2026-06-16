import axios from "axios";
import { CityDTO } from "./types/brasilAPi";

const brasilApiClient = axios.create({
  baseURL: "https://brasilapi.com.br/api",
});

export const brasilApiRepository = {
  async getCitiesByState(uf: string): Promise<CityDTO[]> {
    const { data } = await brasilApiClient.get<CityDTO[]>(
      `/ibge/municipios/v1/${uf}`,
    );

    return data;
  },
};
