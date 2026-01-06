export const HeaderByRole = {
  DEFAULT: [
    {
      id: 'services',
      label: 'Serviços',
    },
    {
      id: 'about',
      label: 'Sobre',
    },
    {
      id: 'for-owners',
      label: 'Para Tutores',
    },
    {
      id: 'for-caregivers',
      label: 'Para Cuidadores',
    },
  ],

  OWNER: [
    {
      id: 'services',
      label: 'Serviços',
    },
    {
      id: 'pets',
      label: 'Meus Pets',
    },
    {
      id: 'orders',
      label: 'Meus Pedidos',
    },
    {
      id: 'account',
      label: 'Conta',
    },
  ],

  CAREGIVER: [
    {
      id: 'jobs',
      label: 'Trabalhos',
    },
    {
      id: 'wallet',
      label: 'Carteira',
    },
    {
      id: 'clients',
      label: 'Clientes',
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
    },
  ],
} as const
