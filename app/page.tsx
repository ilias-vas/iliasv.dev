'use client'
import Link from 'next/link'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react"
import Image from 'next/image'
function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-3xl mb-8 tracking-tighter">hi, I'm ilias 🧑‍🎓</h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm currently a 3rd year student at the `}
        <span className='not-prose'>
          <Badge href="https://www.uts.edu.au">
            <img
              alt="UTS Logo"
              src="/uts.svg"
              className='!mr-1'
              width="8"
              height="8"
            />
            University of Technology Sydney
          </Badge>
        </span>
        {` studying a Bachelor of Computing Science (Honours) with a major in Artificial Intelligence and Data analytics. I'm eager to gain experience in the field of software development and use the skills I have obtained to create real and effective software solutions`}
        <br/>
        <br/>

        {`I have utilised various tools and languages such as `}         
        <span className='not-prose'>
          <Badge href="https://cplusplus.com">
            <img
              alt="CPP Logo"
              src="/c++.svg"
              className='!mr-1'
              width='12'
              height='12'
            />
            C++
          </Badge>
        </span>     
        {` for Arduino and Robotics programming, OO based programming in `}
        <span>
          <Badge href="https://www.java.com/en/">
            <img
              alt="Java logo"
              src="/java.svg"
              className='!mr-1'
              width='12'
              height='12'
            />
            Java
          </Badge>
        </span>
        {` , Machine learning models developed in `}
        <span>
          <Badge href="https://www.python.org">
            <img
              alt="Python logo"
              src="/python.svg"
              className='!mr-1'
              width='12'
              height='12'
            />
            Python
          </Badge>
        </span>
        {` and full stack development using frameworks such as `}
        <span>
          <Badge href="https://nextjs.org">
            <img
              alt="Next logo"
              src="/next-logo.svg"
              className='!mr-1'
              width='12'
              height='12'
            />
            Next.js
          </Badge>
        </span>

        <br/>
        <br/>
        On this site you can find examples of some of my past <Link href="/work">projects</Link>,
        my current <Link href="https://drive.google.com/file/d/1yeRrQg1gQjk55SMAXAkEEewBIio2b4_q/view?usp=sharing" rel='noopener noreferrer' target='_blank'>resume</Link> as well 
        as my various contact details. Please feel free to get in touch if you have any opportunities available for me!
      </p>
      
      <br/>
      <Card className="bg-background/5">
        <CardBody>
          <div className='flex items-start space-x-5'>
            <Image
              src="/memoji.png"
              width={200}
              height={200}
              alt="Memoji"
              quality={100}
              className='rounded-lg bg-background/10'
            />
            <div className='flex flex-col justify-center'>
              <h1 className='text-neutral-600 dark:text-neutral-200 font-bold text-2xl'>
                Ilias Vasiliou
              </h1>
              <br/>
              <div className='flex items-center'>
                <img src='/github.svg' alt='Github' className='h-8 w-8 mr-4 drop-shadow-lg' />
                <p className='prose prose-neutral dark:prose-invert'>
                  <Link href="https://github.com/ilias-vas">Check out my projects on GitHub!</Link>
                </p>
              </div>
              <br/>
              <div className='flex items-center'>
                <img src='/linkedin.svg' alt='Linkedin' className='h-8 w-8 mr-4' />
                <p className='prose prose-neutral dark:prose-invert'>
                  <Link href="https://linkedin.com/in/iliasv">Connect with me on Linkedin!</Link>
                </p>
              </div>
              <br/>
              <div className='flex items-center'>
                <img src='/facebook.svg' alt='facebook' className='h-8 w-8 mr-4 drop-shadow-sm' />
                <p className='prose prose-neutral dark:prose-invert'>
                  <Link href="https://www.facebook.com/ilias.vasiliou.902">Add me on Facebook!</Link>
                </p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}