import PropTypes from 'prop-types';
import styles from './index.module.css';

export default function Image({ src, alt }) {
  return <img className={styles.image} src={src} alt={alt} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  atl: PropTypes.string,
};
