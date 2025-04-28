import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';

const montserratTypes = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const montserrat = montserratTypes.map(
  weight => css`
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: ${weight === 400 ? 'normal' : weight};
      src:
        local('Montserrat'),
        url('../public/font/montserrat-v18-latin-${weight}.woff') format('woff'),
        url('../public/font/montserrat-v18-latin-${weight}.woff2')
          format('woff2');
    }
  `
);

export const reset = css`
  @import url('https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap');

  * {
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    user-select: none;
    -webkit-touch-callout: none;
  }
  html {
    font-size: 10px;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden !important;
  }
  body {
    color: #212529;
    background: #212529;
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  form,
  fieldset,
  p,
  blockquote,
  button,
  table {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 400;
  }
  img,
  fieldset,
  button {
    border: 0 none;
  }
  textarea {
    border: 1px solid #d9d9d9;
    overflow: auto;
  }
  ul,
  ol {
    list-style: none;
  }
  input[type='radio'] {
    width: 14px;
    height: 14px;
    margin: 0;
    padding: 0;
  }
  input[type='text']::-ms-clear {
    display: none;
  }
  select {
    vertical-align: middle;
    border: 1px solid #d9d9d9;
  }
  a {
    border: 0;
  }
  a:link {
    color: #333;
    text-decoration: none;
  }
  a:visited {
    color: #333;
    text-decoration: none;
  }
  a:hover {
    color: #da291c;
    text-decoration: none;
  }
  a:active {
    color: #333;
    text-decoration: none;
  }
  em {
    font-style: normal;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  caption {
    display: none;
  }
  fieldset,
  button {
    border: none;
  }
  hr,
  legend {
    display: none;
    clear: both;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
  input {
    padding: 0;
  }
  label {
    vertical-align: middle;
    cursor: pointer;
  }
  table caption {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    font-size: 0;
    line-height: 0;
  }

  textarea {
    width: 100%;
    height: 200px;
    font-size: 14px;
    padding: 5px;
    border: 1px solid #c6c6c6;
    border-radius: 2px;
    border-radius: 2px;
    box-sizing: border-box;
    overflow: auto;
  }
  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    border: none;
  }
  input[type='radio'] {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    border: none;
  }
  *:-webkit-auto:fill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }
  table {
    border-collapse: collapse;
    table-layout: fixed !important;
    border-spacing: 0;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  hr {
    display: none;
  }
  caption,
  legend {
    visibility: hidden;
    overflow: hidden;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
  }
  iframe {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }

  /* 
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 300;
  src: url('/rem/apply/common/webfont/NotoSansKR-Light.eot');  
  src:  
       url('/rem/apply/common/webfont/notokr-light.ttf') format('truetype'), 		
       url('/rem/apply/common/webfont/NotoSansKR-Light.woff2') format('woff2'), 
       url('/rem/apply/common/webfont/NotoSansKR-Light.woff') format('woff'); 
      
  }  */

  @font-face {
    font-family: 'Digital-7';
    font-style: normal;
    font-weight: normal;
    src:
      local('Digital-7'),
      url('../public/font/digital-7.ttf') format('truetype');
  }

  .hiddenZone {
    display: none;
  }
  .hiddenZoneV {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    *visibility: hidden;
  }

  .layer_setting {
    position: absolute;
    z-index: 1001;
    top: 10rem;
    right: 0;
    width: 58.3rem;
    height: calc(100vh - 10rem);
    color: #fff;
    background: #3c3f42;
  }

  .layer_setting .head {
    display: flex;
    align-items: center;
    height: 8rem;
    padding: 0 2.4rem;
    border-bottom: 1px solid #e0dee0;
  }

  .layer_setting .head .btn_back {
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 2rem;
    background: url('../public/images/arrow_setting_back.svg') no-repeat left
      center;
    background-size: 3.2rem 3.2rem;
  }

  .layer_setting .head h2 {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 2.4rem;
  }
  .Toastify__toast-body {
    z-index: 2000;
    font-size: 14px; // 원하는 폰트 크기로 조절하세요.
  }
  ::-webkit-scrollbar {
    width: 11px;
    height: 11px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 20px;
    transition: #0000.2s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #061138;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  @media (min-width: 1400px) and (max-width: 1530px) {
    html {
      font-size: 9px;
    }
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    html {
      font-size: 8px;
    }
  }
  @media (min-width: 1000px) and (max-width: 1200px) {
    html {
      font-size: 7px;
    }
  }
  @media (min-width: 900px) and (max-width: 1000px) {
    html {
      font-size: 6px;
    }
  }
  @media (min-width: 768px) and (max-width: 900px) {
    html {
      font-size: 5px;
    }
  }
  @media (min-width: 700px) and (max-width: 768px) {
    html {
      font-size: 4px;
    }
  }
  @media (min-width: 600px) and (max-width: 700px) {
    html {
      font-size: 3px;
    }
  }
  @media (max-width: 500px) {
    html {
      font-size: 2px;
    }
  }

  @font-face {
    font-family: 'Titan-One';
    src:
      url('../public/font/Titan-One.ttf.woff') format('woff'),
      url('../public/font/Titan-One.ttf.svg#Titan-One') format('svg'),
      url('../public/font/Titan-One.ttf.eot'),
      url('../public/font/Titan-One.ttf.eot?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  ${montserrat}
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  h1 {
    width: 19.3rem;
    height: 10.9rem;
    background: url(/images/logo_home.svg) no-repeat left top;
    background-size: 19.3rem 10.9rem;
  }

  .txt {
    margin: 3.2rem 0 17.3rem;
    color: #ff4600;
    font-family: 'Montserrat';
    font-size: 3rem;
    font-weight: 900;
    line-height: 1;
  }

  input {
    display: block;
    width: 39rem;
    height: 4.5rem;
    margin-bottom: 1.6rem;
    padding: 1.6rem 2rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0.2px;
    color: #828282;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    appearance: none;
    transition:
      border-color 0.15s ease-in-out 0s,
      box-shadow 0.15s ease-in-out 0s;

    &:focus {
      outline: 0;
      border-color: #ff862c;
      box-shadow: 0 0 0 0.25rem rgba(255, 134, 44, 0.25);
    }
  }

  .btn_login {
    width: 39rem;
    height: 5.2rem;
    margin-bottom: 14.8rem;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
    background: #ff4600;
    border-radius: 0.4rem;
  }

  .copy_right {
    margin-top: 14.8rem;
    font-size: 1.2rem;
    text-align: center;
    letter-spacing: 0.2px;
    color: #828282;
  }
`;

export const BtnHeadOpen = styled.button`
  position: relative;
  z-index: 200;
  display: block;
  width: 13.5rem;
  height: 5.6rem;
  margin: 0 auto;
  border-radius: 0 0 4rem 4rem;
  background: #ff4600;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.4rem;
    height: 2.4rem;
    background: url('/images/arrow_header_down.svg') no-repeat left top;
  }
`;

export const HeaderWrap = styled.header`
  width: 100vw;
`;
export const Dimm = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(33, 37, 41, 0.8);
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  z-index: 200;
  width: 100%;
  height: 10rem;
  align-items: center;
  color: #fff;
  font-size: 2.4rem;
  background: #2e3237;

  .left,
  .right {
    display: flex;
    align-items: center;
    height: 10rem;
    padding: 0 2.4rem;
  }

  .left {
    .info_pagenation {
      display: flex;

      margin-right: 3rem;
      justify-content: center;
      align-items: center;
      font-family: 'Montserrat';
      font-weight: 700;

      .btn_page {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 0.4rem;
        background: #3c3f42;

        &:hover {
          background: #ff4600;
        }

        &.btn_next {
          &:before {
            transform: rotate(180deg);
          }
        }

        &:before {
          content: '';
          display: block;
          width: 1.8rem;
          height: 2.8rem;
          background: url('/images/arrow_head_page.svg') no-repeat center;
          background-size: contain;
        }
      }

      .wrap_page_number {
        margin: 0 2.4rem;
        .txt_current_page {
          font-size: 2.4rem;
        }
        .txt_total_page {
          color: #9d9d9d;
          font-size: 1.6rem;
        }
        .txt_bar {
          margin: 0 0.4rem;
        }
      }
    }

    .total_order {
      margin-right: 3rem;
      em {
        color: #ff4600;
        font-family: 'Montserrat';
        font-weight: 700;
      }
    }

    .box_set_grid {
      display: flex;
      align-items: center;

      button {
        display: flex;
        overflow: hidden;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        color: #fff;
        font-weight: bold;

        border-radius: 4px;
        background: #404c77;

        &:disabled {
          opacity: 0.3;
        }

        &:first-of-type {
          margin-right: 1.7rem;
        }

        &:last-of-type {
          margin-left: 1.7rem;
        }
      }
    }
  }
  .list_filter_condition {
    position: absolute;
    left: 50%;
    width: 34.6rem;
    margin-left: -17.3rem;
    ul {
      display: flex;
      li {
        width: 11.6rem;

        &:last-of-type {
          margin-right: 0;
        }

        label {
          display: flex;
          align-items: center;
          color: #706e6b;
          input[type='checkbox'] {
            appearance: none;
            width: 4rem;
            height: 4rem;
            margin-right: 0.8rem;
            border: 2px solid #e5e5e5;
            border-radius: 0.4rem;
            background-color: #3c3f42;
            vertical-align: middle;
            outline: none;
            cursor: pointer;
          }
          input[type='checkbox']:checked {
            + span {
              color: #fff;
            }

            border-color: #e5e5e5;
            background: url('/images/ico_check_arrow.svg') no-repeat center
              #ff6d00;
            background-size: 2rem 1.4rem;
          }
        }
      }
    }
  }
  .right {
    flex: 1;
    justify-content: flex-end;

    .area_btn {
      margin-right: 7.7rem;
      padding-right: 3.2rem;

      font-family: 'Montserrat';
      font-weight: 500;
      font-size: 2.4rem;
      background: url('/images/arrow_headright_btn_down.svg') no-repeat right
        center;
      background-size: 2.4rem 2.4rem;

      &.on {
        button {
          color: #ff4600;
        }
        background: url('/images/arrow_headright_btn_up.svg') no-repeat right
          center;
        background-size: 2.4rem 2.4rem;
      }

      button {
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 2.4rem;
        color: #fff;
        background: transparent;
      }

      &.filter,
      &.sort {
        position: relative;
      }

      &:nth-of-type(4) {
        background: none;
      }
    }

    .btn_history,
    .btn_setting {
      width: 4.8rem;
      height: 4.8rem;
      // margin-right: 32px;

      &.on {
        filter: invert(37%) sepia(78%) saturate(4442%) hue-rotate(1deg)
          brightness(102%) contrast(103%);
      }
    }

    .box_btn {
      display: flex;
      align-items: center;
    }
    .btn_speak {
      width: 4rem;
      height: 4rem;
      margin-right: 3rem;
      background: url('/images/ico_volume_mute.svg') no-repeat left center;
      background-size: 4rem 4rem;

      &.on {
        background: url('/images/ico_volume.svg') no-repeat left center;
        background-size: 4rem 4rem;
      }
    }

    .btn_dark {
      width: 4rem;
      height: 4rem;
      margin-right: 3rem;
      background: url('/images/ico_dark_off.svg') no-repeat left center;
      background-size: 4rem 4rem;

      &.on {
        background: url('/images/ico_dark_on.svg') no-repeat left center;
        background-size: 4rem 4rem;
      }
    }

    .btn_history {
      margin-right: 3rem;
      background: url(/images/ico_history.svg) no-repeat center center;
      background-size: 4.4rem 4rem;
    }

    .btn_setting {
      background: url(/images/ico_user.svg) no-repeat center center;
      background-size: 4.4rem 4rem;
    }
  }
`;

export const Pann = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: conic-gradient(#ff0052 20deg, transparent 120deg);
    width: 150%;
    height: 150%;

    animation: lineRotate 5s linear infinite;
  }
  &::after {
    content: '';
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    background: #1e1e1e;
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff0052;
    font-size: larger;
    letter-spacing: 5px;
  }

  @keyframes lineRotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const TxtSaleType = styled.span`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 8.2rem;
  height: 8.2rem;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 50%;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  background-color: #3c3f42;

  &:before {
    content: '';
    background-image: conic-gradient(#04b0ee 20deg, transparent 120deg);
    height: 150%;
    width: 150%;
    position: absolute;
    left: -25%;
    top: -25%;
  }
  &:after {
    content: '';
    height: 94%;
    width: 94%;
    position: absolute;
    background-color: #2e3237;
    border-radius: 50%;
    top: 3%;
    left: 3%;
    color: #04b0ee;
    display: grid;
    place-items: center;
    font-size: 20px;
    letter-spacing: 6px;
  }

  .txt {
    position: relative;
    z-index: 10;
  }

  @keyframes rotate {
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  &.alert {
    border: none;

    &:before {
      background-image: conic-gradient(#ef4747 20deg, transparent 120deg);
      animation: rotate 1s infinite linear;
    }
    .txt {
      color: #ef4747;
      animation: blink 1.5s infinite;
    }
  }
  &.warning {
    border: none;

    &:before {
      background-image: conic-gradient(#ffbc2c 20deg, transparent 120deg);
      animation: rotate 2s infinite linear;
    }
    .txt {
      color: #ffbc2c;
    }
  }
  &.safe {
    border: none;

    &:before {
      background-image: conic-gradient(#e0e0e0 20deg, transparent 120deg);
      animation: rotate 2.5s infinite linear;
    }
    .txt {
      color: #e0e0e0;
    }
  }
`;

export const ReceiptArea = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(3, 1fr);
  height: calc(100vh - 14.8rem);

  &.two_line {
    grid-template-columns: repeat(3, 2fr);
  }
`;

export const ReceiptWrap = styled.div`
  overflow: hidden;
  position: relative;
  opacity: 1;
  height: calc(100vh - 14.8rem);
  border-radius: 0.4rem;
  background: #2e3237;
  transform: translateY(30%);
  transition: all 0.5s;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));

  &.on {
    transform: translateY(0%);
  }

  &.off {
    transform: translateY(-30%);
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  &.alert {
    .info_head {
      color: #ff3434;
    }
  }
  &.warning {
    .info_head {
      color: #ffbc2c;
    }
  }
  &.safe {
    .info_head {
      color: #e0e0e0;
    }
  }

  .info_head {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    height: 11rem;
    padding: 0 2rem;
    color: #fff;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 2.4rem;
    border-bottom: 2px solid #333333;
    border-radius: 0.4rem 0.4rem 0px 0px;

    .info {
      margin-left: 11.2rem;
      .recepit_id {
        color: #969492;
        font-family: 'Montserrat';
        font-size: 2.4rem;
      }

      .time {
        font-family: 'Montserrat';
        font-size: 3.2rem;
      }
    }

    .btn_all_cancle {
      width: 12.1rem;
      height: 4.8rem;
      margin-left: auto;
      color: #ff4600;
      font-size: 2.4rem;
      font-weight: bold;
      text-align: center;
      line-height: 4.8rem;
      border-radius: 2.4rem;
      background: #433432;
    }
  }

  &.not_order_memo {
    .cont {
      height: calc(100% - 18rem);
    }
  }

  .cont {
    position: relative;
    z-index: 2;
    overflow: auto;
    height: calc(100% - 15.8rem);
    padding: 2rem 2rem 5rem;
    font-family: 'Noto Sans KR';

    .quanity {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      background: #e0e0e0;

      &.two {
        background: #78ff85;
      }

      &.more {
        .x,
        .number {
          color: #ffffff !important;
        }
        background: #ff4600;
      }

      * {
        font-family: 'Montserrat';
        font-size: 2rem;
        font-weight: bold;
        color: #333333 !important;
      }
    }

    /* .ing {
      > .depth1_item,
      > .depth2_item {
        &:after {
          content: '';
          width: 2rem;
          height: 2rem;
          margin-left: 1rem;
          background: url('/images/spinner_waiting.gif') no-repeat left top;
          background-size: 2rem;
        }
      }
      > .depth1_item {
        &:after {
          order: 7;
        }
      }
      > .depth2_item {
        &:after {
          order: 3;
        }
      }
    } */

    .fin,
    .skip {
      > div {
        * {
          color: #4f4f4f !important;
        }
        .quanity {
          span {
            color: #333333 !important;
          }
          background: #4f4f4f !important;
        }
        button {
          display: none;
        }
      }

      &.unMapping {
        color: #2f80ed !important;

        > div {
          .quanity {
            span {
              color: #333333 !important;
            }
            background: #5f4701 !important;
          }
          .product_name {
            color: #5f4701 !important;
          }
        }
      }
    }

    .unMapping {
      /* color: #2f80ed !important; */

      /* > div {
        .quanity {
          background: #ffc107;
        }
        .product_name,
        .product_name .txt {
          color: #ffc107 !important;
        }
      } */
      > div .btn_box {
        display: block;
      }
      /* &.fin {
        > .depth1_item .product_name .txt,
        > .depth2_item .product_name .txt {
          color: #5f4701 !important;
        }
      } */
      /* .btn_add_item {
        display: none;
      } */
    }

    .depth1 {
      .unMapping {
        .depth1_item {
          .product_name {
            width: 65%;
          }
          .btn_box {
            margin-left: auto;
          }
        }
      }
      .depth1_item {
        display: flex;
        align-items: center;
        height: 6.6rem;
        padding: 0 1.6rem;
        font-weight: 700;
        color: #ffffff;
        background: #3c3f42;

        /* > .btn_add_item {
          margin-left: 20px;
        } */

        .quanity {
          order: 1;
          margin-top: 0px;
          margin-right: 1rem;
          font-size: 2rem;
        }
        .product_name {
          display: flex;
          align-items: center;
          order: 2;
          width: 77%;
          padding: 0 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 2.4rem;
        }

        .btn_add_item {
          margin-left: auto;
        }
      }

      &:first-of-type {
        margin-top: 0;
      }

      > li:not(:nth-of-type(1)) {
        margin-top: 2rem;
      }
    }

    .depth2 {
      .btn_add_item {
        margin-left: auto;
      }
      .ing .product_name {
        align-items: center;
        margin-left: -70px;
      }
      .product_name,
      .quanity {
        order: 2;
        display: flex;
        font-size: 2.4rem;
      }
      .quanity {
        display: none;
        margin-right: 1rem;
        .x {
          order: 1;
        }
        .number {
          order: 2;
        }
      }
      > li {
        position: relative;
        font-size: 2rem;
        font-weight: 400;
        color: #e0e0e0;
        border-top: 1px solid #4f4f4f;
        background: #212529;
      }
    }
  }

  .btn_box {
    display: none;

    order: 3;
    height: 3.2rem;
    margin-left: 2rem;
    button {
      margin-right: 2rem;
      &:last-of-type {
        margin-right: 0;
      }
    }
    .btn_mapping {
      width: 3.2rem;
      height: 3.2rem;
      background: url('/images/ico_mapping.svg') no-repeat left center;
      background-size: 3.2rem;
    }
    .btn_skip {
      width: 3.2rem;
      height: 3.2rem;
      background: url('/images/ico_skip.svg') no-repeat left center;
      background-size: 3.2rem;
    }
  }

  .btn_add_item {
    order: 4;
    width: 3.2rem;
    height: 3.2rem;
    background: url('/images/ico_add_item.svg') no-repeat left center;
    background-size: 3.2rem;
  }

  .depth2 {
    .btn_add_item {
      width: 2.9rem;
      height: 2.9rem;

      background: url('/images/ico_minus_item.svg') no-repeat left center;
      background-size: 2.9rem;
    }

    .fin {
      .depth2_item {
        overflow: hidden;
        position: relative;
        text-decoration: none;

        * {
          color: #4f4f4f !important;
        }

        /* &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: #000;
        } */
      }
      &.unMapping {
        .depth2_item:after {
          background: #2f80ed !important;
        }
      }
      &.fin,
      &.skip {
        .btn_box {
          display: none;
        }
      }
    }

    .depth2_item {
      display: flex;
      align-items: center;
      height: 6.6rem;
      padding: 0 1.6rem 0 6.1rem;

      .btn_box {
        margin-left: auto;
      }
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 10;
    bottom: 0;
    width: 100%;
    min-height: 7.8rem;
    .txt {
      padding: 1rem 2rem 1rem;
      font-size: 1.4rem;
      color: #e0e0e0;
      line-height: 2rem;
      border-top: 1px solid #4f4f4f;
      border-bottom: 1px solid #4f4f4f;
      white-space: pre-line;
    }

    .btn_fin_making {
      width: 100%;
      height: 6rem;
      margin-top: auto;
      color: #fff;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 6rem;
      text-align: center;
      background: #ff4600;

      &:disabled {
        background: #ddd;
      }
    }
  }

  .ripple {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .ripple:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition:
      transform 0.3s,
      opacity 0.5s;
  }

  .ripple:active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`;

export const IcoSaleType = styled.span<{ type: string }>`
  display: inline-block;
  width: 4.8rem;
  height: 4.8rem;
  background: ${({ type }) =>
      type === 'type0'
        ? "url('/images/ico_meal.svg')"
        : type === 'type1'
          ? "url('/images/ico_takeout.svg')"
          : "url('/images/ico_delivery.svg')"}
    no-repeat left center;
  background-size: 4.8rem;
`;

export const KdsSummary = styled.div`
  width: 32rem;
  background: #fff;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  .title {
    padding: 1.2rem;
    font-size: 1.8rem;
    text-align: center;
    border-bottom: 1px solid #e8e9e8;
  }

  .list {
    padding: 1.5rem;
    li {
      display: flex;
      font-size: 2rem;
      margin-bottom: 0.5rem;

      .item_quanity {
        margin-left: auto;
      }
    }
  }
`;

export const SlidePageWrap = styled.section`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(3, 1fr);

  /* Receipt.css */
  .item-enter {
    opacity: 0;
  }

  .item-enter-active {
    opacity: 1;
    transition: opacity 700ms;
  }

  .item-exit {
    opacity: 1;
  }

  .item-exit-active {
    opacity: 0;
    transition: opacity 700ms;
  }

  &.dark {
    background: red;
  }

  &.grid8,
  &.grid12 {
    .cont {
      padding-top: 0px;
    }
  }

  &.grid12 {
    gap: 2rem;
    // grid-template-rows: 1fr 1fr 1fr;
    .info_head {
      height: 5.2rem;
      ${IcoSaleType} {
        width: 3rem;
        height: 3rem;
        background-size: 3rem;
      }
    }

    .not_order_memo .cont {
      height: calc(100% - 4.6rem) !important;
    }
  }

  &.SlidePage1 {
    background: red;
  }
`;

// sixGrid
export const KdsWrap = styled.div`
  &.dark {
    ${ReceiptWrap} {
      .cont {
        * {
          color: #e0e0e0;
        }
        /* .unMapping .depth1_item *,
        .depth2_item.unMapping * {
          color: inherit;
        } */
      }
      .footer {
        color: #e0e0e0;
        background: #2e3237;
      }
    }
  }
`;

export const KdsWrapPost = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('/images/intro-logo.svg') no-repeat center;

  .noOrder {
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 20px;
  }
`;

export const KdsContentPost = styled.div`
  height: 100%;
  padding: 20px;
  background-color: #e3e4e9;

  .grid-container {
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;

    height: calc(100% - 70px);

    box-sizing: border-box;
  }

  @media (max-width: 500px) {
    padding: 10px;

    .grid-container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 10px;
      box-sizing: border-box;
      height: calc(100% - 40px);
    }
  }
`;
export const KdsContent = styled.div`
  position: relative;
  height: 100vh;
  /* padding: 2.4rem;
  background: #212529; //E0E0E0 */

  .swiper,
  .swiper-slide,
  ${SlidePageWrap} {
    height: 100%;
  }

  .noOrder {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2.4rem;

    .title {
      margin-bottom: 30px;
    }
  }
`;

export const KdsPagingInfo = styled.div`
  width: fit-content;
  margin: 1.2rem auto;
  padding: 0.8rem 1.6rem;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  font-family: 'Montserrat';
  text-align: center;
  border-radius: 3.6rem;
  background: #222222;
`;

export const PrepStatusWrap = styled.div`
  .top {
    h2 {
      font-size: 1.6rem;
      font-weight: bold;
    }

    .list_frip_menu {
      display: grid;
      align-items: center;
      gap: 1.6rem;
      padding: 2.4rem;
      grid-template-columns: 1fr 1fr;
      border-bottom: 1px solid #e0dee0;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 19.8rem;
        height: 6.1rem;
        color: #fff;
        font-size: 2.4rem;
        border-radius: 0.4rem;
        background: #828282;

        &.on {
          background: #ff4600;
        }
      }
    }
  }

  .list_prep_items {
    overflow-y: auto;
    height: calc(100vh - 36.7rem);
    li {
      display: flex;
      padding: 4.2rem 0 1.9rem;
      font-size: 2rem;
      font-weight: 500;
      border-bottom: 1px solid #e0dee0;

      .quanity {
        margin-left: auto;
        padding-right: 4.2rem;
        background: url('/images/arrow_prep_right.svg') no-repeat right center;
        background-size: 2.4rem;
      }
    }
  }
`;

export const PrepManagementWrap = styled.div`
  .status {
    display: flex;
    align-items: center;
    height: 6.9rem;
    padding: 1.8rem 2.4rem;
    color: #333;
    font-size: 2rem;
    font-weight: 70rem;
    line-height: 2.9rem;
    background: #f2f2f2;

    .number {
      margin-left: auto;
      color: #ff4600;
    }
  }

  .control {
    display: flex;
    align-items: center;
    margin: 0 2.4rem;
    padding: 2.4rem 0;
    border-bottom: 1px solid #e0e0e0;
    .title {
      color: #2f80ed;
      font-size: 2rem;
      line-height: 2.9rem;
    }
    .btn_area {
      margin-left: auto;
    }
  }
  button {
    width: 7.7rem;
    height: 3.3rem;
    line-height: 3.3rem;
    border-radius: 2px;
    background: #f2f2f2;

    &.add_btn .txt {
      color: #2f80ed;
      background: url('/images/ico_prep_add.svg') no-repeat left center;
    }
    &.add_confirm {
      margin-left: 2rem;
      .txt {
        color: #bdbdbd;
        background: url('/images/ico_prep_confirm.svg') no-repeat left center;
      }
      &.on {
        .txt {
          color: #fff;
          background: url('/images/ico_prep_confirm_white.svg') no-repeat left
            center;
        }
        background: #2f80ed;
      }
    }
    .txt {
      padding-left: 2.3rem;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  .list_prep {
    li {
      display: flex;
      align-items: center;
      margin: 0 2.4rem;
      padding: 2.4rem 0;
      font-size: 1.6rem;
      border-bottom: 1px solid #e8e9e8;

      .button_area {
        margin-left: auto;

        .btn_use,
        .btn_trash {
          width: 7.7rem;
          height: 3.3rem;
          line-height: 3.3rem;
          border-radius: 2px;
          background: transparent;

          &:hover {
            color: #fff;
          }
        }
        .btn_use.on,
        .btn_trash:disabled {
          color: #bdbdbd;
          border: 1px solid #bdbdbd;

          &:hover {
            color: #333;
            background: #bdbdbd;
          }
        }
      }

      .btn_use {
        margin-right: 1rem;
        color: #2f80ed;
        border: 1px solid #2f80ed;

        &:hover {
          background: #2f80ed;
        }
      }
      .btn_trash {
        color: #ef4747;
        border: 1px solid #ef4747;

        &:hover {
          background: #ef4747;
        }
      }
    }
  }
`;

export const FilterLayer = styled.div`
  position: absolute;
  z-index: 1000;
  top: 4rem;
  left: 0;
  width: max-content;
  min-width: 13rem;
  color: #333;
  font-size: 1.6rem;
  font-weight: 400;
  border-radius: 0.4rem;
  filter: drop-shadow(0px 0.8rem 2.2rem rgba(0, 0, 0, 0.25));
  background: #fff;

  li {
    display: flex;
    border-bottom: 1px solid #eee;
    align-items: center;

    label {
      width: 100%;
      padding: 1.2rem 1.6rem;
    }

    input[type='checkbox'],
    input[type='radio'] {
      margin-right: 1rem;
      border: 1px solid #bdbdbd;
    }

    input[type='checkbox'] {
      border-radius: 0.4rem;
    }

    &:last-of-type {
      border-bottom: 0;
    }
  }
`;

export const SettingLayerWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 58.3rem;
  height: fit-content;
  border-radius: 1rem;

  .box_profile {
    display: flex;
    align-items: center;

    padding: 4.8rem 0 3.2rem 3.2rem;
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 13.8rem;
      height: 13.8rem;
      border-radius: 50%;
      background: #ff4600;

      img {
        width: 11.121rem;
      }
    }

    .info {
      margin: 0 0 0.4rem 5.6rem;
      color: rgb(33, 37, 41);
      font-weight: 500;
      line-height: 1.2;

      .name {
        color: #fff;
        font-size: 3.2rem;
        font-weight: bold;
      }

      .email {
        margin: 0.8rem 0;
        font-size: 1.6rem;
        font-weight: normal;
        font-family: 'Montserrat';
        color: #969492;
      }
      .store_name {
        color: #ffbc2c;
        font-size: 2.4rem;
      }
    }
  }
  .btn_logout {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 7.8rem;
    color: #ffffff;
    font-size: 2.4rem;
    font-weight: bold;
    background: #2e3237;
  }

  h2 {
    margin: 6.4rem 0 1.2rem 2.4rem;
    color: #9d9d9d;
    font-size: 2.4rem;
    font-weight: bold;
  }

  ul {
    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 8.8rem;
      padding: 0 2.4rem;
      font-size: 2.4rem;
      border-bottom: 1px solid #4f4f4f;

      button {
        color: #fff;
        font-size: 2.4rem;
        background: transparent;
        width: 100%;
        display: flex;
      }

      &:first-of-type {
        border-top: 1px solid #4f4f4f;
        &.selected {
          border-top: 1px solid #000000;
        }
      }
      &.selected {
        background: #212529;

        border-bottom: 1px solid #000000;
      }
    }
  }

  .ico_check {
    display: flex;
    margin-left: auto;
    width: 3.2rem;
    height: 3.2rem;
    background: url('/images/ico_store_check.svg') no-repeat left center;
    background-size: 3.2rem;
  }

  .toggle {
    --width: 4rem;
    --height: calc(var(--width) / 2);
    --border-radius: calc(var(--height) / 2);

    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 1.5rem;
    margin-left: auto;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgb(239, 239, 239);
    .txt {
      font-size: 1.4rem;
      margin-right: 10px;
    }
  }

  .toggle__input {
    display: none;
  }

  .toggle__fill {
    position: relative;
    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius);
    background: #dddddd;
    transition: background 0.2s;
  }

  .toggle__fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: var(--height);
    width: var(--height);
    background: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: var(--border-radius);
    transition: transform 0.1s;
  }
  .toggle__input:checked ~ .toggle__fill {
    background: #76adff;
  }

  .toggle__input:checked ~ .toggle__fill::after {
    transform: translateX(var(--height));
  }

  .area_grid_setting {
    display: flex;
    align-items: center;
    margin-left: auto;

    button {
      display: inline-block;
      width: 2rem;
      height: 2rem;
    }

    .btn_prev {
      margin-right: 1rem;
      background: url('/images/arrow_grid_prev.svg') no-repeat center;
    }
    .btn_next {
      margin-left: 1rem;
      background: url('/images/arrow_grid_next.svg') no-repeat center;
    }
  }
`;

export const LayerArea = styled.div`
  position: absolute;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  &:before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const SummeryLayerWrap = styled.div`
  overflow-y: auto;
  .list_summary {
    width: 100%;
    margin: 1rem 0 0 0;

    th,
    td {
      text-align: right;
      &:first-of-type {
        width: 45%;
        padding-left: 2.4rem;
        text-align: left;
      }
      &:last-of-type {
        padding-right: 2.4rem;
      }
    }

    th {
      height: 7.8rem;
      font-size: 2.4rem;
      color: #9d9d9d;
      font-weight: bold;
      border-bottom: 1px solid #2e3237;
    }
    td {
      height: 8.8rem;
      font-size: 2rem;
      border-bottom: 1px solid #4f4f4f;

      .number,
      .txt {
        display: inline-block;
        vertical-align: middle;
      }

      .number {
        color: #ff4600;
        font-size: 2.4rem;
      }
      .txt {
        color: #9d9d9d;
        font-size: 2rem;
      }
      &.ing {
        &:after {
          display: inline-block;
          position: relative;
          top: 0.3rem;
          content: '';
          width: 2rem;
          height: 2rem;
          margin-left: 1rem;
          background: url('/images/spinner_waiting.gif') no-repeat left top;
          background-size: 2rem 2rem;
        }
      }
    }

    .un {
      td {
        color: #ffc85e;
      }
    }
  }
`;

export const DatePickerWrap = styled.div`
  .react-datepicker-wrapper {
    display: inline-flex;
    position: relative;
    height: 4rem;
    border-radius: 0.4rem;
    background: #2e3237;

    &::after {
      position: absolute;
      top: 50%;
      right: 10px;
      content: '';
      width: 3.2rem;
      height: 3.2rem;
      margin-top: -1.6rem;
      background: url('/images/icon_calendar.svg') no-repeat left center;
      background-size: 3.2rem 3.2rem;
    }

    input {
      width: 100%;
      height: 100%;
      padding: 0rem 3.5rem 0rem 1.05rem;
      color: #9d9d9d;
      font-size: 2.4rem;
      font-weight: 400;
      border: 0;
      background: transparent;
    }
  }

  .react-datepicker {
    border-radius: 1rem;
    box-shadow: 0 0.2rem 0.4rem rgb(58 58 58 / 20%);
    border: 0;
    color: #333;
    background: #2e3237;
    font: inherit;
  }

  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 0.2rem;
    padding: 0;
    border: none;
    z-index: 1;
    height: 3.2rem;
    width: 3.2rem;
    text-indent: -999rem;
    overflow: hidden;
  }
  .react-datepicker__navigation {
    height: 4rem;
    width: 4rem;
    top: 0;
    position: absolute;
  }
  .react-datepicker__header {
    text-align: center;
    border-bottom: 1px solid #aeaeae;
    border-top-left-radius: 0.8rem;
    padding: 0.8rem 0;
    position: relative;
  }
  .react-datepicker__header {
    padding: 0;
    border-bottom: 0;
  }
  .react-datepicker__day-names {
    margin-bottom: 0;
  }
  .react-datepicker__header .react-datepicker__day-names {
    padding: 0 1.6rem;
  }
  .react-datepicker__header {
    border: none;
    background: #2e3237;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 1.2rem;
  }
  .react-datepicker__day-names,
  .react-datepicker__week {
    display: flex;
    flex-wrap: nowrap;
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0;
    color: #000;
    font-weight: bold;
    font-size: 1.4rem;
  }
  .react-datepicker__current-month {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 1.6rem;
    padding: 3.2rem 0.8rem 3.2rem;
    height: 3.9rem;
    color: #9d9d9d;
  }
  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
  }
  .react-datepicker__day-names {
    margin-bottom: -0.8rem;
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    width: 4.5px;
    height: 4.5px;
    top: 20px;
    border-width: 2px 2px 0 0;
  }

  .react-datepicker__day-name {
    color: #d5d5d6 !important;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #6d6d6d;
    display: inline-block;
    width: 2.68rem;
    line-height: 2.68rem;
    text-align: center;
    margin: 1.3rem;
    font-size: 1.4rem;
  }

  .react-datepicker__month {
    margin: 1.2rem;
    text-align: center;
  }
  .react-datepicker__day:not(.react-datepicker__day--disabled):focus,
  .react-datepicker__day:not(.react-datepicker__day--disabled):not(
      :disabled
    ):hover {
    border-radius: 4.5rem;
    background-color: #f2f2f2;
  }
  .react-datepicker__day--disabled {
    color: #ddd !important;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: #ff6d00 !important;
    color: #fff;
    border-radius: 4.5rem;
  }
`;

export const HistoryLayerWrap = styled.div`
  ${DatePickerWrap} {
    width: 20.4rem;
    margin-left: auto;
  }

  .head {
    border-bottom: none;

    h2 {
      color: #9d9d9d;
      font-weight: 700;
      font-size: 2.4rem;
    }
  }

  .list_order {
    overflow: auto;
    max-height: calc(100vh - 18rem);

    > li {
      padding: 2.4rem;

      &:first-of-type {
        border-top: 1px solid #4f4f4f;
      }

      border-bottom: 1px solid #4f4f4f;

      .orderid {
        color: #ffbc2c;
        font-size: 2.4rem;
        font-weight: 700;

        .txt_sale_type {
          margin-left: 1.2rem;
        }
      }

      &.nodata,
      .info_time {
        display: flex;
        margin: 1.2rem 0;
        color: #9d9d9d;
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 4rem;

        .completed {
          margin-left: auto;
        }
      }

      .order_menu {
        li {
          color: #fff;
          font-size: 2.4rem;
          font-weight: 5rem;
          line-height: 4rem;
        }
      }
    }
  }
`;

export const ReceiptHandlerPopWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1005;
  width: 100vw;
  height: 100vh;
  background: #212529;

  &.on {
    .list_item {
      height: 58rem;
      transition: height 0.5s;
    }
    .box_btn {
      bottom: 0;
      transition: bottom 0.5s;
    }
  }

  h2 {
    display: flex;
    align-items: center;
    height: 10rem;
    padding: 0 2rem 3.2rem;

    .txt_receipt_number {
      color: #9d9d9d;
      font-size: 2.4rem;
      font-family: 'Montserrat';
    }
    .txt_receipt_name {
      margin: 0 auto;
      color: #fff;
      font-size: 3.6rem;
      font-weight: bold;
    }
    .btn_go_prev {
      color: #9d9d9d;
      font-size: 2.4rem;
      padding-left: 3.6rem;
      background: url('/images/arrow_pop_mapping.svg') no-repeat left center;
    }
  }

  .btn_layer_close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background: url('/images/ico_layer_close.svg') no-repeat center;
    background-size: 1.4rem;

    &:hover {
      background-color: #dadada;
      transition: background-color 0.35s;
    }
  }

  .list_category {
    display: grid;
    gap: 0.8rem;
    padding: 0 2rem 6.4rem;
    grid-auto-flow: column;
    grid-auto-columns: auto;

    &.add {
      grid-template-columns: repeat(7, 1fr);
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 15.6rem;
      color: #fff;
      font-size: 3.6rem;
      border-radius: 0.4rem;
      background: #2e3237;

      &.on {
        background: #ff4600;
      }
    }
  }

  .list_item {
    overflow-y: auto;
    display: grid;
    gap: 1.6rem;
    height: calc(100vh - 35.2rem);
    padding: 0 2rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: min-content;

    button {
      width: 100%;
      height: 21.6rem;
      color: #9d9d9d;
      font-size: 3.6rem;
      font-weight: 500;
      text-align: center;
      cursor: pointer;
      border: 0.2rem solid #3c3f42;
      border-radius: 0.4rem;
      background: transparent;
      word-break: keep-all;

      &.on {
        opacity: 1;
        color: #ff4600;
        border: 0.8rem solid #ff4600;
        background: transparent;
      }
    }
  }

  .box_btn {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    bottom: -18.4rem;

    width: 100%;
    height: 18.4rem;
    padding: 0 2.4rem;
    background: #3c3f42;
    box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.5);

    button {
      flex: 1;
      height: 12.2rem;
      font-size: 3.6rem;
      font-weight: 700;
      color: #fff;
      border-radius: 0.4rem;

      &.btn_cancle {
        color: #fff;
        background: #2e3237;
      }

      &.btn_submit {
        background: #ff4600;
      }
    }
  }
`;

export const ReceiptHandlerPopWrap2 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 68.5rem;

  border-radius: 0.5rem;
  background: #fff;

  h2 {
    padding: 3rem 0 3.6rem;
    font-size: 2.4rem;
    font-weight: bold;
    text-align: center;
  }

  .btn_layer_close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background: url('/images/ico_layer_close.svg') no-repeat center;
    background-size: 1.4rem;

    &:hover {
      background-color: #dadada;
      transition: background-color 0.35s;
    }
  }

  dl {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding: 0 3rem;

    dt {
      font-size: 1.4rem;
      font-weight: 700;
      width: 13rem;

      &:last-of-type {
        margin-top: 1rem;
        align-self: flex-start;
      }
    }
    dd {
      display: block;
      width: 100%;

      select {
        width: 11.8rem;
        padding-left: 0.5rem;
      }

      input {
        width: calc(100% - 4.3rem);
        height: 100%;
        border: none;
      }
    }
  }

  .box_inp {
    display: flex;
    padding-left: 0.5rem;
  }
  select,
  .box_inp {
    height: 4rem;
    border: 0.1rem solid #e0e0e0;
    border-radius: 0.25rem;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
  select:focus,
  .box_inp.on {
    outline: 0;
    border-color: #000;
    box-shadow: 0 0 0 0.25rem rgba(47, 128, 237, 0.25);
  }
  .btn_search {
    width: 3.8rem;
    height: 3.8rem;
    background: url(/images/btn_search.svg) no-repeat center center transparent;
    background-size: 1.8rem;
  }

  .list_mapping {
    height: 38.4rem;
    overflow-y: auto;
    border-bottom: 1px solid #bdbdbd;
    li {
      &:hover {
        background-color: #e3f5ff;
      }
      &.nodata {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: #bdbdbd;
        font-size: 1.4rem;
        font-weight: bold;

        .txt {
          padding-top: 5.2rem;
          background: url(/images/ico_notification.svg) no-repeat center top;
          background-size: 4.2rem;
          filter: invert(61%) sepia(87%) saturate(0%) hue-rotate(252deg)
            brightness(105%) contrast(91%);
        }
      }
      label {
        display: flex;
        align-items: center;
        padding: 1rem 0;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1;
        border-bottom: 1px solid #bdbdbd;

        .box_radio {
          width: 87px;
          input[type='radio'] {
            display: block;
            width: 1.8rem;
            height: 1.8rem;
            margin: 0 auto;
          }
        }

        .product_id {
          width: 17.4rem;
          text-align: center;
        }
        .product_name {
          width: calc(100% - 17.5rem);
          text-align: center;
        }
      }
    }
  }
  .box_btn {
    display: flex;
    padding: 1.6rem;
    border-top: 1px solid #dee2e6;

    button {
      min-width: 8.4rem;
      height: 4rem;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 4rem;
      color: #fff;
      background: #bdbdbd;
      border-radius: 0.4rem;
      transition:
        opacity 0.35s,
        color 0.35s ease-out,
        background 0.35s ease-out;

      &.btn_cancle {
        margin: 0 0.8rem 0 auto;
        color: #828282;
        border: 1px solid #828282;
        background: transparent;
      }

      &.btn_submit {
        background: #2f80ed;
        &:hover {
          background: rgba(47, 128, 237, 0.8);
        }
      }
    }
  }
`;

export const LayerConfirmWrap = styled.div`
  &:before {
    content: '';
    position: fixed;
    z-index: 1001;
    top: 10rem;
    left: 0;
    width: 100vw;
    height: calc(100vh - 10rem);
    background: rgba(0, 0, 0, 0.7);
  }
  .popup {
    position: fixed;
    z-index: 1002;
    top: 50%;
    left: 50%;
    width: 50.8rem;
    transform: translate(-50%, -50%);
    padding: 3.6rem 2.4rem 2.4rem;
    color: #4f4f4f;
    background: #ffffff;
    box-shadow: 0px 0.8rem 2.2rem rgba(0, 0, 0, 0.25);
    border-radius: 0.4rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.6rem;
    }

    p {
      min-height: 4.8rem;
      margin: 0.8rem 0 2.4rem;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.3rem;
    }

    .box_btn {
      display: flex;
      justify-content: flex-end;

      button {
        width: 8.4rem;
        height: 4rem;
        font-size: 1.6rem;
        line-height: 4rem;
        text-align: center;
        border-radius: 0.4rem;

        &.btn_cancle {
          margin-right: 1rem;
          color: #828282;
          border: 1px solid #828282;
          background: #fff;
        }

        &.btn_confirm {
          color: #fff;
          background: #2f80ed;
        }
      }
    }
  }
`;
