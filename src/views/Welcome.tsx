import { defineComponent } from "vue"
import { RouterView } from "vue-router"
import s from './Welcome.module.scss'
import logo from '../assets/icons/mangosteen.svg'
console.log(logo);

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} alt="" srcset="" />
          <h1>山竹记账</h1>
        </header>
        <main><RouterView /></main>
      </div>
    )
  },
})
