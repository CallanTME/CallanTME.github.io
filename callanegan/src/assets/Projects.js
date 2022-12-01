import { Fragment } from "react";
import microscopePics from "./MicroscopePics.jpeg";
import chipPics from "./ChipPics.jpeg";
import postureAppDemo from "./PostureAppDemo.png";

export const Projects = () => (
  <Fragment>
    <h1 id="projects">Projects</h1>

    <h3 id="budget-confocal-microscope">Budget Confocal Microscope</h3>

    <p>
      An open source project with the aim to make the highly useful but
      prohibitively expensive technique of confocal microscopy accessible to
      all. By using off the shelf parts and custom 3D printed pieces I created a
      highly replicable confocal microscope unit for £1500. This was a solo
      project so I worked on all aspects including optics, mechanical design, 3D
      printing, electronics and programming.
    </p>

    <p>
      A full report on the project is available here:
      <a
        href="/callanegan/src/assets/FYP_Final_Report_Compressed.pdf"
        target="_blank"
      >
        Report
      </a>
    </p>

    <p>
      It’s own webpage with results and instructions is available here:{" "}
      <a href="callanegan/src/assets/Projects">Page</a>
    </p>

    <p>
      The open-source repository with all the CAD files, BOM and build
      instructions is available here:{" "}
      <a href="https://github.com/CallanTME/LowCostConfocal">Repository</a>
    </p>

    <p>
      <img
        src={microscopePics}
        alt="ConfocalSystem"
        title="Confocal System"
        width="500"
      />
    </p>

    <hr />

    <h3 id="microfluidic-blood-brain-barrier-chip">
      Microfluidic Blood-Brain-Barrier Chip
    </h3>

    <p>
      This group project aimed to create an in-vitro model of the BBB in order
      to be able to test the suitability of imaging agents for glioblastoma
      diagnosis and analysis. The device consisted of a microfluidic chip with a
      cell culture within to mimic the BBB and a sensor setup to assess how much
      imaging agent could pass throught the barrier. I was the project manager
      and worked on microfluidic chip design and fabrication.
    </p>

    <p>
      A full report on the project is available here:
      <a href="/callanegan/src/assets/FinalReport.pdf" target="_blank">
        Report
      </a>
    </p>

    <p>
      <img src={chipPics} alt="ChipPics" title="BBB Chip Demo" width="500" />
    </p>

    <hr />

    <h3 id="hospital-bed-monitoring-system">Hospital Bed Monitoring System</h3>

    <p>
      Built a web-app created for nurses in hospital to keep track of which
      patients need to be moved based on their risk factors and how long they’ve
      been in the same position. The web-app was built using Vaadin as a
      framework. It was written in Java and SQL and was deployed using Heroku.
      The ultimate goal is to integrate such an app with bed sensors to
      significantly reduce the workload of nurses and prevent infections.
    </p>

    <p>
      The web-app can be accessed{" "}
      <a href="https://postureapp.herokuapp.com/login">HERE</a>
    </p>

    <p>
      <img
        src={postureAppDemo}
        alt="PostureAppDemo"
        title="Posture App Demo"
        width="500"
      />
    </p>

    <hr />

    <h3 id="electronic-brailler-for-teaching-maths">
      Electronic Brailler for teaching Maths
    </h3>

    <p>
      Created a refreshable braille display for teaching maths to visually
      impaired students.
    </p>

    <hr />

    <h3 id="others">Others</h3>

    <ul>
      <li>COVID-19 Awareness Game - Imperial Health Hack 2020 Winner</li>
      <li>Created amplifier circuit to conidition ultrasound echo signals</li>
      <li>Neural Decoder - Predicting movement from monkey spike trains</li>
      <li>Reinforcement Learning</li>
    </ul>
  </Fragment>
);
