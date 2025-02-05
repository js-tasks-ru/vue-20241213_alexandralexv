import { computed, defineComponent, ref } from 'vue'

// Значения взяты из https://jsonplaceholder.typicode.com/comments
export const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
]

export default defineComponent({
  name: 'MarkedEmailsApp',

  setup() {
    const emailList = ref(emails)
    const filter = ref('')

    const isMarked = computed(() => {
      return email => filter.value && email.includes(filter.value)
    })

    return {
      emailList,
      filter,
      isMarked,
    }
  },

  template: `
    <div>
      <div class="form-group">
        <input type="search" aria-label="Search" v-model.trim="filter"/>
      </div>
      <ul aria-label="Emails">
        <li v-for="(email, index) in emailList" :key="index">
          <!-- Идея №3 -->
           <div :class="{marked: isMarked(email)}">{{ email }}</div>

          <!-- Идея №2 -->
          <!-- <div :class="{marked: filter && email.includes(filter)}">{{ email }}</div> -->

          <!-- Идея №1 -->
          <!-- <div v-if="email.includes(filter) && filter" class="marked">{{ email }}</div>
          <div v-else>{{ email }}</div> -->
        </li>
      </ul>
    </div>
  `,
})
