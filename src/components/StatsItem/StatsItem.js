export const StatsItem = ({ label, percentage }) => (
  <li className="item">
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </li>
)
