export type TAcaoProps = {
  id?: string
  ticket: string
  price: number
  amount: number
}

export class AcaoEntity {
  constructor(private readonly props: TAcaoProps) {}

  get id(){
    return this.props.id
  }

  get ticket() {
    return this.props.ticket
  }

  get price() {
    return this.props.price
  }

  get amount() {
    return this.props.amount
  }
}
