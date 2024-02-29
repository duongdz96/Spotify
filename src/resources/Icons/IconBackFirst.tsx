import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function IconBackFirst(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Circle cx="16" cy="16" r="16" fill="#030303"/>
      <Path
        opacity="0.7"
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.1728 23.5999L10.2734 15.9999L19.1728 8.3999L19.7266 9.04744L11.5855 15.9999L19.7266 22.9524'
        fill='white'
      />
    </Svg>
  );
}

export default IconBackFirst;
