<template>
  <div class="container">
    <div class="card">
      <div class="card-header tac p20">
        <div>
          <img 
            src="/img/profile.png" 
            alt="profile-picture"
            class="w6 rad50 mb5" />
          </div>
        <span class="fzxl fwb">
          Killian Challeau
        </span>
        <span class="db fzm m5">
          Développeur Full Stack
        </span>
        <div 
          class="grid tal mt10 ml30">
          <div class="g12 g6--mobile g4--tablet">
            <cake-variant width="18" />
            <span class="fzs va6 dib pl10">
              2 Novembre 1993
            </span>
          </div>
          <div class="g12 g6--mobile g4--tablet">
            <pin width="18" />
            <span class="fzs va6 dib pl10">
              Bordeaux, FRANCE
            </span>
          </div>
          <div class="g12 g6--mobile g4--tablet">
            <phone width="18" />
            <span class="fzs va6 dib pl10">
              06 98 97 94 05
            </span>
          </div>
          <div class="g12 g6--mobile g4--tablet">
            <email width="18" />
            <span class="fzs va6 dib pl10">
               <a 
                href="mailto:killian.challeau@hotmail.fr"
                class="txt-aqua-sky--hover">
                killian.challeau@hotmail.fr
              </a>
            </span>
          </div>
          <div class="g12 g6--mobile g4--tablet">
            <linkedin-box width="18" />
            <span class="fzs va6 dib pl10">
              <a 
                href="https://www.linkedin.com/in/killian-challeau/" 
                target="_blank"
                class="txt-aqua-sky--hover">
                linkedin.com
              </a>
            </span>
          </div>
          <div class="g12 g6--mobile g4--tablet">
            <gitlab width="18" />
            <span class="fzs va6 dib pl10">
              <a 
                href="https://gitlab.com/kilalo" 
                target="_blank"
                class="txt-aqua-sky--hover">
                gitlab.com
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="card-content p20">
        <div>
          <div class="mb20">
            <account width="34" height="34" />
            <span class="fzl fwb va8 dib ml10">
              À propos
            </span>
          </div>
          <p
            class="lh3 fzs">
            {{ txtBio }}
          </p>
        </div>
        <div>
          <div class="mt20 mb20">
            <wallet-travel width="34" height="34" />
            <span class="fzl fwb va8 dib ml10">
              Expériences professionnelles
            </span>
          </div>
          <div class="under-container m5">
            <div class="marker bg-aqua-sky"></div>
            <div class="timeline-content mb10">
              <experience
                class="ml20"
                :year="'Mai 2018 - Aujourd\'hui'"
                :title="'Développeur Full Stack'"
                :subtitle="'Monkey Monk - Stage, contrat pro et CDI'"
                :content="contentMonkey"
                :more="moreMonkey"
                :img="'monkeymonk.png'" />
            </div>
            <div class="marker bg-aqua-sky"></div>
            <div class="timeline-content mb10">
              <experience
                class="ml20"
                :year="'Juin 2017 - Août 2017'"
                :title="'Développeur Visual Basic / Data Analyst'"
                :subtitle="'Banque Populaire - CDD'"
                :content="contentBPACA"
                :more="moreBPACA"
                :img="'bpaca.png'" />
            </div>
            <div class="marker bg-aqua-sky"></div>
            <div class="timeline-content mb10">
              <experience
                class="ml20"
                :year="'Juin 2016 - Août 2016'"
                :title="'Développeur .NET / Testeur QA'"
                :subtitle="'CGI - Stage'"
                :content="contentCGI"
                :more="moreCGI"
                :img="'cgi.png'" />
            </div>
            <div class="marker bg-aqua-sky"></div>
            <div class="timeline-content mb10">
              <experience
                class="ml20"
                :year="'Avril 2015 - Juin 2015'"
                :title="'Développeur Symfony'"
                :subtitle="'Apesa - Stage'"
                :content="contentApesa"
                :img="'apesa.png'" />
            </div>
          </div>
        </div>
        <!-- <div>
          <div class="mt20 mb20">
            <check-circle-outline width="34" height="34" />
            <span class="fzl fwb va8 dib ml10">
              Mes réalisations
            </span>
          </div>
          <project
            class="m10"
            :title="'Sports Village'" />
          <project
            class="m10"
            :title="'Fil d\'actualité'" />
          <project
            class="m10"
            :title="'Miuseec'"/>
          <project
            class="m10"
            :title="'Nextcloud'"/>
          <project
            class="m10"
            :title="'StudyShare'"/>
        </div> -->
        <div class="mt20 mb20">
          <school width="34" height="34" />
          <span class="fzl fwb va8 dib ml10">
            Formations
          </span>
        </div>
          <div class="under-container m5">
            <div class="marker bg-aqua-sky"></div>
            <div class="timeline-content mb10">
              <formation
                class="ml20"
                :year="'2017 - 2019'"
                :title="'Master Méthodes Informatiques appliquées à la gestion des entreprises'"
                :acronyme="' - MIAGE'"
                :place="'Université de Bordeaux'"
                :link="'https://miage-bordeaux.fr/'"/>
            </div>
            <div class="marker bg-aqua-sky"></div>
            <div class="timeline-content mb10">
              <formation
                class="ml20"
                :year="'2015 - 2016'"
                :title="'Licence Méthodes Informatiques appliquées à la gestion des entreprises'"
                :acronyme="' - MIAGE'"
                :place="'Université de Bordeaux'"
                :link="'https://miage-bordeaux.fr/'"/>
            </div>
            <div class="marker bg-aqua-sky"></div>
            <div class="timeline-content mb10">
              <formation
                class="ml20"
                :year="'2013 - 2015'"
                :title="'DUT Statistique et Informatique Décsionnelle'"
                :acronyme="' - STID'"
                :place="'Université de Pau et des Pays de l\'Adour'"
                :link="'https://iutpa.univ-pau.fr/fr/organisation/departements/statistique-et-informatique-decisionnelle.html'"/>
            </div>
            <div class="marker bg-aqua-sky"></div>
            <div class="timeline-content mb10">
              <formation
                class="ml20"
                :year="'2012 - 2013'"
                :title="'Première année de Licence de Droit'"
                :place="'Université de Pau et des Pays de l\'Adour'"/>
              </div>
            <div class="marker bg-aqua-sky"></div>
            <div class="timeline-content mb10">
              <formation
                class="ml20"
                :year="'2011 - 2012'"
                :title="'Année Préparatoire à l’Insertion en Licence Scientifique'"
                :acronyme="' - APILS'"
                :place="'Université de Pau et des Pays de l\'Adour'"/>
            </div>
            <div class="marker bg-aqua-sky"></div>
            <div class="timeline-content mb10">
              <formation
                class="ml20"
                :year="'2008-2011'"
                :title="'Baccalauréat ES Spécialité Anglais'"
                :place="'Lycée Maurice Ravel - Saint Jean de Luz'"/>
            </div>
        </div>
        <div>
        <div class="mt20 mb20">
          <span class="fzl fwb">
            Centres d'intérêts
          </span>
        </div>
        </div>
      </div>  
    </div>
    <span
      class="tac db m10">
       Made with Vue JS
    </span>
  </div>
</template>

<script>
// MDI ICONS
import Phone from 'mdi-vue/Phone'
import Email from 'mdi-vue/Email'
import LinkedinBox from 'mdi-vue/LinkedinBox'
import CakeVariant from 'mdi-vue/CakeVariant'
import Pin from 'mdi-vue/Pin'
import Gitlab from 'mdi-vue/Gitlab'
import School from 'mdi-vue/School'
import WalletTravel from 'mdi-vue/WalletTravel'
import Account from 'mdi-vue/Account'

// COMPONENTS
import Formation from './components/formation.vue'
import Experience from './components/experience.vue'

export default {
  name: 'app',
  components: {
    Account,
    Phone,
    Email,
    LinkedinBox,
    CakeVariant,
    Pin,
    Gitlab,
    School,
    WalletTravel,
    Experience,
    Formation
  },
  data() {
    return {
      myArray: [
        {'id':1,'name':'A11'},
        {'id':2,'name':'B1222'},
        {'id':3,'name':'C3333222'},
        {'id':5,'name':'C2222J2'},
        {'id':6,'name':'CHHDHDHD'},
        {'id':7,'name':'CJEHEH'},
        {'id':8,'name':'C765687'},

      ],
      txtBio : "Titulaire d'un DUT Statistique et Informatique Décisionnelle (STID) ainsi que d'un master en licence d'informatique de gestion (MIAGE), j’exerce mes savoirs faire depuis 2019 majoritairement en tant que développeur back-end. Mes diverses expériences me confrontant de plus en plus à la partie front-end du web me caractérise davantage aujourd’hui en tant que développeur full stack. Passionné de nouvelles technologies et plus particulièrement du monde du web, ainsi que doté d’un goût pour le challenge, j’aspire à répondre à des problématiques de conception et d’expérience utilisateur.",
      contentMonkey: 'Stage et contrat de professionnalisation finalisant mes études en MASTER MIAGE se poursuivant sur un CDI dans une Start-up en pleine croissance prônant l\'utilisation d\'une méthode agile afin de mener au mieux ses activités. Mes missions étaient variées et m\'ont apporté une solide expérience dans le monde de l\'informatique, et plus particulièrement du web, qui ont pu confirmer ma volonté de poursuivre ma carrière dans ce secteur.',
      moreMonkey: [
        'Intégration de l\'équipe sur le projet Sports Village : https://sports-village.com/',
        'Développement d\'API RESTFULL',
        'Développement et maintenance de l\'intranet',
        'Administration système',
        'Administration réseaux'
      ],
      contentBPACA: 'À la suite d\'un état des lieux référençant plus de 200 agences de la Banque Populaire, j\'étais en charge de traiter statistiquement les données récoltées afin d\'améliorer l\'efficacité des procédés mis en place par le département Sécurité des Personnes et des Biens.',
      moreBPACA: [
        'Traitement des données avec Visual Basic et création de Dataviz',
        'Conception d\'une base de données',
        'Migration des données (Excel -> PHPMyAdmin)',
        'Suggestion d\'amélioration du SI'
      ],
      contentCGI: 'Stage de fin d\'étude de ma troisième année de Licence MIAGE qui m\'a intégré sur un projet qui avait pour objectif la maintenance évolutive du système d’information Nucléaire d\'EDF. Ma mission consistait à corriger et développer des tests automatisés pour l’utilisateur par le biais de l’application HP UFT. J’ai également été en mesure d’adapter les différents scripts préalablement développés dans le but de les dérouler sur une version plus récente du SI.',
      moreCGI: [
        'Méthodologie cycle en V',
        'Développement .NET',
        'Rédaction et exécution des cas de tests fonctionnels'
      ],
      contentApesa: 'Stage qui résulte de ma première expérience professionnelle dans l\'IT. Création d\'une interface web permettant d\'alimenter une base de données de manière intuitive pour l\'utilisateur .',
    }
  },
}
</script>

<style lang="scss">
.under-container{
  position: relative;
}
.under-container:before {
   content: '';
   position: absolute;
   margin-left: 7px;
   width: 2px;
   height: 100%;
   background: #CCD1D9;
   z-index: 1
}

.marker {
   width: 16px;
   height: 16px;
   border-radius: 50%;
   border: 2px solid #F5F7FA;
   z-index: 9999;
   position: absolute;
}

#Dragme:hover {
  cursor: -webkit-grab;
}

#Dragme:active {
  cursor: -webkit-grabbing;
}

</style>
