import { ButtonHTMLAttributes } from 'react';
import Icon from './Icon';

import '../styles/button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

const Button: React.FC<ButtonProps> = ({
  name,
  title,
  selected,
  ...rest
}: ButtonProps) => (
  <button type="button" {...(selected && { className: 'selected' })} {...rest}>
    <Icon name={name} color={selected ? '#FAE800' : '#FBFBFB'} />
    {title}
  </button>
);

export default Button;
