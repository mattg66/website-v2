import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const JobTimeline: React.FC<{}> = ({ }) => {
    return (
        <>
            <div className="bg-black">
                <VerticalTimeline lineColor={'#00155f'}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="July 2021 - August 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={null}
                    >
                        <h2 className="vertical-timeline-element-title">Network Engineer Intern</h2>
                        <h4 className="vertical-timeline-element-subtitle">Cisco - Full Time</h4>
                        <p>
                            Worked in a team responsible for maintaining lab space used for testing operations.
                        </p>
                        <p>
                            Responsibilities included

                        </p>
                        <ul>
                            <li>Maintaining and planning the expansion/improvement of infrastructure</li>
                            <li>Working in a team to plan such maintenance/upgrades</li>
                            <li>Planning testbed deployment, from initial scoping phase to full testbed availability</li>
                            <li>Working with architects and engineers to solve problems</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Nov 2021 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={null}
                    >
                        <h2 className="vertical-timeline-element-title">Sound Designer and Operator</h2>
                        <h4 className="vertical-timeline-element-subtitle">Starburst Theatre Foundation - Volunteer</h4>
                        <p>
                            Leading the design and implementation of sound reinforcement for our month long panto run during the festive season and various other events taking place throughout the year.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="June 2015 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={null}
                    >
                        <h2 className="vertical-timeline-element-title">Full stack developer</h2>
                        <h4 className="vertical-timeline-element-subtitle">Self-employed</h4>
                        <p>
                            Designed, Developed and Hosted a variety of websites for a variety of clients. Ranging from simple static HTML based websites, to full responsive PWAs backed with bespoke CMS.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="June 2019 - September 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={null}
                    >
                        <h2 className="vertical-timeline-element-title">Technical Theatre Technician</h2>
                        <h4 className="vertical-timeline-element-subtitle">Farnborough 6th Form College - Freelance</h4>
                        <p>
                            Planned, designed and operated sound and lighting for a mix of internal and external events.
                        </p>
                        <p>
                            Planned and implemented a new structured cabling network to future proof the theatre for the rise in lighting and sound data over IP networks.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="June 2017 - September 2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={null}
                    >
                        <h2 className="vertical-timeline-element-title">FoH Team Member / Waiter</h2>
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