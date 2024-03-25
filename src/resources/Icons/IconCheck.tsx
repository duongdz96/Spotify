import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function IconCheck(props) {
  return (
    <Svg
      width={20}
      height={15}
      viewBox='0 0 20 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.06534 14.9704C5.33024 15.0423 5.6234 14.9841 5.84914 14.7881L19.6878 1.59649C20.0575 1.27561 20.1058 0.705361 19.7955 0.323134C19.4853 -0.0595356 18.9341 -0.109411 18.5643 0.211467L5.28372 12.9189L1.4357 9.57948C1.06594 9.2586 0.51471 9.30848 0.204479 9.69115C-0.105753 10.0734 -0.0575326 10.6436 0.312121 10.9645L4.71479 14.7855C4.82019 14.8768 4.94021 14.9382 5.06534 14.9704Z'
        fill='#F5F5F5'
      />
    </Svg>
  );
}

export default IconCheck;
