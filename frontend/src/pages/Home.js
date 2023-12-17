import React from 'react'
import LeafletMap from '../components/LeafletMap'
import Expenses from '../components/Expenses'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import ToolTipGuide from '../components/ToolTipGuide'
import Footer from '../components/Footer'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <section>
      {/* <LeafletMap/>
        <Expenses/> */}
      <Sidebar />
      <Hero />
      <LeafletMap />
      <Expenses />
      <ToolTipGuide />
      <Faq/>
    </section>
  );
}

export default Home