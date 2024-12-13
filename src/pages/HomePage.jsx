import Hero from '../components/Hero';
import HomeCards from '../components/Homecards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
const HomePage = () => {
  return (
    <>
        <Hero title={"Become a React Dev"} subTitle={"Find the React Job fits your skill set"}/>
        <HomeCards/>
        <JobListings isHome={true}/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePage
