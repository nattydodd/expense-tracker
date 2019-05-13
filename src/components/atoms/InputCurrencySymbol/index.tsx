import * as React from 'react';
import { StyledInputCurrencySymbol } from './styled';

interface IProps {
  symbol: string;
}

const InputCurrencySymbol: React.FC<IProps> = ({ symbol }) => {
  return (
    <StyledInputCurrencySymbol>
      {symbol}
    </StyledInputCurrencySymbol>
  );
}

export default InputCurrencySymbol;