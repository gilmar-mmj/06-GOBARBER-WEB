import React from 'react';

import { Container } from './styles';

interface ToolTipProp {
  title: string;
  className?: string;
}

const Tooltip: React.FC<ToolTipProp> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
