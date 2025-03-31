export interface BillingsProps {
  title: string;
  description: string;
  total: number;
  status: "Atrasada" | "Paga" | "A vencer";
  expireIn: Date;
  assigned: "Henrique" | "Manuela" | "Eduarda" | "Todos";
}

export const billings: BillingsProps[] = [
  {
    title: "Gás",
    description: "Conta de gás",
    total: 200,
    status: "Paga",
    expireIn: new Date("04/02/2025"),
    assigned: "Henrique",
  },
  {
    title: "Luz",
    description: "Conta de luz",
    total: 500,
    status: "Atrasada",
    expireIn: new Date("03/29/2025"),
    assigned: "Manuela",
  },
  {
    title: "Internet",
    description: "Conta de internet",
    total: 900,
    status: "A vencer",
    expireIn: new Date("03/06/2025"),
    assigned: "Manuela",
  },
];
