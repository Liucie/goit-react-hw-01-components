import s from './StatsItem.module.css';
export const StatsItem = ({ label, percentage }) => (
  <li className={s.item}>
    <span className={s.label}>{label}</span>
    <span className={s.percentage}>{percentage}%</span>
  </li>
);
