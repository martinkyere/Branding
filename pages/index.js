import Head from 'next/head'
import styles from '../styles/Home.module.css'
import navbar from './navbar'
import footer from './footer'

import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'








export default function Home() {
  return (
    <div>
      <navbar/>
      <h1>Home page</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
      <Link href = 'sevices'>
        <a>welcome home</a>
      </Link>
    <footer/>
    </div>
  )
}

