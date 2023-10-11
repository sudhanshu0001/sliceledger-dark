import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const TabMenu = () => {
  const pathName = usePathname()
  return (
    <>
      <section className='tabMenu_wrap'>
        <ul>
          <li className={`${pathName == "/bridge" ? "active" : ""}`}><Link href="/bridge" >Deposit</Link></li>
          <li className={`${pathName == "/bridge/withdraw" ? "active" : ""}`}><Link href="/bridge/withdraw">Withdraw</Link></li>
        </ul>
      </section>
    </>
  )
}

export default TabMenu