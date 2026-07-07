export const sendCodeEmail = ({
  code,
  token,
  userName,
}: {
  code: string;
  token?: string;
  userName?: string;
}) => {
  const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:5173";
  const resetLink = token ? `${frontendUrl}/reset-password?token=${token}` : "";

  return `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden;"
    >
      <tr>
        <td style="background-color: #1e1e2f; text-align: center; padding: 20px;">
          <img
          //trocar por clounairy
            src="https://res.cloudinary.com/ditaon8no/image/upload/v1780401406/logoWhite_om94xd.svg"
            alt="Vencá"
            style="width: 140px;"
          />
        </td>
      </tr>

      <tr>
        <td style="padding: 30px; text-align: center;">
          <h2 style="margin-bottom: 10px; color: #333;">
            Recuperação de senha
          </h2>

          <p style="color: #666; font-size: 14px;">
            Olá ${userName || "usuário"},
          </p>

          <p style="color: #666; font-size: 14px;">
            Enviamos um link para redefinir sua senha para o endereço de e-mail informado (caso ele exista em nosso sistema).
          </p>

          ${resetLink ? `<p style="margin-top: 10px;"><a href="${resetLink}" style="display:inline-block;padding:12px 20px;background:#1e1e2f;color:#fff;border-radius:6px;text-decoration:none;">Redefinir senha</a></p>` : ""}

          <p style="color: #999; font-size: 12px;">
            O link expira em 10 minutos.
          </p>
        </td>
      </tr>

      <tr>
        <td
          style="
            background: #f4f4f4;
            text-align: center;
            padding: 15px;
            font-size: 12px;
            color: #999;
          "
        >
          © 2026 Vencá. Todos os direitos reservados.
        </td>
      </tr>
    </table>
  </div>
  `;
};
