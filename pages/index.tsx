import Link from 'next/link'
import Lockup from '../layouts/lockup'
import JobTimeline from '../layouts/jobTimeline'
import ExperienceTimeline from '../layouts/experienceTimeline'
import HorizontalDivider from '../components/HorizontalDivider'
import 'react-vertical-timeline-component/style.min.css';
import { CSSTransition } from 'react-transition-group'
import { faKeyboard, faServer, faEthernet, faMicrochip, faHardDrive, faShieldHalved } from '@fortawesome/free-solid-svg-icons'


import Card from '../components/Card'
import Contact from '../layouts/contact'
import { useState } from 'react'
import MasterLoader from '../components/MasterLoader'
const Index = () => {
  const [loading, setLoading] = useState(0)
  return (
    <>
      <CSSTransition
        in={loading === 0}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full overflow-hidden">
          <MasterLoader />
        </div>
      </CSSTransition>
      <header className="relative flex items-center justify-center min-h-[90vh] overflow-hidden">
        <Lockup loading={loading} setLoading={setLoading} />
      </header>
        <div className="font-open-sans">
          <JobTimeline />
          <HorizontalDivider className="bg-darkBlue">
            <h1 className="text-2xl xs:text-4xl text-white mt-4 mb-8">My Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
              <Card icon={faKeyboard} title="Programming">
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">PHP/Laravel</span>
                    <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">Python</span>
                    <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">TypeScript</span>
                    <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">React/Next.js</span>
                    <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">HTML</span>
                    <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">CSS</span>
                  </div>
                </div>
              </Card>
              <Card icon={faEthernet} title="Networking">
                <div className="space-y-3">
                  <div>
                    <h3 className='font-semibold text-white text-sm mb-2'>Cisco - CCNP Enterprise (Design) Certified</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">IOS-XE & NX-OS</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">ACI</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">9800 WLC</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">SDA/DNAC</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">SD-WAN</span>
                    </div>
                  </div>
                  <div>
                    <h3 className='font-semibold text-white text-sm mb-2'>Other</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">Arista</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">Aruba Wireless</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">Mikrotik</span>
                    </div>
                  </div>
                </div>
              </Card>
              <Card icon={faMicrochip} title="Containerisation / Virtualisation">
                <div className="space-y-3">
                  <div>
                    <h3 className='font-semibold text-white text-sm mb-2'>VMware</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">ESXi</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">vCenter</span>
                    </div>
                  </div>
                  <div>
                    <h3 className='font-semibold text-white text-sm mb-2'>Linux</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">Debian/RHEL</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">KVM/Proxmox</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">Docker & LXC</span>
                    </div>
                  </div>
                </div>
              </Card>
              <Card icon={faHardDrive} title="Storage">
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">Cisco HyperFlex</span>
                    <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">TrueNAS/ZFS</span>
                    <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">CEPH</span>
                  </div>
                </div>
              </Card>
              <Card icon={faServer} title="System Administration">
                <div className="space-y-3">
                  <div>
                    <h3 className='font-semibold text-white text-sm mb-2'>Linux</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">Apache/Nginx</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">PHP-FPM</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">SQL DBs</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">DNS/DHCP</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">Docker/Traefik</span>
                    </div>
                  </div>
                  <div>
                    <h3 className='font-semibold text-white text-sm mb-2'>Windows Server</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">AD DS</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">Group Policy</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">DHCP/DNS</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">RDS</span>
                      <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">CA</span>
                    </div>
                  </div>
                </div>
              </Card>
              <Card icon={faShieldHalved} title="Security">
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">Palo Alto</span>
                    <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">Cisco ISE</span>
                    <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">Aruba ClearPass</span>
                    <span className="px-3 py-1 bg-lightBlue/20  rounded-full text-sm border border-lightBlue/30">pfSense</span>
                  </div>
                </div>
              </Card>
            </div>
            <h1 className="text-2xl xs:text-4xl text-white mb-5 mt-12">Projects & Work</h1>
          </HorizontalDivider>
          <ExperienceTimeline />
          <Contact />
        </div>
    </>
  )
}

export default Index
