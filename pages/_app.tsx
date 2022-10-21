import '../styles/globals.css'
import '../styles/index.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'

// </> Typings </>
export type URL = `${"http" | "https"}://${string}.${string}` | `/${string}` | `mailto:${string}`;
export type ImageURL = `/${string}.${"svg" | "png" | "jpg" | "jpeg"}` | URL;
export type DiscordTag = `#${number}${number}${number}${number}`

export enum LinkStyle {
  /**
   * Similar like the "Connections" tab in Discord.
   */
  Bordered = "border-[.1rem] mx-2 my-2 rounded-[.20rem] border-[#3b3d44]",
  None = ""
}

export interface WebsiteLink {
  URL: URL;
  Icon?: ImageURL;
  Name?: string;
}

export interface WebsiteSection {
  /**
   * The title that will appear on the card.
   */
  Title: string;
  /**
   * The icon for the card.
   */
  Icon?: ImageURL;
  /**
   * If the icon selected should have a gray background.
   */
  IconBackground?: boolean;
  /**
   * The emoji that will appear as the icon.
   */
  Emoji?: string;
  /**
   * The description (text) that will appear below the title.
   */
  Description: React.ReactNode;
  /**
   * If this card should have a pointer cursor.
   */
  Interactable?: boolean;
  /**
   * The link that the card will have.
   */
  Link?: URL;
}

export interface WebsiteConfiguration {
  /**
   * Your username or the title for the website.
   */
  Name: string;
  /**
   * If you have a Discord profile, you can put your tag here. It'll appear next to your name.
   */
  DiscordTag?: DiscordTag;
  /**
   * Your avatar or the icon for the website.
   */
  Avatar?: ImageURL;
  /**
   * Your description (or "bio") that will appear below your name.
   */
  Description?: string;
  /**
   * The links that will appear in the "WHERE YOU CAN FIND ME" section.
   */
  Links?: WebsiteLink[];
  /**
   * The links that will appear on the top of the page.
   */
  NavigationLinks: WebsiteLink[];
  /**
   * The cards that will appear in the "WHAT I DO" section.
   */
  Sections?: WebsiteSection[];
  /**
   * The style of the Links.
   */
  LinkStyle?: LinkStyle;
}

// Configuration*
// ^ This is required
// This is what'll appear on your website
export const Configuration: WebsiteConfiguration = {
  Name: "Username",
  Avatar: "/Avatar.svg",
  DiscordTag: "#0000",
  Description: "Hello, I'm an open-source personal website template!",
  NavigationLinks: [{
    URL: "mailto:username@mail.com",
    Icon: "/Mail.svg"
  }, {
    Icon: "/DiscordOutlined.svg",
    URL: "/Discord",
  }, {
    Icon: "/TwitterOutlined.svg",
    URL: "/Twitter",
  }],
  Links: [{
    Icon: "/Discord.svg",
    URL: "/Discord",
    Name: "Discord"
  }, {
    Icon: "/Twitter.svg",
    URL: "/Twitter",
    Name: "Twitter"
  }, {
    Icon: "/Github.svg",
    URL: "/Github",
    Name: "Github"
  }, {
    Icon: "/Reddit.svg",
    URL: "/Reddit",
    Name: "Reddit"
  }, {
    Icon: "/YouTube.svg",
    URL: "/Youtube",
    Name: "YouTube"
  }],
  LinkStyle: LinkStyle.None,
  Sections: [{
    Interactable: false,
    Emoji: "🌿",
    Title: "Stylish",
    Description: "It looks good, on mobile, and on desktop."
  }, {
    Interactable: false,
    Emoji: "🕊️",
    Title: "Social Icons Included",
    Description: "We've included some social icons, like Reddit, Discord, and Twitter."
  }, {
    Interactable: false,
    Emoji: "⚙️",
    Title: "Easy to Configure",
    Description: "With the configuration object, you can configure some features, and if you want to configure more, you can always edit the React code."
  }]
}


const colours = {
  'blurple': '#5865F2',
  'blurple.500': '#5865F2',
  'green': '#3BA55C',
  'red': '#ED4245',
  'grey.extralight': '#ebedef',
  'grey.light': '#4F545C',
  'grey.dark': '#292b2f',
  'grey.extradark': '#1f2022',
  'bg': '#202020',
};

const { blurple, } = colours;

const theme = extendTheme({
  colors: colours,
  styles: {
    global: (props: any) => ({
      hr: {
        borderColor: "#33353b"
      },
      button: {
        _hover: {
          opacity: "85%"
        }
      },
    })
  },
  components: {
    Button: {
      baseStyle: {
        color: 'white',
      },
      variants: {
        primary: {
          bg: blurple
        },
        secondary: {
          bg: 'grey.light'
        },
        success: {
          bg: 'green'
        },
        destructive: {
          bg: 'red'
        },
        outline: {
          _hover: {
            bg: 'grey.light'
          }
        },
        outlineDark: {
          border: "1px solid #222",
          bgColor: "transparent",
          _hover: {
            bg: 'rgb(50, 50, 50)'
          }
        }
      },
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="Background Text">
      <ChakraProvider theme={theme}>
      <Head>
        <title>{Configuration.Name}</title>
        <meta name="description" content={Configuration.Description} />
        <link rel="icon" href={Configuration.Avatar} />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
    </div>
  )
}

export default MyApp
