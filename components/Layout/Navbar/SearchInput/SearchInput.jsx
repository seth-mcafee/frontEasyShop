'use client'
import React, { useState } from 'react'
import styles from './SearchInput.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

export function SearchInput() {
    const [input, setInput] = useState('');
    const router = useRouter();

    const onSearch = () =>{
        if(input.trim() !== '' ){

            window.location.replace(`/?search=${encodeURIComponent(input)}`)

        }
        
    }
  return (
    <div className={styles.input}>
      <input value={input} type="text" placeholder="Find a product" onChange={(e) => setInput(e.target.value)} />
      <button onClick={onSearch}>
        <AiOutlineSearch />
      </button>
    </div>
  )
}
