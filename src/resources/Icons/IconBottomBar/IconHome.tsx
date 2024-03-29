import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function IconHome(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.7877 21.8565H11.4814V14.4315H7.30629V21.8565H0V6.42385L9.39383 0.956543L18.7877 6.38657V21.8565Z'
        fill='white'
      />
    </Svg>
  );
}

export default IconHome;
