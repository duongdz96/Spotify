import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { InjectedProps, withIcon } from '~/libs/IconDecorator';

const IconAdd = ({
  width,
  height,
  style,
  fill,
}: InjectedProps): JSX.Element => {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.9286 4.17847H12.0715V12.5356H3.71436V14.3928H12.0715V22.7499H13.9286V14.3928H22.2858V12.5356H13.9286V4.17847Z" fill="#A7A7A7" />
    </Svg>

  );
};

export default withIcon(IconAdd);
