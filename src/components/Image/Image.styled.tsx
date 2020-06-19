import styled from 'styled-components';

export const ImageWrapper = styled.figure`
  position: relative;
`;

export const Image = styled.img`
  max-width: 100%;
  transition: box-shadow 0.2s;
  object-fit: cover;

  &.draftJsFocusPlugin__unfocused__1Wvrs:hover {
    border-radius: 4px;
    box-shadow: 0 0 0 2px #aeb2c9;
  }

  &.draftJsFocusPlugin__focused__3Mksn {
    border-radius: 4px;
    box-shadow: 0 0 0 2px #00badd;
  }
`;
