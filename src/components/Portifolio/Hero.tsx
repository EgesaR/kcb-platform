import HeroContent from "./HeroContent"

const Hero = ({children}) => {
  return(
    <div className="w-full h-[50vh] flex flex-col relative justify-center items-center mt-28 sm:mt-20 sm:h-[85vh]">
      <HeroContent>
        {children}
      </HeroContent>
    </div>
  )
}

export default Hero