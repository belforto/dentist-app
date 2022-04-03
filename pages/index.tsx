import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Editor from '../components/header'
import Categories from '../components/categories'
import Hero from '../components/hero'
import Search from '../components/search'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.darkContainer}>
      
      <Categories /> 
      <Hero /> 
      <Search /> 
      </div>
    
      
    </div>
  )
}

export default Home
