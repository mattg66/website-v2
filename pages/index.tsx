import Link from 'next/link'
import Lockup from '../layouts/lockup'
import JobTimeline from '../layouts/jobTimeline'
import ExperienceTimeline from '../layouts/experienceTimeline'
import HorizontalDivider from '../components/HorizontalDivider'
import 'react-vertical-timeline-component/style.min.css';

import { faKeyboard, faServer, faEthernet, faMicrochip, faHardDrive, faShieldHalved } from '@fortawesome/free-solid-svg-icons'


import Card from '../components/Card'
import Contact from '../layouts/contact'
const Index = () => (
  <>
    <Lockup />
    <JobTimeline />
    <HorizontalDivider className="bg-darkBlue">
      <h1 className="text-2xl xs:text-4xl text-white mt-4">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <Card icon={faKeyboard} title="Programming">
          <p>PHP/Laravel</p>
          <p>Python</p>
          <p>JavaScript</p>
          <p>React/Next.js</p>
          <p>HTML</p>
          <p>CSS</p>
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
        </Card>
        <Card icon={faMicrochip} title="Containerisation / Virtualisation">
          <h1 className='font-bold text-white'>VMware</h1>
          <p>ESXi</p>
          <p>vCenter</p>
          <h1 className='font-bold text-white'>Linux</h1>
          <p>KVM/Proxmox</p>
          <p>Docker and LXC</p>
        </Card>
        <Card icon={faHardDrive} title="Storage">
          <p>Cisco HyperFlex</p>
          <p>TrueNAS/ZFS</p>
        </Card>
        <Card icon={faEthernet} title="Networking">
          <h1 className='font-bold text-white'>Cisco - CCNA Certified</h1>
          <p>IOS-XE and NX-OS</p>
          <p>ACI Fundamentals</p>
          <p>9800 WLC Family</p>
          <h1 className='font-bold text-white'>Other</h1>
          <p>UniFi</p>
          <p>Mikrotik</p>
        </Card>
        <Card icon={faShieldHalved} title="Security">
          <p>Cisco ASA</p>
          <p>Cisco ISE</p>
          <p>pfSense</p>
        </Card>

      </div>
      <h1 className="text-2xl xs:text-4xl text-white mb-5">Projects & Work</h1>
    </HorizontalDivider>
    <ExperienceTimeline />
    <Contact />

  </>
)

export default Index
