import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import CiscoLogo from '../components/CiscoLogo';
import F6thLogo from '../components/F6thLogo';

const JobTimeline: React.FC<{}> = ({ }) => {
    return (
        <>
            <div className="bg-black">
                <VerticalTimeline lineColor={'#00155f'}>
                <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="Sept 2023 - Present"
                        iconStyle={{ background: '#003db6', color: '#fff' }}
                        icon={<CiscoLogo />}
                    >
                        <h1 className="text-2xl">Network Consulting Engineer</h1>
                        <h4 className="vertical-timeline-element-subtitle">Cisco CX Solution Validation Services - Full Time</h4>
                        <p>
                            Responsible for the design, implementation and testing of various technology stacks for Cisco's largest companies. 
                        </p>
                        <p>
                            Role involves working with large multi-national corporations and providing direction and guidance on how we can best validate and test their network infrastructure to ensure reliability and performance. Designed and implemented network designs and constructed test plans and automated test cases to improve efficiency and reusability of testing.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="July 2021 - August 2022"
                        iconStyle={{ background: '#003db6', color: '#fff' }}
                        icon={<CiscoLogo />}
                    >
                        <h1 className="text-2xl">Network Engineer Intern</h1>
                        <h4 className="vertical-timeline-element-subtitle">Cisco - Full Time</h4>
                        <p>
                            Worked in a team responsible for maintaining lab space used for testing operations.
                        </p>
                        <p>
                            Responsibilities included maintaining and planning the expansion/improvement of infrastructure, working in a team to plan such maintenance/upgrades, planning testbed deployment, from initial scoping phase to full testbed availability, and working with architects and engineers to solve problems.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="Nov 2021 - Present"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<img src='/media/starburst.png' className="timeline-icon" />}
                    >
                        <h1 className="text-2xl">Sound Designer and Operator</h1>
                        <h4 className="vertical-timeline-element-subtitle">Starburst Theatre Foundation - Volunteer</h4>
                        <p>
                            Leading the design, implementation and operation of sound reinforcement for our month long panto run during the festive season and various other events taking place throughout the year.
                        </p>
                        <p>
                            All profits go the Starburst Foundation, which raises money for children with challenging disabilities
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="June 2015 - Present"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<img src='/media/online-design.fd1b02a4.png' className='timeline-icon' />}
                    >
                        <h1 className="text-2xl">Full stack developer</h1>
                        <h4 className="vertical-timeline-element-subtitle">Self-employed</h4>
                        <p>
                            Designed, developed and hosted websites for a variety of clients. Ranging from simple static HTML based websites, to full responsive PWAs backed with bespoke CMS.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="March 2019 - September 2020"
                        iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<F6thLogo />}
                    >
                        <h1 className="text-2xl">Technical Theatre Technician</h1>
                        <h4 className="vertical-timeline-element-subtitle">Farnborough 6th Form College - Freelance</h4>
                        <p>
                            Planned, designed and operated sound and lighting for a mix of internal and external events.
                        </p>
                        <p>
                            Planned and implemented a new structured cabling network to future proof the theatre for the rise of IP transport used for lighting and sound.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#003db6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #003db6' }}
                        date="June 2017 - September 2019"
                        iconStyle={{ background: '#003db6', color: '#fff' }}
                        icon={<img src='/media/macs.png' className="timeline-icon" />}
                    >
                        <h1 className="text-2xl">FoH Team Member / Waiter</h1>
                        <h4 className="vertical-timeline-element-subtitle">McMullen & Sons Ltd</h4>
                        <p>
                            Started off as a food runner, and then progressed to be a waiter, serving customers food and drink with a smile.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )

}
export default JobTimeline;