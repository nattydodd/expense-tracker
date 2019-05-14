import * as React from 'react';
import { StyledInput } from './styled';

interface IProps {
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  id?: string;
  type?: string;
  prefix?: any;
  suffix?: any;
  inputWidth?: string;
}

class Input extends React.Component<IProps> {
  state = {
    value: this.props.value ? this.props.value : ''
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value
    })
    this.props.onChange && this.props.onChange(e.target.value);
  }

  render() {
    const {
      placeholder,
      disabled,
      onFocus,
      id,
      prefix,
      suffix,
      inputWidth,
      type
    } = this.props

    return (
      <React.Fragment>
        {prefix}
        <StyledInput
          id={id}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          onFocus={onFocus}
          inputWidth={inputWidth}
        />
        {suffix}
      </React.Fragment>
    );
  }
}

export default Input;