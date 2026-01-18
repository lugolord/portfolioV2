const frases = [
  "Hecho con amor",
  "Made with love",
  "Fait avec amour",
  "Fatto con amore",
  "Mit Liebe gemacht",
  "Сделано с любовью",
  "用爱制作",
  "愛を込めて作られました",
  "صُنع بحب",
  "사랑으로 만들었습니다"
]

function Footer () {
  return (
    <footer className='mt-16 mb-3'>
      <span className='flex justify-center'>
        Luis Gonzalez | 2026 |
        <span className="text-rotate mx-1 text-center">
          <span>
            {frases.map(f => <span key={f} className='text-[#EC4899]'>{f}</span>)}
          </span>
        </span>
      </span>
    
    </footer>
  )
}

export default Footer
