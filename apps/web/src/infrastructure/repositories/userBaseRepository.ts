import { ApiResponse, RegisterPayload } from "@packages";
import { apiInstance } from "../config/ApiConfig";

/**
 * Payload real de `POST /auth/register`, devolvido por `RegisterUseCase`.
 *
 * Note que NÃO é o `RegisterOutput` de @packages — aquele tipo descreve
 * `{ id, email, cpf, message }`, que a API nunca respondeu. O `message` que o
 * cadastro exibia vinha do envelope, não deste payload.
 */
export type RegisterResult = {
  user: {
    id: number;
    email: string;
    cpf: string;
    profilePhotoUrl?: string | null;
  };
  profile: unknown;
  type?: "OWNER" | "CAREGIVER";
  warnings: string[];
};

export const registerRepository = {
  async register(input: RegisterPayload): Promise<RegisterResult> {
    const formData = new FormData();

    Object.entries(input).forEach(([key, value]) => {
      if (value === undefined || value === null) return;

      if (value instanceof File) {
        formData.append(key, value);
        return;
      }

      if (typeof value === "object") {
        formData.append(key, JSON.stringify(value));
        return;
      }

      formData.append(key, String(value));
    });

    const { data: body } = await apiInstance.post<ApiResponse<RegisterResult>>(
      "/auth/register",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return body.data;
  },
};
