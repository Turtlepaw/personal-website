<div align="center">
<img src="./public/Avatar.svg" width="100rem"/>
<h3>Personal Website Template</h3>
This is a template for a personal website, it's pretty easy to setup.
</div>

### Table of Contents
- [Features](#features)
- [Preview](#preview)
- [Setup](#setup)
    - [Deploying with Vercel](#deploying-with-vercel)
    - [Setup Guide](#setup-guide)
- [Advanced Configuration](#advanced-configuration)
- [Adding Redirection Links](#adding-redirection-links)
- [Notes](#notes)
    - [Icons](#icons)
    - [Configurable Text/Items](#configurable-textitems)
- [Changelog](#changelog)

## Features
- 🖼️ Embed Support
- 🌿 
Stylish
- ⚙️ Easy configuration
- 🚀 Preloaded Icons
- 🛠️ Built in Typescript
## Preview
<img src="./media/msedge_8PyZ5XJ8Xe.png" width="300rem"/>

## Setup
#### Deploying with Vercel
If you're using Vercel to host, use this button.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTurtlepaw%2Fpersonal-website)

#### Setup Guide
After that, or if you're not using vercel:

1. Go ahead and use the `Use Template` button, skip this step if you've used [the button above](#deploying-with-vercel).
![Use Template Button](/media/8ycaM4PXCM.png)
2. Start off by cloning your repo (`git clone [URL]`)
3. Once you're done that, run `yarn` to install all the required packages
4. Make sure there's no errors by running `yarn dev`
5. Now, you can start configuring your site by going to `_app.tsx` and editing the `Configuration` object
![Configuration Object](/media/msedge_t34PKyy5Y1.png)
6. You're almost done, deploy your site with your favorite hosting tool, you can even use [GitHub Pages](https://pages.github.com/)
7. **🎉 You're done!** If you like this template, please give it a **⭐ Star**

## Advanced Configuration
If you're looking to change some of these [Configurable Text/Items](#configurable-textitems), you can edit these by going to `_app.tsx` and changing the `Configuration` object:

```ts
export const Configuration: WebsiteConfiguration = {
  Name: "Username",
  Avatar: "/Avatar.svg",
  DiscordTag: "#0000",
  Description: "Hello, I'm an open-source personal website template!"
}
```
***Pro Tip:** Hover on a property (e.g. `Name`) to get more information on it.*

If you want to edit more than that, just edit the React code!

## Adding Redirection Links
Start by going into `next.config.js`, you can create a redirection link like this:

```js
const nextConfig = {
  //...
  async redirects() {
    return [
      ...MultipleLinks("https://discord.com/", "/r"),
      // You can put more links here by copying the
      // code above.
    ]
  }
}
```

## Notes
#### Icons
If you're looking to get more of the icons provided, they are from Fluent Icons by Microsoft, I'm using [this website](https://fluenticons.co) to find and download them.

#### Skill Icons
Skill icons (shown in `My Skills` or in `/public/icons`) were put together by [Skill Icons](https://skillicons.dev/). Check out their [license](https://github.com/Turtlepaw/personal-website/blob/main/SkillIcons_LICENSE) or their [Github](https://github.com/tandpfun/skill-icons)
#### Configurable Text/Items
- `About me (the text)`
- `Where you can find me (all the links)`
- `My Skills (all your skills)`
- `What I do (all the cards)`
- `Navigation Links (located at the top of thepage)`
- `The title (default: Username)`
- `Discord Tag (default: #0000)`

## Changelog
### 10/23/2022
- Add styling for skill icons
- Add more skill icons
- Fix bug where `SkillStyle` would always be `Block`
### 10/23/2022
- Add `My Skills` section
- Add skill icons
### 10/21/2022
- Fix interactable support
- Add support for rounded icons
- Add redirection support
- Add embed support
### 10/21/2022
- Publish