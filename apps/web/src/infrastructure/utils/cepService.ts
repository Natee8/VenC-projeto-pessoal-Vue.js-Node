// infra/services/cepService.ts
import axios from "axios";

export const cepService = {
  async getAddressByCep(cep: string) {
    const cleanedCep = cep.replace(/\D/g, "");

    if (cleanedCep.length !== 8) return null;

    const { data } = await axios.get(
      `https://viacep.com.br/ws/${cleanedCep}/json/`,
    );

    if (data.erro) return null;

    return data;
  },
};
