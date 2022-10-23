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

export enum TailwindRoundedSizes {
  ExtraLarge = "rounded-xl",
  Large = "rounded-lg",
  Medium = "rounded-md",
  Small = "rounded-sm",
  ExtraSmall = "rounded-sm",
  Full = "rounded-full",
  // Here you can create a custom
  // rounded preset.
  Custom = "rounded=[.5rem]"
};

export enum LinkStyle {
  /**
   * Similar like the "Connections" tab in Discord.
   */
  Bordered = "border-[.1rem] mx-2 my-2 rounded-[.20rem] border-[#3b3d44]",
  None = ""
}

export enum Icons {
  React = "/icons/React-Dark.svg",
  CSS = "/icons/CSS.svg",
  HTML = "/icons/HTML.svg",
  Discord = "/icons/Discord.svg",
  Blender = "/icons/Blender-Dark.svg",
  Cloudflare = "/icons/Cloudflare-Dark.svg",
  Codepen = "/icons/CodePen-Dark.svg",
  ExpressJS = "/icons/ExpressJS-Dark.svg",
  Git = "/icons/Git.svg",
  Github = "/icons/Github-Dark.svg",
  Markdown = "/icons/Markdown-Dark.svg",
  NextJS = "/icons/NextJS-Dark.svg",
  Vercel = "/icons/Vercel-Dark.svg",
  StackOverflow = "/icons/StackOverflow-Dark.svg",
  SVG = "/icons/SVG-Dark.svg",
  Twitter = "/icons/Twitter.svg",
  VisualStudio = "/icons/VisualStudio-Dark.svg",
  VSCode = "/icons/VSCode-Dark.svg",
  JavaScript = "/icons/JavaScript.svg",
  NodeJS = "/icons/NodeJS-Dark.svg",
  DiscordBots = "/icons/DiscordBots.svg",
}

export enum SkillStyles {
  Card = "card px-5 py-5",
  InteractableCard = "card ActiveCard px-5 py-5",
  /**
   *  Similar to a Discord Role
   */
  Block = "",
  None = "none"
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
   * If the Icon should have rounded corners.
   */
  IconRounded?: TailwindRoundedSizes;
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
  /**
   * The website url for the embed.
   */
  WebsiteURL: URL;
  /**
   * The skills to appear in the "MY SKILLS" section.
   */
  Skills?: (Icons | string)[];
  /**
   * The style to display your skills in.
   */
  SkillStyle?: SkillStyles;
}

// Configuration*
// ^ This is required
// This is what'll appear on your website
export const Configuration: WebsiteConfiguration = {
  WebsiteURL: "https://example.com/",
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
  }],
  Skills: [
    Icons.CSS,
    Icons.HTML,
    Icons.React
  ],
  SkillStyle: SkillStyles.Block
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
          {/* Primary Meta Tags */}
          <meta name="title" content={Configuration.Name} />
          <meta name="description" content={Configuration.Description} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={Configuration.WebsiteURL} />
          <meta property="og:title" content={Configuration.Name} />
          <meta property="og:description" content={Configuration.Description} />
          <meta property="og:image" content={Configuration.Avatar} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={Configuration.WebsiteURL} />
          <meta property="twitter:title" content={Configuration.Name} />
          <meta property="twitter:description" content={Configuration.Description} />
          <meta property="twitter:image" content={Configuration.Avatar} />

          <link rel="icon" href={Configuration.Avatar} />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  )
}

export default MyApp
