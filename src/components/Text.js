import styled from 'styled-components';
import {
  getFontSize,
  getFontWeight,
  getLineHeight
} from '../utils/styled-component-functions';

const Text = styled.p`
  ${getFontSize}
  ${getFontWeight}
  ${getLineHeight}
`;

export default Text;
