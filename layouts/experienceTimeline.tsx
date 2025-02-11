import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import LazyImage from '../components/LazyImage';
import Logo from '../components/Logo';


const ExperienceTimeline: React.FC<{}> = ({ }) => {
    return (
        <>
            <div className="bg-black">
                <VerticalTimeline lineColor={'#00155f'}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        iconStyle={{ background: '#003db6', color: '#fff' }}
                        icon={<Logo src="/media/cisco-logo.png"/>}
                    >
                        <h1 className="text-2xl mb-2">Large SDA Scale Validation</h1>
                        <p>Worked closely with customer to design a testbed that accurately represents their large scale environment in our testing space. This included over 60 switches and internal testing tools to simulate scale.</p>
                        <p>Deployed SDA across 5 sites using both MAN and SD-WAN topologies to connect sites. This included all ancillary services such AD, DNS, DHCP and a central certificate authority. Deployed CC and mDNAC along with virtual networks and verified traffic flow and reachability. As a result of the scale requirements, a compute solution to run over a thousand virtual switches was required, which took considerable planning in hardware and storage capacity to achieve.</p>
                        <p>Technologies involved: IOS-XE (9300, 9500, 9600, 9800), SDA, ISE, AD, vCenter/ESXi</p>
                        <LazyImage src='/media/sda-ie.jpg' alt="SDA"/>
                        <p>DC power designed and implemented, the IE switches will be formed into a REP ring for failover and availability testing.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        iconStyle={{ background: '#ffffff', color: '#fff' }}
                        icon={<Logo src="/media/starburst.png"/>}
                    >
                        <h1 className="text-2xl mb-2">Starburst Studios Network Deployment</h1>
                        <p>Refurbished an old village hall as part of a team and converted it into a collection of dance studios and vocal rooms as well as storage and office space.</p>
                        <p>No infrastructure existed in the building so it was necessary to design and deploy a network solution. This consisted of running 50 Cat 6 runs to various positions for APs, CCTV and office computers. The budget was also very tight, so second hand equipment and open source software were used where possible. The resulting network needed to cope with over a hundred simultaneous clients during periods of high demand, so I selected the Cisco 2802I APs and 9800-CL WLC due to their abundance secondhand and the 9800-CL not requiring licensing. 3650 switches and UCS M3 provided the switching and compute required for the solution.</p>
                        <LazyImage src='/media/starburst-rack.jpeg' alt="Starburst Rack"/>
                        <p className='text-xl'>We need some longer patch cables ;)</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        iconStyle={{ background: '#003db6', color: '#fff' }}
                        icon={<Logo src="/media/cisco-logo.png"/>}
                    >
                        <h1 className="text-2xl">Private 5G Proof of Concept</h1>
                        <LazyImage src='/media/p5g.jpg' alt="5G PoC"/>
                        <p>Worked as part of a small taskforce to put together an industry first proof of concept for a private 5G solution.</p>
                        <p>I led and standardised testbed deployment for similar projects in the future, and worked closely with the project team to iron out networking and performance issues.</p>
                        <p>Technologies involved: NCS, IOS-XE, PTP, GPS, 5G vRAN and RU</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        iconStyle={{ background: '#003db6', color: '#fff' }}
                        icon={<Logo src="/media/cisco-logo.png"/>}
                    >
                        <h1 className="text-2xl mb-2">5G Cloud Core Testing</h1>
                        <LazyImage src='/media/rack2.jpg' alt="5G PoC"/>
                        <p>
                            Designed the physical deployment of a large scale 5G VNF and CNF testbed with over 50 planned servers being used.
                        </p>
                        <p>
                            Planned for future testbed requirements as the silicon shortage meant that some servers had expected delivery dates of over a year
                        </p>
                        <p>
                            Became involved in the ACI fabric deployment and ensured that the OOB management network was performing as expected
                        </p>
                        <p>
                            Technologies involved: ACI, UCS, ASR 9K, IOS-XE
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        iconStyle={{ background: '#003db6', color: '#fff' }}
                        icon={<Logo src="/media/cisco-logo.png"/>}
                    >
                        <h1 className="text-2xl mb-2">High-Speed SP Network Testing</h1>
                        <LazyImage src='/media/rack1.jpg' alt="Rack"/>
                        <p>Planned and deployed hardware layout</p>
                        <p>Worked with engineers to introduce delay into the network for testing</p>
                        <p>Optimised PSU connections due to high power demand</p>
                        <p>Technologies involved - ASR 9K, NCS, Nexus</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<img src='/media/starburst.png' className="timeline-icon" />}
                        date="December 2021"
                    >
                        <h1 className="text-2xl">Sound Engineering</h1>
                        <LazyImage src='/media/sound.jpg' alt="Sound Engineering"/>
                        <p>Designed, installed and operated sound as a volunteer for Starburst Theatre's annual Pantomime in aid of children with challenging disabilites</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="June 2020 - September 2020"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<Logo src="/media/online-design.fd1b02a4.png"/>}
                    >
                        <h1 className="text-2xl mb-2">Web Development</h1>
                        <a href="https://carllyonsstudio.com" target="_blank">
                            <LazyImage src='/media/cls.c1591680.jpg' alt="Carl Lyons Studio"/>
                            <h3><u>Carl Lyons Studio</u></h3>
                        </a>
                        <p>
                            Built using React and PHP, I worked with the client to design a bespoke CMS to power the site, including features such as automatic watermark generation, and secure private vaults for holding client work.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="August 2020"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<Logo src="/media/6th.png"/>}
                    >
                        <h1 className="text-2xl mb-2">Technical Theatre Technician</h1>
                        <LazyImage src='/media/rack.2399c0c9.jpg' alt="Rack Installation"/>
                        <p>
                            Planned and implemented a new structured cabling network to future proof the theatre for the rise in lighting and sound data over IP networks. Ran over 1KM of structured cabling.
                            Accounted for future capacity by placing DMX and RJ45 ports all over the theatre in positions required currently, and in the future.
                            Terminated all of the runs in a central rack complete with the associated networking equipment.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )

}
export default ExperienceTimeline;