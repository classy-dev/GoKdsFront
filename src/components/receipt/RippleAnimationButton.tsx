import React, { useCallback, useRef, useState, useEffect } from 'react';
import { keyframes } from '@emotion/react';
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
    const [isWobbling, setIsWobbling] = useState(false);
    const nextId = useRef(0);

    const addRipple = useCallback((x: number, y: number, size: number) => {
      // eslint-disable-next-line no-plusplus
      const id = nextId.current++;
      setRipples(prev => [...prev, { x, y, size, id }]);

      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== id));
      }, 1000);
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

    useEffect(() => {
      const wobbleInterval = setInterval(() => {
        setIsWobbling(prev => !prev);
      }, 2000);

      return () => clearInterval(wobbleInterval);
    }, []);

    return (
      <ButtonWrapper className={className}>
        <PushIndicator>
          <PushText>PUSH</PushText>
          <Arrow />
        </PushIndicator>
        <StyledRippleButton
          className={`${isWobbling ? 'wobbling' : ''}`}
          onClick={handleClick}
        >
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
      </ButtonWrapper>
    );
  }
);

const wobbleAnimation = keyframes`
  0%, 100% { transform: translateX(0) rotate(0); }
  25% { transform: translateX(-5px) rotate(-5deg); }
  75% { transform: translateX(5px) rotate(5deg); }
`;

const pushAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
`;

const ButtonWrapper = styled.div`
  position: relative;
`;

const PushIndicator = styled.div`
  position: absolute;
  top: -60px;
  left: 50%;
  width: 67px;
  margin-left: -35.5px;
  animation: ${pushAnimation} 1s ease-in-out infinite;

  @media (max-width: 500px) {
    display: none;
  }
`;

const PushText = styled.div`
  color: #ff0000;
  font-size: 24px;
  font-weight: bold;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid #ff0000;
  margin: 5px auto 0;
`;

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
  border: 2px solid #ff0000;
  border-radius: 30px;
  cursor: pointer;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  @media (max-width: 500px) {
    height: 20px;
    font-size: 11px;
  }

  &:hover {
    background-color: rgba(255, 0, 0, 0.1);
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
  }

  &.wobbling {
    animation: ${wobbleAnimation} 0.5s ease-in-out infinite;
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

export default RippleButton;
