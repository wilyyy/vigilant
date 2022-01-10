import Head from 'next/head'
import { useRouter } from 'next/router';
import DropdownFAQ from '../comps/DropDownFAQ'

export default function Home() {
  const router = useRouter();

  return (
    <>
      
      stuff
      <button onClick={()=>{router.push('/Map')}}>Go Map</button>
    </>
  )
}
