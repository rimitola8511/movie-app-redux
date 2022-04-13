import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Head = ({ name }) => {
  return (
    <Helmet>
      <title>{name}</title>
      <meta name="description" content={name} />
      <meta
        name="keywords"
        content="React, JavaScript, Xepelin, Movies, Popular, TopRated, UpComing"
      />
      <meta name="author" content="Ricardo Imitola" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffe600" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
      />
    </Helmet>
  );
};

export default Head;

Head.prototype = {
  name: PropTypes.string.isRequired,
};
