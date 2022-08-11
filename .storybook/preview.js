import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"

import { theme } from "../src/themes"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
html,
body,
   textarea {
     padding: 0;
     margin: 0;
     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
       Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
   }
   * {
     box-sizing: border-box;
   }
   a {
     text-decoration: none;
     transition: .25s;
     color: #000000;
   }
`
// Themeの適用
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
))

// next/imageはstorybook上で動作しないため、差し替えている
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => typeof props.src === 'string' ? (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ) : (
    <OriginalNextImage {...props} unoptimized />
  ),
})

Object.defineProperty(NextImage, '__esModule', {
  configurable: true,
  value: true,
})
