import React from 'react'

export const AboutUs = () => {
  return (
    <div>
      <header>
        <div>
          <div>
            <div>
              <div className="about-header">
                <h1 className="h1-header">Hello there,</h1>
                <h4 className="h4-header">
                  A creative bunch who love code and design.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div align="center">
          <h2 align="center" className="team">
            Our Team:
          </h2>

          <img
            height="300px"
            width="300px"
            style={{margin: '20px'}}
            src="/kyvz-avatar.png"
            alt="Kay"
          />
          <h4 className="h4-about">Kay Hardeman</h4>
          <p style={{margin: '10px'}}>
            I have dealt with what seems like the impossible and persevered,
            preparing me for my new endeavor of becoming a full stack web
            developer.
          </p>

          <img
            height="300px"
            width="300px"
            style={{margin: '20px'}}
            src="/tatiana-avatar.png"
            alt="Tatiana"
          />
          <h4 className="h4-about">Tatiana Aviles</h4>
          <p style={{margin: '10px'}}>
            {' '}
            I’m ready to embrace change, switch careers and put my skills and
            passion to work.
          </p>

          <img
            height="300px"
            width="300px"
            style={{margin: '20px'}}
            src="/serge-avatar.png"
            alt="Serge"
          />
          <h4 className="h4-about">Serge Aristide Nikiema</h4>
          <p style={{margin: '10px'}}>
            /I really enjoy working with technology precisely web development
            tools and I wish to use my skills and contribute to big creation
            within a company.
          </p>
          <p style={{margin: '10px'}} />

          <img
            height="300px"
            width="300px"
            style={{margin: '20px'}}
            src="luis-avatar.png"
            alt="Luis"
          />
          <h4 className="h4-about">Luis Carbajal</h4>
          <p style={{margin: '10px'}}>
            {' '}
            My ultimate goal is to build great products that help people to
            interact with information and the world in a new way.
          </p>
        </div>
      </div>
    </div>
  )
}
