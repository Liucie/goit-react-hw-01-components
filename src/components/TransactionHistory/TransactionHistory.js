import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
export function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.tableTitle}>Type</th>
          <th className={s.tableTitle}>Amount</th>
          <th className={s.tableTitle}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={s.cell}>{type}</td>
            <td className={s.cell}>{amount}</td>
            <td className={s.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
