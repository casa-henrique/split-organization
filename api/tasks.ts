interface TasksProps {
  title: string;
  description: string;
  importance: "Média" | "Alta" | "Pequena";
  status: "Atrasada" | "Pendente" | "Concluida";
  expireIn: Date;
  assigned: "Henrique" | "Manuela" | "Eduarda" | "Todos";
}

export const tasks: TasksProps[] = [
  {
    title: "Compras",
    description: "aaaa",
    importance: "Alta",
    status: "Pendente",
    expireIn: new Date("04/02/2025"),
    assigned: "Henrique",
  },
  {
    title: "Limpar Geladeira",
    description: "bbbbb",
    importance: "Pequena",
    status: "Atrasada",
    expireIn: new Date("03/29/2025"),
    assigned: "Manuela",
  },
  {
    title: "Lavar louça",
    description: "cccccccc",
    importance: "Média",
    status: "Concluida",
    expireIn: new Date("03/06/2025"),
    assigned: "Manuela",
  },
];
