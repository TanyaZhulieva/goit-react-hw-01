import TransactionItem from "../TransactionItem/TransactionItem.jsx";
import css from "./TransactionHistory.module.css"

export default function TransactionHistory({items}) {
    return (
        <table className={css.table}>
  <thead className={css.head}>
    <tr>
      <th className={css.headCell}>Type</th>
      <th className={css.headCell}>Amount</th>
      <th className={css.headCell}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item =>  <tr className={css.tableRow} key={item.id}>
      <TransactionItem type={item.type}
      amount={item.amount}
      currency={item.currency}
       />
    </tr>)}
   
  </tbody>
</table>
    )
}