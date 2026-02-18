import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
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

const JobTimeline: React.FC<{}> = ({ }) => {
    return (
        <>
            <div className="relative bg-gradient-to-b from-black from-50% to-darkBlue to-97%">
                <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: `linear-gradient(rgba(0,61,182,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,61,182,0.06) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
                <VerticalTimeline lineColor={'#00155f'}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        date="May 2024 - Present"
                        iconStyle={iconDark}
                        icon={<Logo src="/media/ITN_logo_(2022).svg"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">IP Network Engineer</h1>
                        <h4 className="vertical-timeline-element-subtitle text-blue-200 mb-3">ITN - Full Time</h4>
                        <div className="space-y-2 text-blue-100 text-sm leading-relaxed">
                            <p>Designing and maintaining core broadcast ST 2110 infrastructure, ensuring seamless, high-performance media workflows, alongside traditional corporate networking including wired access, Wi-Fi, and IPTV.</p>
                            <p>Beyond networking, I am also involved in compute platforms — designing and implementing hypervisor clusters to improve the compute resources available to projects</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        date="Sept 2023 - April 2024"
                        iconStyle={iconDark}
                        icon={<Logo src="/media/cisco-logo.png"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">Network Consulting Engineer</h1>
                        <h4 className="vertical-timeline-element-subtitle text-blue-200 mb-3">Cisco CX Solution Validation Services - Full Time</h4>
                        <div className="space-y-2 text-blue-100 text-sm leading-relaxed">
                            <p>Responsible for the design, implementation and testing of various technology stacks for Cisco's largest companies.</p>
                            <p>Role involves working with large multi-national corporations and providing direction and guidance on how we can best validate and test their network infrastructure to ensure reliability and performance. Designed and implemented network designs and constructed test plans and automated test cases to improve efficiency and reusability of testing.</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        date="July 2021 - August 2022"
                        iconStyle={iconDark}
                        icon={<Logo src="/media/cisco-logo.png"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">Network Engineer Intern</h1>
                        <h4 className="vertical-timeline-element-subtitle text-blue-200 mb-3">Cisco - Full Time</h4>
                        <div className="space-y-2 text-blue-100 text-sm leading-relaxed">
                            <p>Worked in a team responsible for maintaining lab space used for testing operations.</p>
                            <p>Responsibilities included maintaining and planning the expansion/improvement of infrastructure, working in a team to plan such maintenance/upgrades, planning testbed deployment, from initial scoping phase to full testbed availability, and working with architects and engineers to solve problems.</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        date="Nov 2021 - Present"
                        iconStyle={iconLight}
                        icon={<Logo src="/media/starburst.png"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">Sound Designer and Operations Director</h1>
                        <h4 className="vertical-timeline-element-subtitle text-blue-200 mb-3">Starburst Theatre Foundation - Volunteer</h4>
                        <div className="space-y-2 text-blue-100 text-sm leading-relaxed">
                            <p>Leading the design, implementation and operation of sound reinforcement for our month long panto run during the festive season and various other events taking place throughout the year. Since March, I have taken on the role of operations director which will see me oversee the day to day running of our property and working out how we can best manage money and resources to secure the future for the charity.</p>
                            <p>All profits go the Starburst Foundation, which raises money for children with challenging disabilities.</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        date="June 2015 - Present"
                        iconStyle={iconLight}
                        icon={<Logo src="/media/online-design.fd1b02a4.png"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">Full Stack Developer</h1>
                        <h4 className="vertical-timeline-element-subtitle text-blue-200 mb-3">Self-employed</h4>
                        <p className="text-blue-100 text-sm leading-relaxed">Designed, developed and hosted websites for a variety of clients. Ranging from simple static HTML based websites, to full responsive PWAs backed with bespoke CMS.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        date="March 2019 - September 2020"
                        iconStyle={iconLight}
                        icon={<Logo src="/media/6th.png"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">Technical Theatre Technician</h1>
                        <h4 className="vertical-timeline-element-subtitle text-blue-200 mb-3">Farnborough 6th Form College - Freelance</h4>
                        <div className="space-y-2 text-blue-100 text-sm leading-relaxed">
                            <p>Planned, designed and operated sound and lighting for a mix of internal and external events.</p>
                            <p>Planned and implemented a new structured cabling network to future proof the theatre for the rise of IP transport used for lighting and sound.</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={cardStyle}
                        contentArrowStyle={arrowStyle}
                        date="June 2017 - September 2019"
                        iconStyle={iconDark}
                        icon={<Logo src="/media/macs.png"/>}
                    >
                        <h1 className="text-2xl mb-2 pb-2 border-b border-white/20">FoH Team Member / Waiter</h1>
                        <h4 className="vertical-timeline-element-subtitle text-blue-200 mb-3">McMullen & Sons Ltd</h4>
                        <p className="text-blue-100 text-sm leading-relaxed">Started off as a food runner, and then progressed to be a waiter, serving customers food and drink with a smile.</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )

}
export default JobTimeline;
