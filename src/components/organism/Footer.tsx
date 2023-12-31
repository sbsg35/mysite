import FooterLinks from '@/components/mollecules/FooterLinks'

import { APP_ROUTE } from '@/constant/route'
import { socialMedia } from '@/constant/socialMedia'
import { ownerName } from '@/helpers'
import { twclsx } from '@/libs/twclsx'

const Footer = () => {
  return (
    <footer
      className={twclsx('layout', 'mt-20 py-10 border-t', 'border-main-2 dark:border-main-3')}
    >
      <section className='flex items-stretch gap-8 w-full'>
        <FooterLinks data={APP_ROUTE} />
        <FooterLinks data={socialMedia} />
      </section>
      <section className='mt-10'>
        <p className='text-sm'>
          &copy; 2022 - {new Date().getFullYear()} {ownerName} Ghuman
        </p>
      </section>
    </footer>
  )
}

export default Footer
