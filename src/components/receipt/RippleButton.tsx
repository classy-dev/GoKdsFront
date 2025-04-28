import React, { useCallback, useRef, useState } from 'react';
import styled from '@emotion/styled';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

export const RippleButton: React.FC<RippleButtonProps> = React.memo(
  ({ children, onClick, className }) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const nextId = useRef(0);

    const addRipple = useCallback((x: number, y: number, size: number) => {
      // eslint-disable-next-line no-plusplus
      const id = nextId.current++;
      setRipples(prev => [...prev, { x, y, size, id }]);

      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== id));
      }, 1000); // Match this with the CSS animation duration
    }, []);

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        addRipple(x, y, size);
        onClick && onClick(event);
      },
      [onClick, addRipple]
    );

    return (
      <StyledRippleButton className={className} onClick={handleClick}>
        {ripples.map(ripple => (
          <Ripple
            key={ripple.id}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
        <span className="content">{children}</span>
      </StyledRippleButton>
    );
  }
);

const StyledRippleButton = styled.button`
  position: relative;
  overflow: hidden;
  color: #ff0000;
  background-color: transparent;
  padding: 1rem 2rem;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  font-weight: bold;
  outline: 0;
  border: 1px solid #ff0000;
  border-radius: 30px;
  cursor: pointer;
  width: 80%;
  height: 60px;
  margin: auto auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 0, 0, 0.1);
  }
`;

const Ripple = styled.span`
  position: absolute;
  border-radius: 50%;
  animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1);
  background-color: rgba(255, 0, 0, 0.7);

  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 0.7;
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
