import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Image from 'next/image';
import Rack1 from '../public/media/rack1.jpg'
import Rack2 from '../public/media/rack2.jpg'
import Rack3 from '../public/media/rack.2399c0c9.jpg'
import PullingCables from '../public/media/pulling_cables.e3146164.jpg'
import BarSocket from '../public/media/bar_socket.0e194677.jpg'
import SoundEngineering from '../public/media/orchestra_sound.b42bf72f.jpg'
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
                        icon={<CiscoLogo/>}
                    >
                        <h1 className="text-2xl mb-2">High-Speed SP Network Testing</h1>
                        <Image src={Rack1} loading="lazy"/>
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
                        icon={<CiscoLogo/>}
                    >
                        <h1 className="text-2xl mb-2">5G Cloud Core Testing</h1>
                        <Image src={Rack2} loading="lazy"/>
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
                        icon={<CiscoLogo/>}
                    >
                        <h1 className="text-2xl">Private 5G Proof of Concept</h1>
                        <p>Worked as part of a small taskforce to put together an industry first proof of conept for a private 5G solution.</p>
                        <p>I standardised testbed deployment for similar projects in the future, and worked closely with the project team to iron out networking and performance issues.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="June 2019 - September 2020"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<F6thLogo/>}
                    >
                        <h1 className="text-2xl mb-2">Technical Theatre Technician</h1>
                        <Image src={PullingCables} loading="lazy"/>
                        <p>
                            Planned and implemented a new structured cabling network to future proof the theatre for the rise in lighting and sound data over IP networks.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="June 2019 - September 2020"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<F6thLogo/>}
                    >
                        <h1 className="text-2xl mb-2">Technical Theatre Technician</h1>
                        <Image src={BarSocket} loading="lazy"/>
                        <p>
                            Planned and implemented a new structured cabling network to future proof the theatre for the rise in lighting and sound data over IP networks.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="June 2019 - September 2020"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<F6thLogo/>}
                    >
                        <h1 className="text-2xl mb-2">Technical Theatre Technician</h1>
                        <Image src={Rack3} loading="lazy"/>
                        <p>
                            Planned and implemented a new structured cabling network to future proof the theatre for the rise in lighting and sound data over IP networks.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="June 2019 - September 2020"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<F6thLogo/>}
                    >
                        <h1 className="text-2xl mb-2">Technical Theatre Technician</h1>
                        <Image src={SoundEngineering} loading="lazy"/>
                        <p>
                            Planned and implemented a new structured cabling network to future proof the theatre for the rise in lighting and sound data over IP networks.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )

}
export default ExperienceTimeline;