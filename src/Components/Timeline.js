import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import "../Styles/Timeline.css";

const Timeline = () => {
  return (
    <div>
      <h1 className="time-head hover-underline-animation">
        Public Launch Timeline
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work mb-40"
          contentStyle={{ background: "rgb(70, 70, 70)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(153, 156, 155)" }}
          date="2023 - January"
          iconStyle={{ background: "rgb(153, 156, 155)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h1 className="vertical-timeline-element-title align-middle text-2xl">
            Ideation Phase of Grabup
          </h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work mb-40"
          contentStyle={{ background: "rgb(70, 70, 70)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(153, 156, 155)" }}
          date="2023 - February"
          iconStyle={{ background: "rgb(153, 156, 155)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h1 className="vertical-timeline-element-title align-middle text-2xl">
            Starting offline Survey and Data Collection
          </h1>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work mb-40"
          contentStyle={{ background: "rgb(70, 70, 70)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(153, 156, 155)" }}
          date="2023 - March"
          iconStyle={{ background: "rgb(153, 156, 155)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h1 className="vertical-timeline-element-title align-middle text-2xl">
            Developing App Prototype
          </h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work mb-40"
          contentStyle={{ background: "rgb(70, 70, 70)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(153, 156, 155)" }}
          date="2023 - April"
          iconStyle={{ background: "rgb(153, 156, 155)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h1 className="vertical-timeline-element-title align-middle text-2xl">
            Useless college exams
          </h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education mb-40"
          date="May 2023"
          contentStyle={{ background: "rgb(70, 70, 70)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(153, 156, 155)" }}
          iconStyle={{ background: "rgb(153, 156, 155)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h1 className="vertical-timeline-element-title align-middle text-2xl">
            Developing Grabup's Website
          </h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education mb-40"
          date="Jun 1st, 2023"
          contentStyle={{ background: "rgb(70, 70, 70)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(153, 156, 155)" }}
          iconStyle={{ background: "rgb(153, 156, 155)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h1 className="vertical-timeline-element-title align-middle text-2xl">
            Launch Website Publicly
          </h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education mb-40"
          date="June - September, 2023"
          contentStyle={{ background: "rgb(70, 70, 70)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(153, 156, 155)" }}
          iconStyle={{ background: "rgb(27, 219, 40)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h1 className="vertical-timeline-element-title align-middle text-2xl">
            Android Beta Testing
          </h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education mb-40"
          date="September 31, 2023"
          contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          iconStyle={{ background: "rgb(27, 219, 40)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0, 0, 0)" }}
          icon={<StarIcon />}
        >
        <h1 className="vertical-timeline-element-title align-middle text-2xl">
          Grabup's Official Public Launch
        </h1>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <hr class="dashed-2 mt-10" />
    </div>
  );
};

export default Timeline;
