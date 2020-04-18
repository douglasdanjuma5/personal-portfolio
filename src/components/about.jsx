import React from 'react';
import myImage from "../img/myImage.jpg";
class About extends React.Component{
    constructor(){
        super();
        this.state = {
            
            skills:[
                {id:"HTML5_skill", content: "HTML5",porcentage: "90%", value: "90"},
                {id:"CSS3_skill", content: "CSS3",porcentage: "75%", value: "75"},
                {id:"Bootstrap_skill", content: "Bootstrap",porcentage: "80%", value: "80"},
                {id:"JavaScript_skill", content: "JavaScript",porcentage: "90%", value: "90"},
                {id:"NodeJs_skill", content: "NodeJs",porcentage: "95%", value: "95"},
                {id:"PHP_skill", content: "PHP",porcentage: "70%", value: "70"},
                {id:"ReactJS_skill", content: "ReactJS",porcentage: "65%", value: "65"},
                {id:"GatsbyJS_skill", content: "GatsbyJS",porcentage: "60%", value: "60"},
                {id:"React Native_skill", content: "React Native",porcentage: "60%", value: "60"},
                {id:"Codeigniter", content: "Codeigniter",porcentage: "75%", value: "75"},
                {id:"Wordpress_skill", content: "Wordpress",porcentage: "60%", value: "60"},
                {id:"Matlab_skill", content: "Matlab",porcentage: "50%", value: "50"}
                
            ],
            about_me:[
                {id: "first-p-about",content: " I am a full-Stack developer who loves transforming ideas into reality using code. I am passionate about using Javascript and Animation Libraries to create awesome user experiences."},
                {id: "second-p-about", content: " I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques."},

                {id: "third-p-about", content: "Motivated developer with over 4 years experience creating custom websites with ReactJs, Angular Js, NodeJs, Mongodb, HTML5, CSS3, Php, Wordpress and MySQL. Strong collaboration skills and proven history of application development using the latest front-end and back-end technologies."}
            ]
        }
    }

    render(){
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5" style={{margin: "0 auto"}}>
                                                <div className="about-img" style={{textAlign: "center"}}>
                                                    <img src={myImage} className="img-fluid rounded b-shadow-a" alt=""/>
                                                </div>
                                            </div>
                                            {<div className="col-sm-6 col-md-7">
                                                <div className="about-info">
                                                <p><span class="title-s">Name: </span> <span>Danjuma Douglas</span></p>
                                                <p><span class="title-s">Profile: </span> <span>full stack developer</span></p>
                                                <p><span class="title-s">Email: </span> <span>douglasdanjuma@gmail.com</span></p>
                                                <p><span class="title-s">Phone: </span> <span>(+234) 903311198</span></p>
                                                </div>
                                            </div>}
                                        </div>
                                        <h4><strong><u>Skills</u></strong></h4><br/>
                                        <div className="skill-mf">
                                            {/* <p className="title-s">Skill</p> */}
                                            {
                                                this.state.skills.map(skill => {
                                                    return(
                                                        <React.Fragment key={skill.id}>
                                                            <span>{skill.content}</span> <span className="pull-right">{skill.porcentage}</span>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{width: skill.porcentage}} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </React.Fragment>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                About Me
                                                </h5>
                                            </div>
                                            {
                                                this.state.about_me.map((content) => {
                                                    return <p className="lead" key={content.id}>{content.content}</p>;
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
