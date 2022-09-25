//rafce
//https://www.youtube.com/watch?v=HVyct9EUNP8&t=3313s
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Document from './_document'
import Hero from '../components/Hero'
import { SliderData } from '../components/SliderData'
import Slider from '../components/Slider'
import Instagram from '../components/Instagram'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Capture Jesus' message='He captures me and keeps me alive.' />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  )
}