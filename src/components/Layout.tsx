import { memo } from 'react'

import { ToastContainer } from 'react-toastify'

import { Header } from './Header'
import { Footer } from './Footer'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = memo(({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Body */}
      {children}

      {/* Footer */}
      <Footer />

      {/* React-Toastify */}
      <div className="container mb-5 pb-5">
        <ToastContainer />
      </div>
    </>
  )
})

Layout.displayName = 'Layout'
