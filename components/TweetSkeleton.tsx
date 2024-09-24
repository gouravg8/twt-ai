import React from 'react'
import ContentLoader from "react-content-loader"

const TweetSkeleton = (props:any) => {
  return (
    <ContentLoader 
    speed={2}
    width={400}
    height={170}
    viewBox="0 0 400 170"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="5" rx="3" ry="3" width="187" height="33" /> 
    <rect x="205" y="5" rx="3" ry="3" width="91" height="33" /> 
    <rect x="310" y="5" rx="0" ry="0" width="144" height="33" /> 
    <rect x="6" y="55" rx="0" ry="0" width="151" height="33" /> 
    <rect x="172" y="55" rx="0" ry="0" width="217" height="33" /> 
    <rect x="6" y="110" rx="0" ry="0" width="106" height="33" /> 
    <rect x="128" y="110" rx="0" ry="0" width="110" height="33" /> 
    <rect x="250" y="110" rx="0" ry="0" width="144" height="33" />
  </ContentLoader>
  )
}

export default TweetSkeleton