// individual style, comment out above, and uncomment here and add styles
import styled, { css } from 'styled-components';

export default styled.div(() => {
  return css`
    margin: 0px 0;

    .employee-card {
      border: 1px solid #d9d9d9;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
      background: #fff;
    }
  `;
});
