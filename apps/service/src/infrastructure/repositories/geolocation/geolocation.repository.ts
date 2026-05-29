import { ICordinates } from "./types/cordinates.js";
import { GeocodingBRResponse } from "./types/responseAPI.js";

export class GeolocationService {
  private readonly apiKey = process.env.GEOCODING_BR_API_KEY;

  async getCoordinatesByCep(
    cep: string | undefined,
  ): Promise<ICordinates | null> {
    try {
      if (!cep) {
        console.warn("CEP não informado");
        return null;
      }

      const cleanCep = cep.replace(/\D/g, "");

      const response = await fetch(
        `https://api.geocodingbrasil.com/v1/geocode?cep=${cleanCep}`,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        console.warn("Geolocation API falhou:", response.status);
        return null; // 👈 fallback silencioso
      }

      const data = (await response.json()) as GeocodingBRResponse;

      if (!data.location) {
        return null;
      }

      return {
        latitude: data.location.lat,
        longitude: data.location.lng,
      };
    } catch (error) {
      console.error("Erro no GeolocationService:", error);
      return null; // 👈 fallback final
    }
  }
}
