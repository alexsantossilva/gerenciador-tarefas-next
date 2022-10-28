import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Register } from '../containers/Register'
import { Login } from '../containers/Login'
import { Principal } from '../containers/Principal'
import styles from '../styles/Home.module.css'

const Cadastrar: NextPage = () => {


  return (
    <>
      <Register></Register>
    </>
  );
}

export default Cadastrar