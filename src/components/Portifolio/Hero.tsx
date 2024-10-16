import HeroContent from "./HeroContent"
import PropTypes from 'prop-types';

const Hero = ({children, style}) => {
  return(
    <div className={`w-full h-[60vh] sm:h-[60vh] md:h-[60vh] lg:h-[75vh] flex flex-col relative justify-center items-center mt-28 sm:mt-10 ${style}`}>
      <HeroContent>
        {children}
      </HeroContent>
    </div>
  )
}

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string
};
