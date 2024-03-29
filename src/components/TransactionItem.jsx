export default function TransactionItem({type, amount, currency}) {
  return (
    <div>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </div>
  );
}
