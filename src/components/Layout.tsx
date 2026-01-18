function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 text-black dark:text-white">
      {children}
    </div>
  )
}

export default Layout
