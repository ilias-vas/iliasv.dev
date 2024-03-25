'use client'
import { Image } from "@nextui-org/react";

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Below is a collection of projects I have created throughout my programming journey. 
          I have attached images and links to each project if 
          you wish to learn more about my experience.
        </p>
        <hr className='my-6 border-neutral-100 dark:border-neutral-800' />
        <h2 className='font-medium text-xl mb-1 tracking-tighter'>English2German</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Python, Tensorflow, Matplotlib, Seaborn
        </p>
        <p>
          In a group, I implemented a deep learning model utilising a Sequence 2 Sequence based approach in order to translate English sentences
          to German 
        </p>
        <ul>  
          <li>I utilised various visualisation libraries such as Seaborn and Matplotlib in order to show the models training progress</li>
          <li>The model achieved target BLEU and METEOR scores despite a lack of training time</li>
        </ul>
        <p>
          Overall this project was a great way to deepen my understanding of Machine learning and AI concepts as a whole.
        </p>
        <div className="flex justify-center items-center">
          <Image
            isZoomed
            width={680}
            alt="Code photo"
            src="/eng2german.png"
          />
        </div>
        <hr className='my-6 border-neutral-100 dark:border-neutral-800' />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Robotic Arm</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Arduino, C++, Bitbucket
        </p>
        <p>
          I led a team of developers in creating a fully functional Robotic Arm with 4 degrees of freedom. Throughout this project
          I utilised CAD software along with 3D Printing to design the chassis and created a proprietary C++ library in order to 
          streamline the development and maintenance of the project.
        </p>
        <p>
          Once the project was complete, I taught a course to high schools around Sydney which allowed students to build and code their own 
          Robotic Arm. The arm was controlled using a SNES controller and had input for each servo connected to the arm.
        </p>
        <div className="columns-2xs">
          <Image
            isZoomed
            alt="Robot Arm Photo" 
            src="/robot-arms.jpg" 
          />
          <Image
            isZoomed
            alt="Leos"
            src="/Leos.png"
          />
        </div>
        <hr className='my-6 border-neutral-100 dark:border-neutral-800' />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Rover Library</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Arduino, C++, Bitbucket
        </p>
        <p>
          I aided in the development of bespoke C++ software to control a fully autonomous rover. The rovers design consisted of various 
          unique hardware such as Ultrasonic sensors and Buzzers, which were all connected to a 3D printed chassis and wheels. 
          This software included various classes and functions to control parts of the rover such as:
        </p>
          <ul>
            <li>Sound</li>
            <li>Vision</li>
            <li>LEDs</li>
            <li>Servos</li>
          </ul>
        <p>
          I also mentored fellow developers on software engineering and basic C++ best practices to improve code quality which helped reduce 
          runtime errors by half. 
        </p>
        <div className="columns-2">
          <div className="">
            <Image
              isZoomed
              alt="Rover Photo"
              src="/rover.jpeg"
            /> 
          </div>
          <Image
            isZoomed
            alt="Library"
            src="/rover_building.png"
          />
        </div>
        <hr className='my-6 border-neutral-100 dark:border-neutral-800' />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Portfolio Website</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Next.js, NextUI, Tailwind CSS, Git
        </p>
        <p>
          I created this website to showcase the various projects I have created, whilst also allowing me to polish up on my web development skills.
          For this website I wanted to utilise new frameworks that I havent worked with before so I chose Next.js and NextUI for the bulk of development,
          utilising Tailwind CSS for some extra styling.
        </p>
        <p>
          I chose to go with a more minimalistic styled site as I believe it allows for my experience to speak for itself, whilst still having stylish aspects
          such as custom cards, hyperlinks and images.
        </p>
      </div>
    </section>
  );
}
