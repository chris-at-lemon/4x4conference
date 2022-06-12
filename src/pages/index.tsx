import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import prisma from '../../lib/prisma'

import LoginCard from '../components/login/loginCard'

import { HomeController } from '../controllers/pages/homeController'
import styles from '../styles/pages/home/home.module.scss'

import { Hero } from '../components/hero/hero'
import { TitleSection } from '../components/titles/titleSection'
import { FeatureExtended } from '../components/featureSections/featured'
import { CountdownSection } from '../components/timer/timer'

import Horn from '../../lib/svg/linearicons/bullhorn.svg'
import Map from '../../lib/svg/linearicons/map.svg'
import Company from '../../lib/svg/linearicons/apartment.svg'
import Star from '../../lib/svg/fontawesome/star-regular.svg'

const countdownBckg = {
  backgroundImage: "url('https://source.unsplash.com/GfpzJyfudE8/1600x900')"
}


export const getStaticProps: GetStaticProps = async () => {
  const users = await prisma.user.findMany();
  console.log(users);

  return { props: { users } };
};

const Home: NextPage = () => {
  const { fn, showLoginCard } = HomeController();

  return (
    <>
      <Hero
        heroImg="/img/threadmarks.jpg"
        heroH1="Fonds für jedes Gelände"
      />
      <section id="intro" className={`${styles['section--Separator']} ${styles['section--gray']} ${styles['no-mt']}`}>
        <TitleSection
          img={Company}
          title="Die Veranstalter &amp; Themen"
          subtitle="Fonds für jedes Gelände"
        />
      </section>

      <section className={`${styles['section--Features']} ${styles['features--withText']} ${styles['section--gray']}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <FeatureExtended
                imgSrc="https://ik.imagekit.io/vcqe1lhbs/4x4/companies/loys_wRVS2HHAW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654814860811"
                title="First Private Systematic Merger Opportunities"
                body="Der Fonds profitiert von Unternehmensübernahmen und Fusionen - zudem basiert die Strategie auf Methoden der künstlichen Intelligenz"
                link="/company/first-private"
                ftrBtnTxt="Details"
              />
            </div>
            <div className="col-md-3">
              <FeatureExtended
                imgSrc="https://ik.imagekit.io/vcqe1lhbs/4x4/companies/lfde_fFnDX0-6N.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654814860815"
                title="Echiquier Major SRI Growth Europe"
                body="Der Fonds ist ein nach Nachhaltigkeitskriterien zertifizierter Fonds mit Fokus auf besonders konjunkturunabhängige Werte"
                link="/company/lfde"
                ftrBtnTxt="Details"
              />                    </div>
            <div className="col-md-3">
              <FeatureExtended
                imgSrc="https://ik.imagekit.io/vcqe1lhbs/4x4/companies/loys_wRVS2HHAW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654814860811"
                title="LOYS Premium Dividende"
                body="Der europäische Aktienfonds fokussiert Unternehmen mit nachhaltigen Dividenden und investiert ausschließlich in Werte, die weniger kosten als sie wert sind"
                link="/company/loys"
                ftrBtnTxt="Details"
              />                    </div>
            <div className="col-md-3">
              <FeatureExtended
                imgSrc="https://ik.imagekit.io/vcqe1lhbs/4x4/companies/tbf_7tH7cuGVB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654814860919"
                title="TBF Balanced"
                body="Der Fonds vereint das Beste aus zwei Welten – als ausgewogener global investierender Mischfonds findet er Opportunitäten in den globalen Industrienationen"
                link="/company/tbf"
                ftrBtnTxt="Details"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="intro" className={`${styles['section--Separator']} ${styles['no-mt']}`}>
        <TitleSection
          img={Horn}
          title="Die 4x4 Roadshow 2021"
          subtitle="Fonds für jedes Gelände"
        />
      </section>

      <section className={`${styles['section--summary']}`}>
        <div className="container">
          <div className='row'>
            <div className='col-lg-10 mx-auto'>
              <div className="row">
                <div className="col">
                  <div className={`${styles['summmaryTitle']}`}>
                    <img className={`${styles['inlineIcon']}`} src={Star} alt="star" />
                    Worum geht es?
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <img className={`${styles['imgResponsive']}`} src='https://ik.imagekit.io/vcqe1lhbs/4x4/business/tr:w-575/office_fJVRStAaO.jpg' alt='office' />
                </div>
                <div className='col-md-6'>
                  <p>Im Zusammenspiel der aktuellen Marktlage, den makroökonomischen Herausforderungen und Ihren eigenen Zielen in der Kapitalanlage ist es wahrscheinlich wichtiger denn je sich mit einem gut diversifizierten Portfolio auf jedes Gelände vorzubereiten.
                    <br /><br />Lernen Sie vier einzigartige Manager und deren Strategien persönlich kennen. Nutzen Sie die Chance zum direkten Austausch mit den Portfoliomanagern im attraktiven Workshop-Format (4x10 Teilnehmer für je 30 Min. pro Portfoliomanager im Wechsel).
                    <br /><br />Mit der 4x4-Roadshow bieten wir Ihnen spannende Ansätze, um die von Ihnen verantworteten Portfolios geländegängig zu machen und somit auf die kommenden Herausforderungen einzustellen. Wir freuen uns auf Sie!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section> {/* -- /. Intro Tabs --*/}

      <section className={`${styles['section--parallax-pt']}`}>
            <div className={`${styles['countdown-container']}`}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className={`${styles['remainTime']}`}>Es bleiben noch:</div>
                            <div className={`${styles['countDownWrapper']}`}>
                              <CountdownSection
                                  targetDate="2022-09-28"
                              />
                            </div>
                            <div className={`${styles['toLocation']}`}>bis Frankfurt</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Home
