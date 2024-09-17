<template>
  <div class="box-for-jour">
    <div class="journal">
      <div class="poisk">
        <p>Group:</p>
        <select name="group" v-model="groupSt">
          <option v-for="el of groups" :value="el" :key="el">{{ el }}</option>
        </select>

        <div class="journal2">Lesson:</div>
        <select name="Lesson" text="text1" v-model="lessonSt">
          <option v-for="el of lessons" :value="el" :key="el">{{ el }}</option>
        </select>
        <button @click="addInfo">Select</button>
      </div>

      <div class="journal1">
        <div>Topic: {{ currentSubject }}</div>
        <form v-if="!currentSubject">
          <input style="width: 200px;" type="text" v-model="lessonTopic" text="massageLesson" placeholder="Lesson topic">
          <button class="save-b" @click.prevent="saveInfo">Save</button>
        </form>
      </div>
      <div><span>Name</span><span>Is present</span></div>
      <hr>
      <template v-for="el of currentGroup" :key="el.id">
        <div class="checkbox">
          <p style="width: 300px;">
            {{ el.name }}
          </p>
          <label>
            <input type="checkbox" :disabled="currentState" v-model="el.checked" text="present">
          </label>
        </div>
        <hr>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
const groupSt = ref('')
const lessonSt = ref('')
const lessonTopic = ref('')


const studentArr = ref([
  { name: 'Ильинская Виктория Львовна', group: 'gr1', id: 1 },
  { name: 'Евдокимов Матвей Михайлович', group: 'gr1', id: 2 },
  { name: 'Тарасова Виктория Александровна', group: 'gr1', id: 3 },
  { name: 'Ершов Матвей Сергеевич', group: 'gr2', id: 4 },
  { name: 'Постникова Анастасия Ивановна', group: 'gr2', id: 5 },
  { name: 'Вишневский Павел Никитич', group: 'gr3', id: 6 },
  { name: 'Федосеев Герман Владимирович', group: 'gr3', id: 7 },
  { name: 'Александрова Вероника Фёдоровна', group: 'gr3', id: 8 },
  { name: 'Лебедев Лев Данилович', group: 'gr3', id: 9 },
  { name: 'Богданова Яна Марковна', group: 'gr3', id: 10 },
  { name: 'Крылов Максим Арсентьевич', group: 'gr3', id: 11 },
  { name: 'Самойлова Милана Ивановна', group: 'gr3', id: 12, }
])
const groups = ref([] as string[])
for (let el of studentArr.value) {
  if (!groups.value.includes(el.group)) groups.value.push(el.group)
}
groups.value.sort((a, b) => a.localeCompare(b))
const lessonsArr = ref([
  { number: 2, group: 'gr1', id: 1 },
  { number: 3, group: 'gr1', id: 3 },
  { number: 4, group: 'gr1', id: 6 },
  { number: 4, group: 'gr2', id: 2 },
  { number: 5, group: 'gr2', id: 7 },
  { number: 1, group: 'gr3', id: 4 },
  { number: 2, group: 'gr3', id: 5 },
])
const lessons = computed(() => {
  if (!groupSt.value) return []
  const groupLessons = lessonsArr.value.filter(el => el.group == groupSt.value).map(el => el.number)
  groupLessons.sort((a, b) => a - b)
  return groupLessons
})

type JornalLine = {
  lesson: number,
  lessonName: string,
  group: string,
  students: any[],
  disabled: boolean
}

const jornal = ref([] as JornalLine[])

const currentGroup = computed(() => {
  const selected = jornal.value.find(el => el.group == groupSt.value && el.lesson == +lessonSt.value)
  if (selected) {
    return selected.students
  }
  return []
})
const currentState = computed(() => {
  const selected = jornal.value.find(el => el.group == groupSt.value && el.lesson == +lessonSt.value)
  if (selected) {
    return selected.disabled
  }
  return false
})
const currentSubject = computed(() => {
  const selected = jornal.value.find(el => el.group == groupSt.value && el.lesson == +lessonSt.value)
  if (selected) {
    return selected.lessonName
  }
  return ''
})

const addInfo = () => {
  const selected = jornal.value.find(el => el.group == groupSt.value && el.lesson == +lessonSt.value)
  if (!selected) {
    const tempStArr = studentArr.value.filter(el => el.group == groupSt.value).map(el => ({ ...el, checked: false }))
    jornal.value.push({
      lesson: +lessonSt.value,
      lessonName: '',
      group: groupSt.value,
      students: tempStArr,
      disabled: false,
    })
  }
}
const saveInfo = () => {
  const selected = jornal.value.find(el => el.group == groupSt.value && el.lesson == +lessonSt.value)
  if (selected) {
    selected.lessonName = lessonTopic.value
    selected.disabled = true
  } else {
    alert('Select lesson first')
  }
  lessonTopic.value = ''
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.box-for-jour {
  display: flex;
  width: 500px;
}

.poisk {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.journal1 {
  display: flex;
  align-items: center;
  gap: 10px;
}

.save-b {
  margin-left: 60px;
}

.checkbox {
  display: flex;
  align-items: center;
  padding: 10px 0;
}
</style>