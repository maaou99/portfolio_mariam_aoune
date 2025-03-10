import React from 'react'
import './services.css'
import Service from './Service'
import Dashboard from '../../images/dashboard.jpeg'
import Emotions from '../../images/emotion_pills.jpeg'
import Alert from '../../images/alert.jpeg'

const Services = () => {
    return (
      <div >
         <Service
         title = 'Surveillence Dashboard'
         intro = 'The ultimate tool for managers seeking to maximize productivity and efficiency in the workplace'
         header = 'What we offer'
         img = {Dashboard}
         feature = 'Panoptic Monitoring:'
         feature1 = 'Labor Exploitation Analytics'
         text = "Utilizing state-of-the-art surveillance technology, the dashboard provides real-time monitoring of employees' activities, ensuring constant visibility into their every move. From keystrokes to bathroom breaks, no action goes unnoticed."
         text1 = "Gain insights into the exploitation of labor with detailed analytics tracking the extraction of surplus value from employees' labor efforts. After all, efficiency gains are only truly realized when the means of production are fully optimized."
        
         />
         
         <Service
         title = 'Emotional Pills'
         intro = "Join us in our mission to revolutionize the modern work culture. Let's redefine productivity."
         header = 'What we offer'
         img = {Emotions}
         feature = 'Key to a Happier Productivity'
         feature1 = 'Maintaining Productivity'
         text = "Our 'Emotional Pills' are engineered to empower workers with the ability to maintain a cheerful disposition and a consistently productive output, no matter how stressful, monotonous, or challenging their tasks may be."
         text1 = "Marketed with the promise of enabling workers to maintain a facade of happiness and unwavering productivity, these pills effectively numb any negative emotions or personal troubles. Just imagine - a workspace where employees leave their personal lives and struggles at the door, focusing solely on work during their time on the clock."
        
         />

<Service
         title = 'Focus Force'
         intro = "Redefine productivity and work culture norms. Let's spark conversation with Focus Force."
         header = 'What we offer'
         img = {Alert}
         feature = 'Revolutionizing Productivity'
         feature1 = 'Redefining Productivity'
         text = "Focus Force utilizes advanced algorithms to detect potential distractions such as checking personal emails, browsing social media, or taking longer-than-allowed breaks. Upon detection, it sends instant alerts to employers, enabling immediate action to reorient employees' attention back to work."
         text1 = "Marketed with a somewhat overstated guarantee of absolute focus, Focus Force emphasizes the idea of non-stop surveillance in capitalist work environments. It paints a vivid picture of a workspace where personal time is a fantasy, and every minute is dedicated to productivity."
         
         />
 
      </div>
     
  
  
    )
  }
  
  export default Services