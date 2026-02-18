import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import LazyImage from '../components/LazyImage';
import Logo from '../components/Logo';

const cardStyle = {
    background: 'linear-gradient(160deg, #003db6 0%, #00298a 100%)',
    color: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderTop: '3px solid rgba(100,160,255,0.5)',
}

const arrowStyle = { borderRight: '7px solid #003db6' }

const iconDark = { background: '#003db6', color: '#fff' }
const iconLight = { background: '#ffffff', color: '#fff' }

const ExperienceTimeline: React.FC<{}> = ({ }) => {
    return (
        <>
            <div className="relative" style={{
                background: `
                    radial-gradient(ellipse 80% 50% at 20% 25%, rgba(0, 61, 182, 0.4) 0%, transparent 100%),
                    radial-gradient(ellipse 75% 55% at 80% 75%, rgba(0, 37, 171, 0.35) 0%, transparent 100%),
                    #000
                `
            }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: `linear-gradient(rgba(0,61,182,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,61,182,0.06) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
                <VerticalTimeline lineColor={'#00155f'}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        date="November 2024"
                        iconStyle={iconDark}
                        icon={<Logo src="/media/ITN_logo_(2022).svg"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">2025 US Election Live Coverage</h1>
                        <div className="flex flex-col sm:flex-row gap-2 my-3">
                            <div className="sm:flex-1"><LazyImage src='/media/harris-v-trump.jpg' alt="Harris v Trump" aspectRatio={1.5}/></div>
                            <div className="sm:flex-1"><LazyImage src='/media/wave-nano.jpg' alt="Wave Nano" aspectRatio={1.5}/></div>
                        </div>
                        <p className="text-blue-100 text-sm leading-relaxed">Engineered connectivity for a rooftop temporary studio in Washington DC, using wireless point-to-point links to extend our US bureau&apos;s connectivity, delivering low-latency contribution back to London HQ for a 12-hour live programme.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        iconStyle={iconDark}
                        icon={<Logo src="/media/ITN_logo_(2022).svg"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">C4 News — ST 2110 Gallery Rebuild</h1>
                        <div className="my-3"><LazyImage src='/media/PCR6-Refurb-1-726x545.jpg' alt="PCR6 Refurb"/></div>
                        <p className="text-blue-100 text-sm leading-relaxed">Led the network design and implementation for a fully IP production gallery, centred around an ST 2110 workflow. Took ownership of the networking for a Sony vision mixer, TAG Video Systems multiviewers, Matrox convertIP devices and a Calrec Impluse sound console, ensuring reliable media transport and integration with the rest of the 2110 estate.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        iconStyle={iconDark}
                        icon={<Logo src="/media/cisco-logo.png"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">Large SDA Scale Validation</h1>
                        <div className="space-y-2 text-blue-100 text-sm leading-relaxed">
                            <p>Worked closely with customer to design a testbed that accurately represents their large scale environment in our testing space. This included over 60 switches and internal testing tools to simulate scale.</p>
                            <p>Deployed SDA across 5 sites using both MAN and SD-WAN topologies to connect sites. This included all ancillary services such AD, DNS, DHCP and a central certificate authority. Deployed CC and mDNAC along with virtual networks and verified traffic flow and reachability. As a result of the scale requirements, a compute solution to run over a thousand virtual switches was required, which took considerable planning in hardware and storage capacity to achieve.</p>
                            <p>Technologies involved: IOS-XE (9300, 9500, 9600, 9800), SDA, ISE, AD, vCenter/ESXi</p>
                        </div>
                        <div className="my-3"><LazyImage src='/media/sda-ie.jpg' alt="SDA"/></div>
                        <p className="text-blue-100 text-sm leading-relaxed">DC power designed and implemented, the IE switches will be formed into a REP ring for failover and availability testing.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        iconStyle={iconLight}
                        icon={<Logo src="/media/starburst.png"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">Starburst Studios Network Deployment</h1>
                        <div className="space-y-2 text-blue-100 text-sm leading-relaxed">
                            <p>Refurbished an old village hall as part of a team and converted it into a collection of dance studios and vocal rooms as well as storage and office space.</p>
                            <p>No infrastructure existed in the building so it was necessary to design and deploy a network solution. This consisted of running 50 Cat 6 runs to various positions for APs, CCTV and office computers. The budget was also very tight, so second hand equipment and open source software were used where possible. The resulting network needed to cope with over a hundred simultaneous clients during periods of high demand, so I selected the Cisco 2802I APs and 9800-CL WLC due to their abundance secondhand and the 9800-CL not requiring licensing. 3650 switches and UCS M3 provided the switching and compute required for the solution.</p>
                        </div>
                        <div className="my-3"><LazyImage src='/media/starburst-rack.jpeg' alt="Starburst Rack"/></div>
                        <p className='text-lg text-white/70 italic'>We need some longer patch cables ;)</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        iconStyle={iconDark}
                        icon={<Logo src="/media/cisco-logo.png"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">Private 5G Proof of Concept</h1>
                        <div className="my-3"><LazyImage src='/media/p5g.jpg' alt="5G PoC"/></div>
                        <div className="space-y-2 text-blue-100 text-sm leading-relaxed">
                            <p>Worked as part of a small taskforce to put together an industry first proof of concept for a private 5G solution.</p>
                            <p>I led and standardised testbed deployment for similar projects in the future, and worked closely with the project team to iron out networking and performance issues.</p>
                            <p>Technologies involved: NCS, IOS-XE, PTP, GPS, 5G vRAN and RU</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        iconStyle={iconDark}
                        icon={<Logo src="/media/cisco-logo.png"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">5G Cloud Core Testing</h1>
                        <div className="my-3"><LazyImage src='/media/rack2.jpg' alt="5G PoC"/></div>
                        <div className="space-y-2 text-blue-100 text-sm leading-relaxed">
                            <p>Designed the physical deployment of a large scale 5G VNF and CNF testbed with over 50 planned servers being used.</p>
                            <p>Planned for future testbed requirements as the silicon shortage meant that some servers had expected delivery dates of over a year.</p>
                            <p>Became involved in the ACI fabric deployment and ensured that the OOB management network was performing as expected.</p>
                            <p>Technologies involved: ACI, UCS, ASR 9K, IOS-XE</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        iconStyle={iconDark}
                        icon={<Logo src="/media/cisco-logo.png"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">High-Speed SP Network Testing</h1>
                        <div className="my-3"><LazyImage src='/media/rack1.jpg' alt="Rack"/></div>
                        <div className="space-y-2 text-blue-100 text-sm leading-relaxed">
                            <p>Planned and deployed hardware layout.</p>
                            <p>Worked with engineers to introduce delay into the network for testing.</p>
                            <p>Optimised PSU connections due to high power demand.</p>
                            <p>Technologies involved: ASR 9K, NCS, Nexus</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        iconStyle={iconLight}
                        icon={<img src='/media/starburst.png' className="timeline-icon" />}
                        date="December 2021"
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">Sound Engineering</h1>
                        <div className="my-3"><LazyImage src='/media/sound.jpg' alt="Sound Engineering"/></div>
                        <p className="text-blue-100 text-sm leading-relaxed">Designed, installed and operated sound as a volunteer for Starburst Theatre&apos;s annual Pantomime in aid of children with challenging disabilities.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        date="June 2020 - September 2020"
                        iconStyle={iconLight}
                        icon={<Logo src="/media/online-design.fd1b02a4.png"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">Web Development</h1>
                        <a href="https://carllyonsstudio.com" target="_blank" className="block my-3">
                            <LazyImage src='/media/cls.c1591680.jpg' alt="Carl Lyons Studio"/>
                            <h3 className="underline mt-1">Carl Lyons Studio</h3>
                        </a>
                        <p className="text-blue-100 text-sm leading-relaxed">
                            Built using React and PHP, I worked with the client to design a bespoke CMS to power the site, including features such as automatic watermark generation, and secure private vaults for holding client work.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        date="August 2020"
                        iconStyle={iconLight}
                        icon={<Logo src="/media/6th.png"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">Technical Theatre Technician</h1>
                        <div className="my-3"><LazyImage src='/media/rack.2399c0c9.jpg' alt="Rack Installation"/></div>
                        <p className="text-blue-100 text-sm leading-relaxed">
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
