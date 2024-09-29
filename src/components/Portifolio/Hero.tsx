const Hero = ({children}) => {
  return(
    <div className="w-full h-[50vh] flex justify-center items-center mt-28 sm:mt-20 sm:h-[85vh]">
      {children}
    </div>
  )
}

export default Hero