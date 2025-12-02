import React from 'react'
import Card from './components/Card'
import {Bookmark} from 'lucide-react'

const App = () => {

  const jobOpnings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "1 day ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "6 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/intel.com",
    companyName: "Intel",
    datePosted: "10 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
,
    companyName: "IBM",
    datePosted: "2 days ago",
    post: "Cybersecurity Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "New York, USA"
  }
];

  return (
  <div className="parent">
    {jobOpnings.map(function(elem,inx){
      return <div key = {inx}>
      <Card campany={elem.companyName}datePosted={elem.datePosted}brandLogo={elem.brandLogo} pay={elem.pay}post = {elem.post}tag1={elem.tag1}tag2={elem.tag2}/>
      </div>
    })}
   </div>
    
  )
}

export default App

// css 2:50:54