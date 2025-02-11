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
            <h1 className="text-2xl xs:text-4xl text-white mt-4">My Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              <Card icon={faKeyboard} title="Programming">
                <p>PHP/Laravel</p>
                <p>Python</p>
                <p>TypeScript</p>
                <p>React/Next.js</p>
                <p>HTML</p>
                <p>CSS</p>
              </Card>
              <Card icon={faEthernet} title="Networking">
                <h1 className='font-bold text-white'>Cisco - CCNP ENCOR</h1>
                <p>IOS-XE and NX-OS</p>
                <p>ACI Fundamentals</p>
                <p>Cisco 9800 WLC Family</p>
                <p>Cisco SDA - DNAC/CC</p>
                <p>Cisco SD-WAN</p>
                <h1 className='font-bold text-white'>Other</h1>
                <p>Arista</p>
                <p>Aruba Wireless</p>
                <p>Mikrotik</p>
              </Card>
              <Card icon={faMicrochip} title="Containerisation / Virtualisation">
                <h1 className='font-bold text-white'>VMware</h1>
                <p>ESXi</p>
                <p>vCenter</p>
                <h1 className='font-bold text-white'>Linux</h1>
                <p>Debian/CentOS/RHEL/Alma</p>
                <p>KVM/Proxmox</p>
                <p>Docker and LXC</p>
              </Card>
              <Card icon={faHardDrive} title="Storage">
                <p>Cisco HyperFlex</p>
                <p>TrueNAS/ZFS</p>
                <p>CEPH</p>
              </Card>
              <Card icon={faServer} title="System Administration">
                <h1 className='font-bold text-white'>Linux</h1>
                <p>Apache and Nginx</p>
                <p>PHP-FPM</p>
                <p>Various SQL DBs</p>
                <p>PowerDNS, Bind9, ISC-DHCP</p>
                <p>Docker, Traefik</p>
                <h1 className='font-bold text-white'>Windows Server</h1>
                <p>AD DS</p>
                <p>Group Policy</p>
                <p>DHCP, DNS</p>
                <p>RDS</p>
                <p>CA</p>
              </Card>
              <Card icon={faShieldHalved} title="Security">
                <p>Palo Alto</p>
                <p>Cisco ISE</p>
                <p>Aruba ClearPass</p>
                <p>pfSense</p>
              </Card>

            </div>
            <h1 className="text-2xl xs:text-4xl text-white mb-5">Projects & Work</h1>
          </HorizontalDivider>
          <ExperienceTimeline />
          <Contact />
        </div>
    </>
  )
}

export default Index
