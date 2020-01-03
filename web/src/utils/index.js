import styled, { css } from "styled-components"

export const clearfix = css`
  ::after {
    content: "";
    clear: both;
    display: table;
  }
`

// Media Query Helpers

// below needed to prevent adding semicolon at the end
/* prettier-ignore */
export const fluid = breakPoint => css`
  @media only screen and (min-width: ${props => props.theme.breakpoints[breakPoint]})`
/* prettier-ignore-end */

export const fluidType = (
  minSize,
  maxSize,
  minVw,
  maxVw,
  minLineHeight,
  maxLineHeight
) => css`
  font-size: calc(
    ${minSize}px + (${maxSize} - ${minSize}) *
      ((100vw - ${minVw}px) / (${maxVw} - ${minVw}))
  );
  line-height: calc(
    ${minLineHeight}px + (${maxLineHeight} - ${minLineHeight}) *
      ((100vw - ${minVw}px) / (${maxVw} - ${minVw}))
  );
  @media screen and (min-width: ${maxVw}px) {
    font-size: ${maxSize}px;
    line-height: ${maxLineHeight}px;
  }
`

export const fluidSize = (minSize, maxSize, minVw, maxVw) => css`
calc(
    ${minSize}px + (${maxSize} - ${minSize}) *
      ((100vw - ${minVw}px) / (${maxVw} - ${minVw}))
  );
`
export const DevWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: #e2eff0;
`
// fundamnetal linear interpolation:
// difference_1 = max_1 - min_1
// let x in [min_1, max_1]
// then there is a y s.t. min_1 + difference_1 * y = x
export const interpolateSizes = (min, max, minW, maxW) => css`
  calc(${min}px + (${max} - ${min}) * ((100vw - ${minW}px) / (${maxW} - ${minW})))
`
