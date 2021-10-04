import { StatsItem } from '../StatsItem/StatsItem.js';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {{ title } ? <h2 className={s.title}>{title}</h2> : null}
      <ul className={s.statsList}>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}
// console.log(stats, title)
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
