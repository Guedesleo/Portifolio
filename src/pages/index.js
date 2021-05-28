import React from 'react';

import Layout from '../components/Layout';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import { FiGithub , FiEye } from "react-icons/fi";
import flexbox from '../assets/images/Flexbox.png';
import gridlayout from '../assets/images/Grid-Layout.png';
import reibebidas from '../assets/images/Rei-bebidas.png';
// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Resume from '../components/sections/Resume';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <Resume
        firstName={config.firstName}
        lastName={config.lastName}
        address={config.address}
        phone={config.phone}
        email={config.email}
        socialLinks={config.socialLinks}
      >
       Formado em Ciência da Computação, atualmente estudando e melhorando os meus conhecimento NodeJS, ReactJS e React Native,CSS.
      </Resume>
      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">DESENVOLVEDOR JUNIOR NODE E GOLANG</h3>
              <div className="subheading mb-3">MONITOR DO MERCADO</div>
              <p>
              Correções de Bugs de estilização de páginas, Ajustes nos robos 
              crawling da BOVESP, criação de Widgets, Reescrita do site atual 
              em GoLang.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Dezembro 2020 - Março 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Desenvolvedor Junior</h3>
              <div className="subheading mb-3">Desenvolvedor Freelancer </div>
              <p>
              Ajudo regularmente em projetos pontuais em uma pequena 
              fábrica de software fazendo alguns CRUDS e Robôs Web 
              Crawling: Site do Correios e da Minuto Seguro , utilizando a 
              tecnoliga Node.JS. Atualmente estou implemetando em C# alguns 
              serviços RESTFul com .net Core 3.0 sobre a orientação de um 
              analista Sênior, o que tem me auxiliado a ficar mais próximo dos 
              meus objetivos.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Novembro 2019 - Fevereiro 2020</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Centro Universitário das Faculdades Metropolitanas Unidas </h3>
              <div className="subheading mb-3">Bacharel de Ciência da Computação</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2016 - Dezembro 2019</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <BubbleChart
            className="container"
            padding={0} // optional value, number that set the padding between bubbles
            showLegend
            data={[
              { label: 'HMTL5', value: 60 },
              { label: 'CSS', value: 60 },
              { label: 'React', value: 20 },
              { label: 'React-Native', value: 20 },
              { label: 'JavaScript', value: 60 },
              { label: 'Typescript', value: 20 },
              { label: 'TDD', value: 10 },
              { label: 'Flex-Box', value: 60 },
              { label: 'Bootstrap', value: 30 },
              { label: 'MYSQL', value: 20 },
              { label: 'SQL', value: 20 },
              { label: 'Postgres', value: 20 },
              { label: 'Styled Components', value: 35 },
              { label: 'Celebrate', value: 25 },
              { label: 'Jest', value: 25 },
              { label: 'ORACLE', value: 10 },
              { label: 'Node.js', value: 60 },
            ]}
          />

          <div className="subheading mb-3">Projects</div>
          <section className="projetos">
            <div className="card">
              <img src={flexbox} alt="Flexbox" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-body">Conceito de FlexBox</h5>
                <p className="card-text">Aplicando o conceito de Flexbox, com o curso de Origamid.</p>
                <a href="https://conceitosflexbox.netlify.app/" className=" button btn"><FiEye/>Visualizar</a>
                <a href="https://github.com/Guedesleo/Flexbox" className="button btn"><FiGithub/>Código Github</a>
              </div>
            </div>
            <div className="card">
              <img src={gridlayout} alt="Grid-Layout" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-body">CSS-Grid-Layout</h5>
                <p className="card-text">Aplicando o conceito de Grid-Layout, com o curso de Origamid.</p>
                <a href="https://grid-layout-css.netlify.app/" className="button btn "><FiEye/>Visualizar</a>
                <a href="https://github.com/Guedesleo/Grid-LayoutCSS" className=" button btn "><FiGithub/>Código Github</a>
              </div>
            </div>
            <div className="card">
              <img src={reibebidas} alt="Rei das Bebidas" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-body">Rei das Bebidas Conceito de Flexbox e Grid-Layout</h5>
                <p className="card-text">Aplicando o conceito de Flexbox e Grid Layout.</p>
                <a href="https://reidasbebidas.netlify.app/" className=" button btn"><FiEye/>Visualizar</a>
                <a href="https://github.com/Guedesleo/Rei-das-Bebidas" className="button btn"><FiGithub/>Código Github</a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Além de ser um desenvolvedor web e mobile, eu aproveito a maior parte do tempo ao ar livre.Jogando Futebol onde eu tenho
            um time.
          </p>
          <p className="mb-0">
                Quando forçado a entrar em casa, sigo uma série de filmes e programas de televisão de ficção científica e fantasia, 
                passo grande parte do meu tempo livre me aprimorando os mais recentes avanços tecnológicos no mundo do desenvolvimento front-end da web.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              CSS- Flexbox - Origamid
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              CSS- Grid-Layout - Origamid
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              SASS - Origamid
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
                LauchtBase- Rocketseat
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              GoStack- Rocketseat
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
