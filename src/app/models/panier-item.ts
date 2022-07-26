
export class PanierItem {
  id: number;
  qty: number;

  constructor(id: number, qty = 1) {
    this.id = id;
  
    this.qty = qty;
  }
}
