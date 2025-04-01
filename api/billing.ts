export interface BillingsProps {
  title: string;
  valor: number;
  status: "Atrasada" | "Paga" | "A vencer";
  expireIn: Date;
  assigned: "Henrique" | "Manuela" | "Eduarda" | "Todos";
  isApellant: boolean;
}

export const billings: BillingsProps[] = [
  {
    title: "Gás",
    valor: 200,
    status: "Paga",
    expireIn: new Date("04/02/2025"),
    assigned: "Henrique",
    isApellant: true,
  },
  {
    title: "Luz",
    valor: 500,
    status: "Atrasada",
    expireIn: new Date("03/29/2025"),
    assigned: "Manuela",
    isApellant: false,
  },
  {
    title: "Internet",
    valor: 900,
    status: "A vencer",
    expireIn: new Date("03/06/2025"),
    assigned: "Manuela",
    isApellant: true,
  },
];
