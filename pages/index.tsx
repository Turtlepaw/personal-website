import { Button, Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Configuration, SkillStyles } from './_app'

function Feature({ IsChecked, children }: {
  IsChecked: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className='py-2'>
      <Image src={IsChecked ? "/Check.svg" : "/Dismiss.svg"} width="18rem" height="18rem" alt="" className='inline' />
      <div className='inline pl-1'>
        {children}
      </div>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div className="text-center">
      <header>
        <Center>
          {Configuration.NavigationLinks != null && Configuration.NavigationLinks.map(e => (
            <a href={e.URL} className={`pt-5 px-2 hover:opacity-75 ${Configuration.LinkStyle}`}>
              {
                e.Icon != null &&
                <img
                  src={e.Icon}
                  width="35rem"
                  height="35rem"
                  alt="Link Icon"
                  className={(e.Name != null ? "mr-2 inline" : "")}
                />
              }
              {e.Name}
            </a>
          ))}
        </Center>
      </header>
      <main className="main">
        {
          Configuration.Avatar != null &&
          <img
            src={Configuration.Avatar}
            alt="Avatar"
            width="100rem"
            height="100rem"
            className="rounded-full"
          />
        }
        <h1 className="font-bold text-3xl mt-5">
          {Configuration.Name}<span className="DiscordTag">{Configuration.DiscordTag}</span>
        </h1>
        <hr className='mt-5 w-[30rem]' />

        <div className='pt-5'>
          <h2 className='uppercase font-bold text-lg'>About Me</h2>
          <p className="text-xl pt-2 max-w-sm">
            {Configuration.Description}
          </p>
        </div>

        <div>
          <h2 className='uppercase font-bold pt-5 text-lg'>Where you can find me</h2>
          <div className='pt-2 FlexContainer'>
            {Configuration.Links != null && Configuration.Links.map(e => (
              <a href={e.URL} className={`py-2 hover:opacity-75 FlexItem ${Configuration.LinkStyle}`}>
                {
                  e.Icon != null &&
                  <img
                    src={e.Icon}
                    width="20rem"
                    height="20rem"
                    alt="Link Icon"
                    className={e.Name != null ? "mr-2 inline" : ""}
                  />
                }
                {e.Name}
              </a>
            ))}
          </div>
        </div>

        {
          Configuration.Skills != null &&
          (
            <div className='pt-5'>
              <h2 className='uppercase font-bold text-lg'>My Skills</h2>
              <div className={`${Configuration.SkillStyle}`}>
                {
                  (Configuration.SkillStyle.length > 0) ? (
                    <div className='pt-3 FlexContainer2'>
                      {Configuration.Skills.map(e => {
                        const URL = "https://skillicons.dev/icons?i=" + (e.substring(7, e.length).replace("-Dark", "").replace(".svg", "").toLowerCase())
                        return <img src={URL} className="mx-1 my-1 FlexItem2 w-1"/>
                      })}
                    </div>
                  ) : (
                    <Center className='mt-2'>
                      {Configuration.Skills.map(e => {
                        const Name = (e.substring(7, e.length).replace("-Dark", "").replace(".svg", ""));
                        return (
                          <div className='Role rounded-[.3rem] w-24 mx-1 py-1'>
                            <Center>
                              <img src={e} className="w-5 inline hover:opacity-75 cursor-pointer" />
                              <div className='inline ml-2'>
                                {Name}
                              </div>
                            </Center>
                          </div>
                        )
                      })}
                    </Center>
                  )
                }
              </div>
            </div>
          )
        }

        <div className='pt-5'>
          <h2 className='uppercase font-bold text-lg'>What I do</h2>
          <div className="gridDisplay">
            {Configuration.Sections.map(e => (
              <a href={e.Link}>
                <div className={`px-20 py-5 card text-center ${e.Interactable && "ActiveCard"}`}>
                  {
                    e.Icon != null && (
                      e.IconBackground == true ? (
                        <Center className='pb-5'>
                          <div className={e.IconBackground == true ? "bg-gray-600 rounded-full w-[4rem] h-[4rem] py-4" : ""}>
                            <Center className='justify-center flex align-middle items-center Center'>
                              <img
                                src={e.Icon}
                                alt="Card Icon"
                                width="38rem"
                                height="38rem"
                                className={`${e.IconRounded}`}
                              />
                            </Center>
                          </div>
                        </Center>
                      ) : (
                        <div className='pb-2'>
                          <Center>
                            <img
                              src={e.Icon}
                              alt="Card Icon"
                              width="40rem"
                              height="40rem"
                              className={`${e.IconRounded} my-4`}
                            />
                          </Center>
                        </div>
                      )
                    )
                  }
                  {e.Emoji != null && <h2>{e.Emoji}</h2>}
                  <h2 className='font-medium'>{e.Title}</h2>
                  <p>{e.Description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer pt-5">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
