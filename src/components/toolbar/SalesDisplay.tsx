import dayjs from 'dayjs';
import { css } from '@emotion/react';

export const SalesDisplayStyles = css`
  overflow: hidden;
  display: grid;
  place-items: center;
  padding: 0 20px;
  margin-left: 20px;
  font-family: 'Zen Tokyo Zoo', cursive;
  text-align: center;
  border-radius: 7px;
  background: #000;

  @media (max-width: 500px) {
    display: none;
  }

  .neon {
    font-size: 18px;
    text-transform: uppercase;
    color: #ffd9e2;
    text-shadow:
      0 0 0 transparent,
      0 0 10px #ff003c,
      0 0 20px rgba(255, 0, 60, 0.5),
      0 0 40px #ff003c,
      0 0 100px #ff003c,
      0 0 200px #ff003c,
      0 0 300px #ff003c,
      0 0 500px #ff003c,
      0 0 1000px #ff003c;
    animation: animate 6s infinite alternate;

    @keyframes animate {
      40% {
        opacity: 1;
      }
      42% {
        opacity: 0.8;
      }
      43% {
        opacity: 1;
      }
      45% {
        opacity: 0.3;
      }
      46% {
        opacity: 1;
      }
    }
  }
`;

const neonTextStyles = css`
  font-size: 18px;
  text-transform: uppercase;
  color: #ffd9e2;
  text-shadow:
    0 0 0 transparent,
    0 0 10px #ff003c,
    0 0 20px rgba(255, 0, 60, 0.5),
    0 0 40px #ff003c,
    0 0 100px #ff003c,
    0 0 200px #ff003c,
    0 0 300px #ff003c,
    0 0 500px #ff003c,
    0 0 1000px #ff003c;
  animation: animate 6s infinite alternate;

  @keyframes animate {
    40% {
      opacity: 1;
    }
    42% {
      opacity: 0.8;
    }
    43% {
      opacity: 1;
    }
    45% {
      opacity: 0.3;
    }
    46% {
      opacity: 1;
    }
  }
`;

export const SalesDisplay = () => (
  <div css={SalesDisplayStyles}>
    <p css={neonTextStyles}>{dayjs().format('MM-DD')} | ₩ -- , --- , ---</p>
  </div>
);
