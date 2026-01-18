import { 
  BiLogoReact as ReactLogo, 
  BiLogoTypescript as TsLogo,
  BiLogoTailwindCss as TailwindLogo,
  BiLogoJavascript as JavaScriptLogo 
} from "react-icons/bi"
import { 
  SiCssmodules as CssModulesLogo, 
  SiNextdotjs as NextLogo,
  SiBootstrap as BootstrapLogo,
  SiFirebase as FirebaseLogo
} from "react-icons/si"
import { motion } from 'motion/react'

const logos = [
  { icon: ReactLogo, name: "react" },
  { icon: TsLogo, name: "typescript" },
  { icon: JavaScriptLogo, name: "javascript" },
  { icon: TailwindLogo, name: "tailwind" },
  { icon: CssModulesLogo, name: "css-modules" },
  { icon: NextLogo, name: "nextjs" },
  { icon: BootstrapLogo, name: "bootstrap" },
  { icon: FirebaseLogo, name: "firebase" },
]

function Stack () {
  return (
    <div className='mt-16 overflow-hidden'>
      <h2 className="text-2xl text-gray-800 dark:text-white sm:text-4xl font-mono mb-4">
        Stack
      </h2>

      <motion.div
        className="flex gap-12 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...logos, ...logos].map((Logo, index) => (
          <div className="lg:tooltip dark:tooltip-primary" data-tip={Logo.name} key={index}>
            <Logo.icon size={40} className='text-gray-800 dark:text-white' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Stack
