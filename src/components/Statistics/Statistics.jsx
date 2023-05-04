import css from './Statistics.module.css';
import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && (
        <h2 className={css.title}>{title}</h2>
      )}
      
      <ul className={css['stat-list']}>
        {stats.map(data => (
          <li className={css.item} key={data.id}>
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
