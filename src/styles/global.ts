import { createGlobalStyle } from 'styled-components';
import 'styled-components';
import { FontFamilyEnum } from './global.d';
import { DefaultTheme } from 'styled-components';

const size = {
  sm: '768px',
  lg: '1200px',
};

export const device = {
  mobile: `(max-width: ${size.sm})`,
  desktop: `(max-width: ${size.lg})`,
};

// TODO - we need to have one declaration file,
// right now sybil also extending styled-components, hence 'any'
// we'll need to merge them at some point
// https://styled-components.com/docs/api#create-a-declarations-file
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const theme: DefaultTheme | any = {
  colors: {
    darkPurple: '#100817',
    deepPurple: '#271D47',
    darkPurpleHover: '#231A3A',
    darkPurpleBorder: '#191027',
    generalOutlineDark: '#1C1026',
    purple: '#9867CE',
    purpleDisabled: '#7040A5',
    lightPurple: '#DAD0E6',
    white: '#FFFFFF',
    dimmedPurple: '#75668C',
    dimmedHover: '#9486AA',
    purpleHighlight: '#AF66FF',
    newMessageColor: '#50456F',
    error: '#F77272',
    success: '#69C978',
    warning: '#E8BB47',
    black: '#25273d',
    light: '#787a9b',
  },
  fontFamily: {
    Inter: FontFamilyEnum.Inter,
    Montserrat: FontFamilyEnum.Montserrat,
  },
  fontSizes: {
    XXS: '10px',
    XS: '12px',
    S: '14px',
    M: '16px',
    L: '20px',
    Xl: '24px',
    XXl: '32px',
  },
  fontWeights: {
    medium: 400,
    large: 700,
  },
};

export const GlobalStyles = createGlobalStyle`

.circle {
  border-radius: 50%;
}

.translucent {
  opacity: 0.2;
}

  @keyframes pageload {
    0% {
      opacity: 0;
      transform: translateY(35px);
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes pageload2 {
    0% {
      opacity: .75;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes pageload3 {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    75% {
      opacity: 0;
      transform: translateY(40px);

    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes cardload1 {
    0% {
      opacity: 0;
      transform: translateY(35px);
    }
    25% {
      opacity: 0;
      transform: translateY(35px);

    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes cardload2 {
    0% {
      opacity: 0;
      transform: translateY(35px);
    }
    50% {
      opacity: 0;
      transform: translateY(35px);

    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes cardload3 {
    0% {
      opacity: 0;
      transform: translateY(25px);
    }
    65% {
      opacity: 0;
      transform: translateY(35px);

    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

@font-face {
  font-family: 'Inter';
  src: url('/assets/fonts/Inter.ttf')
      format('truetype supports variations'),
    url('/assets/fonts/Inter.ttf')
      format('truetype-variations');
  font-weight: 100 1000;
}

@font-face {
  font-family: 'Montserrat';
  src: url('/assets/fonts/Montserrat.ttf')
      format('truetype supports variations'),
    url('/assets/fonts/Montserrat.ttf')
      format('truetype-variations');
  font-weight: 100 1000;
}

@font-face {
  font-family: 'Montserrat-Italic';
  src: url('/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf')
      format('truetype supports variations'),
    url('/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf')
      format('truetype-variations');
  font-weight: 100 1000;
}


// CSS RESET START
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
  font-family: ${theme.fontFamily.Inter};
  font-weight: 500;
  box-sizing: border-box;

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
// CSS RESET END
`;
