import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Term from '../views/term.vue'
import Health from '../views/health.vue'
import Accident from '../views/personal-accident.vue'
import Endowment from '../views/endowment.vue'
import CriticalIllness from '../views/critical-illness.vue'
import HomeInsurance from '../views/home-insurance.vue'
import Compare from '../views/compare.vue'
import BookExpert from '../views/book_expert'
import TermCriterion from '../views/criterion/term'
import HealthCriterion from '../views/criterion/health'
import AccidentCriterion from '../views/criterion/accident'
import HomeInsuranceCriterion from '../views/criterion/home-insurance'
import EndowmentCriterion from '../views/criterion/endowment'
import CriticalIllnessCriterion from '../views/criterion/critical-illness'
import Error from '../views/404_1'
import Error2 from '../views/404_2'
import Error3 from '../views/404_3'
import Error4 from '../views/404_4'
import Error5 from '../views/404_5'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/term',
        name: 'term',
        component: Term
    },
    {
        path: '/health',
        name: 'health',
        component: Health
    },
    {
        path: '/personal-accident',
        name: 'personal-accident',
        component: Accident
    },
    {
        path: '/endowment',
        name: 'endowment',
        component: Endowment
    },
    {
        path: '/critical-illness',
        name: 'critical-illness',
        component: CriticalIllness
    }, {
        path: '/home-insurance',
        name: '/home-insurance',
        component: HomeInsurance
    },
    {
        path: '/term/criterion',
        name: 'term-criterion',
        component: TermCriterion
    }, {
        path: '/health/criterion',
        name: 'health-criterion',
        component: HealthCriterion
    }, {
        path: '/personal-accident/criterion',
        name: 'personal-accident-criterion',
        component: AccidentCriterion
    }, {
        path: '/endowment/criterion',
        name: 'endowment-criterion',
        component: EndowmentCriterion
    }, {
        path: '/home-insurance/criterion',
        name: 'home-insurance-criterion',
        component: HomeInsuranceCriterion
    }, {
    path: '/critical-illness/criterion',
    name: 'critical-illness-criterion',
    component: CriticalIllnessCriterion
  }, {
        path: '/compare',
        name: 'compare',
        component: Compare
    },
    {
        path: '/book-expert',
        name: 'book-expert',
        component: BookExpert
    },
    {
        path: '/404',
        name: 'not-found',
        component: Error
    },
    {
        path: '/405',
        name: 'not-found2',
        component: Error2
    },
    {
        path: '/406',
        name: 'not-found3',
        component: Error3
    },
    {
        path: '/407',
        name: 'not-found3',
        component: Error4
    },
    {
        path: '/408',
        name: 'not-found3',
        component: Error5
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})

export default router
