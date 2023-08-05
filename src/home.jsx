// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./styles/App.css"

const home = () => {
  return (
   <>
    <header>
      <h1>hello i am header</h1>
      <ul>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
      </ul>
    </header>
    <section>
      <div className="body">
        <div className="right">
          <img
            src="https://repository-images.githubusercontent.com/136764479/79e48d00-ce6d-11ea-87d4-c0673f53b894"
            alt="an online list image"
          />
        </div>
        <div className="left">
          <h1>Hi devs I am sameer</h1>
          <h6>i am full stack developer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            neque tempore reiciendis voluptatibus quia cupiditate laudantium
            vitae soluta aliquid aperiam, ea, magnam quos dolores harum possimus
            nulla vel, ipsum quae numquam. Aperiam harum beatae repudiandae
            tenetur fuga! Minus, dolore eius?
          </p>
        </div>
      </div>
    </section>
   </>
  )
}

export default home 