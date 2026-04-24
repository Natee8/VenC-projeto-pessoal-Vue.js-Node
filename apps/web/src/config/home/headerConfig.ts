export const HeaderByRole = {
  DEFAULT: [
    {
      id: "services",
      label: "Serviços",
      to: "/",
    },
    {
      id: "about",
      label: "Sobre",
      to: "/About",
    },
    {
      id: "for-owners",
      label: "Para Tutores",
      to: "/for-owners",
    },
    {
      id: "for-caregivers",
      label: "Para Cuidadores",
      to: "/for-caregivers",
    },
  ],

  OWNER: [
    {
      id: "services",
      label: "Serviços",
      to: "/",
    },
    {
      id: "pets",
      label: "Meus Pets",
      to: "/",
    },
    {
      id: "orders",
      label: "Meus Pedidos",
      to: "/",
    },
    {
      id: "account",
      label: "Conta",
      to: "/",
    },
  ],

  CAREGIVER: [
    {
      id: "jobs",
      label: "Trabalhos",
      to: "/",
    },
    {
      id: "wallet",
      label: "Carteira",
      to: "/",
    },
    {
      id: "clients",
      label: "Clientes",
      to: "/",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      to: "/",
    },
  ],
} as const;
