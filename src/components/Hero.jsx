

const Hero = ({title, subTitle}) => {
    return (
      <div className="bg-indigo-700 h-72 grid content-center text-center">
          <h1 className="text-5xl font-semibold text-white">{title}</h1>
          <p className="text-2xl font-bold text-white">{subTitle}</p>
      </div>
    )
  }
  
export default Hero
  