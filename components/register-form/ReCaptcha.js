import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptcha = ({ onChange }) => {
  const siteKey = '6LfHCQMqAAAAADBeYGaSjt83TbhqWfrJQv6gYAmT';

  return (
    <ReCAPTCHA
      sitekey={siteKey}
      onChange={onChange}
    />
  );
};

export default ReCaptcha;