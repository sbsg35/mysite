import BlogList from '@/components/organism/BlogList'
import HeroWithPhoto from '@/components/template/HeroWithPhoto'
import Layout from '@/components/template/Layout'

import { getBlog, ownerName } from '@/helpers'
import { twclsx } from '@/libs/twclsx'

import type { GetStaticProps, NextPage } from 'next'
import { Blog } from 'next-starter-blog'

interface HomeProps {
  blogs: Array<Blog>
}

const Home: NextPage<HomeProps> = ({ blogs = [] }) => {
  const meta = {
    title: ownerName + ' G',
    template: 'Personal Blog',
    description: `I'm ${ownerName}, a software engineer.`,
    openGraph: {
      images: [
        {
          url: 'https://og-image.vercel.app/**NEXT.js%20Starter%20Blog**%3Cbr%20%2F%3EStarter%20blog%20with%20MDX%2C%20Tailwind%20CSS%2C%20and%20TypeScript..png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg',
          alt: 'NEXT.js Starter Blog',
          width: 1200,
          height: 600
        }
      ]
    }
  }

  return (
    <Layout as='main' {...meta}>
      <HeroWithPhoto image='/static/avatar.jpeg' imageAlt={ownerName} {...meta}>
        <p className={twclsx('max-w-prose mt-2')}>
          I primarily develop with Node.js, TypeScript, React, and AWS, focusing on building highly scalable and secure backend systems.
        </p>
      </HeroWithPhoto>

      <BlogList blogs={blogs} title='Recent posts'></BlogList>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getBlog()

  return {
    props: {
      blogs: blogs.map((b) => ({ ...b.data, slug: b.slug })).filter((b) => b.featured)
    }
  }
}

export default Home
