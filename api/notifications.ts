interface NotificationsProps {
  title: string;
  description: string;
  whenNotify: Date;
  type: "conta" | "tarefa";
}

export const Notifications: NotificationsProps[] = [
  {
    title: "Conta a Vencer",
    description: "A conta Aluguel no valor de R$1500 vence em 5 dias.",
    whenNotify: new Date(),
    type: "conta",
  },
  {
    title: "Lavar Louça",
    description: "A tarefa: 'Lavar Louça' esta atrasada ",
    whenNotify: new Date(),
    type: "tarefa",
  },
];
