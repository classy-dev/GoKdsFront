import { css } from '@emotion/react';

const buttonStyles = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e0;
  border: none;
  box-shadow:
    -8px -8px 16px rgba(255, 255, 255, 0.7),
    8px 8px 16px rgba(0, 0, 0, 0.2),
    inset 0 0 0 rgba(255, 255, 255, 0.7),
    inset 0 0 0 rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:active {
    transform: translateY(4px);
    box-shadow:
      0 0 0 rgba(255, 255, 255, 0.7),
      0 0 0 rgba(0, 0, 0, 0.2),
      inset -4px -4px 8px rgba(255, 255, 255, 0.5),
      inset 4px 4px 8px rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle,
      transparent 10%,
      rgba(0, 0, 0, 0.1) 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:active::after {
    opacity: 1;
  }

  svg {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;
    fill: #555555;
  }

  &:active svg {
    transform: scale(0.85);
  }

  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
`;

export const EmbossedButton = ({
  icon,
  label,
  onClick,
  color,
  disabled,
}: any) => (
  // eslint-disable-next-line react/no-unknown-property
  <button
    type="button"
    css={[
      buttonStyles,
      css`
        svg {
          fill: ${color || '#555555'};
        }
      `,
    ]}
    onClick={onClick}
    aria-label={label}
    disabled={disabled}
  >
    {icon}
  </button>
);
