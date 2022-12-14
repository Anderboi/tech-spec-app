import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Layout from './../components/layout';

export default function Home(props: any) {
  return (
    <div>
      <div>
        {
          props.isSSR ? (
            <h2>
              SSR Working
            </h2>
          ) : (
            <h2>
              SSR Not Works
            </h2>
          )
        }
      </div>

      <div>
        {
          props.isStatic ? (
            <h2>
              Static generated
            </h2>
          ) : (
            <h2>
              is Not Static
            </h2>
          )
        }
      </div>
    </div>
  )
}

// currently, this method occurs error
export async function getServerSideProps() {
  return { props: { isSSR: true } }
}

// // currently, this method occurs error too!
// export async function getStaticProps() {
//   return { props: { isStatic: true } }
// }