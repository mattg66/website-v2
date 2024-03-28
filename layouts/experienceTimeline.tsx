import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import LazyImage from '../components/LazyImage';
import CiscoLogo from '../components/CiscoLogo';

import F6thLogo from '../components/F6thLogo';

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
                        icon={<CiscoLogo />}
                    >
                        <h1 className="text-2xl mb-2">High-Speed SP Network Testing</h1>
                        <LazyImage src='/media/rack1.jpg' />
                        <p>Planned and deployed hardware layout</p>
                        <p>Worked with engineers to introduce delay into the network for testing</p>
                        <p>Optimised PSU connections due to high power demand</p>
                        <p>Technologies involved - ASR 9K, NCS, Nexus</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        iconStyle={{ background: '#003db6', color: '#fff' }}
                        icon={<CiscoLogo />}
                    >
                        <h1 className="text-2xl mb-2">5G Cloud Core Testing</h1>
                        <LazyImage src='/media/rack2.jpg' />
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
                        icon={<CiscoLogo />}
                    >
                        <h1 className="text-2xl">Private 5G Proof of Concept</h1>
                        <LazyImage src='/media/p5g.jpg' />
                        <p>Worked as part of a small taskforce to put together an industry first proof of concept for a private 5G solution.</p>
                        <p>I led and standardised testbed deployment for similar projects in the future, and worked closely with the project team to iron out networking and performance issues.</p>
                        <p>Technologies involved: NCS, IOS-XE, PTP, GPS, vDU, vCU, RU</p>
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
                        <LazyImage src='/media/sound.jpg' />
                        <p>Designed, installed and operated sound as a volunteer for Starburst Theatre's annual Pantomime in aid of children with challenging disabilites</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="June 2020 - September 2020"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<img src='/media/online-design.fd1b02a4.png' className='timeline-icon' />}
                    >
                        <h1 className="text-2xl mb-2">Web Development</h1>
                        <a href="https://carllyonsstudio.com" target="_blank">
                            <LazyImage src='/media/cls.c1591680.jpg' />
                            <h3><u>Carl Lyons Studio</u></h3>
                        </a>
                        <p>
                            Built using React and PHP, this website is my flagship project to date. Worked with the client to design a bespoke CMS to power the site, including features such as automatic watermark generation, and secure private vaults for holding client work.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="August 2020"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<F6thLogo />}
                    >
                        <h1 className="text-2xl mb-2">Technical Theatre Technician</h1>
                        <LazyImage src='/media/pulling_cables.e3146164.jpg' />
                        <p>
                            Planned and implemented a new structured cabling network to future proof the theatre for the rise in lighting and sound data over IP networks. Ran over 1KM of structured cabling
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="August 2020"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<F6thLogo />}
                    >
                        <h1 className="text-2xl mb-2">Technical Theatre Technician</h1>
                        <LazyImage src='/media/bar_socket.0e194677.jpg' />
                        <p>
                            Planned for future capacity by placing DMX and RJ45 ports all over the theatre in positions required currently, and in the future.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="August 2020"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<F6thLogo />}
                    >
                        <h1 className="text-2xl mb-2">Technical Theatre Technician</h1>
                        <LazyImage src='/media/rack.2399c0c9.jpg' />
                        <p>
                            Terminated all of the runs in a central rack complete with the associated networking equipment
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="June 2019 - September 2020"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<F6thLogo />}
                    >
                        <h1 className="text-2xl mb-2">Technical Theatre Technician</h1>
                        <LazyImage src='/media/orchestra_sound.b42bf72f.jpg' />
                        <p>
                            Sound engineering for a big band in the theatre.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )

}
export default ExperienceTimeline;