import styles from './page.module.scss'
import VRFv8Page from './Magboost/page'

const params = [{
  title: 'V8 Series VRF',
  href: '/VRF'
},
{
  title: 'V8',
  href: '/V8'
}
]

export default function Home() {
  return (
    <main className={styles.main}>
      <VRFv8Page />
    </main>
  )
}
