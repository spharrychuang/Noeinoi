import React, { Component } from 'react'
// Styles
import '@/assets/sass/styles'
// components
import ProjectInfo from 'components/view/ProjectInfo'

export default class ProjectsIEDLearningPortal extends Component {

  render() {

    return (
      <section className={`projects-tmp`}>

        {/* <div className="tmp-block" >
          <div className="tmp-block__heroPhoto" style={{ backgroundImage:'url(./images/projects/iEduerLearningPortal-tmp03.jpg)' }}></div>
        </div> */}

        <div className="tmp-block" >
          <img className="tmp-block__medPhoto" style={{ paddingTop:'100px', paddingBottom:'0px' }} src='./images/projects/iEduerLearningPortal-tmp03.jpg' />
        </div>

        <div className="tmp-block">
          <ProjectInfo
            color={this.props.color}
            subColor={this.props.subColor}
            darkColor={this.props.darkColor}
            intro={this.props.intro}
            typo={this.props.typo}
            role={this.props.role}
            linkData={this.props.linkData}
          />
        </div>

        {/* <div className="tmp-block" >
          <div className="tmp-block__heroPhoto" style={{ backgroundImage:'url(./images/projects/iEduerLearningPortal-tmp04.jpg)' }}></div>
        </div> */}

        <div className="tmp-block" >
          <img className="tmp-block__medPhoto" style={{ paddingTop:'0px', paddingBottom:'100px' }} src='./images/projects/iEduerLearningPortal-tmp04.jpg' />
        </div>

        <div className="tmp-block" >
          <img className="tmp-block__medPhoto tmp-block__medPhoto__last" style={{ paddingTop:'50px', paddingBottom:'100px' }} src='./images/projects/iEduerLearningPortal-tmp05.jpg' />
        </div>

      </section>
    )
  }
}
