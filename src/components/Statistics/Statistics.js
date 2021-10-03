import { StatsItem } from '../StatsItem/StatsItem.js'
import PropTypes from 'prop-types'

export function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title /* {{ title } ? <h2 class="title">{title}</h2> : null} */}
      <ul>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  )
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
}
