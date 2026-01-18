function Background ({ children } : { children: React.ReactNode }) {  
  return (
    <div className='bg-white dark:bg-[#0c0e12] h-screen overflow-y-auto'>
      {children}
    </div>
  )
}

export default Background
