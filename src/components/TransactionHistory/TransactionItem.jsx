import css from "./TransactionItem.module.css"

export default function TransactionItem({type, amount, currency}) {
  return (
    <div>
      <td className={css.dataCell}>{type}</td>
      <td className={css.dataCell}>{amount}</td>
      <td className={css.dataCell}>{currency}</td>
    </div>
  );
}
