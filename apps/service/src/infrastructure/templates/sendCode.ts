export const sendCodeEmail = ({
  code,
  userName,
}: {
  code: string;
  userName?: string;
}) => {
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
            src="/apps/web/public/assets/logos/logoWhite.svg"
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
            Use o código abaixo para redefinir sua senha:
          </p>

          <div
            style="
              margin: 25px 0;
              font-size: 32px;
              font-weight: bold;
              letter-spacing: 8px;
              color: #1e1e2f;
            "
          >
            ${code}
          </div>

          <p style="color: #999; font-size: 12px;">
            Esse código expira em 10 minutos.
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
