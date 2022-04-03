<template>
    <q-form>
                        <div class="row">
                            <div class="col-12">
                                <q-select outlined
                                          v-model="form.current_liability"
                                          :options="cover_options"
                                          class="custom-select q-mb-md"
                                          stack-label
                                          label="Current Liability"
                                >
                                </q-select>
                            </div>
                            <div class="col-12">
                                <q-select outlined
                                          v-model="form.annual_income"
                                          :options="cover_options"
                                          class="custom-select q-mb-md"
                                          stack-label
                                          label="Annual Income"
                                >
                                </q-select>
                            </div>
                            <div class="col-12">
                                <q-input stack-label
                                         outlined
                                         v-model="form.birth_date"
                                         label="Date of Birth"
                                         mask="date"
                                         :rules="['date']">
                                    <template v-slot:append>
                                        <q-icon name="event" class="cursor-pointer">
                                            <q-popup-proxy ref="qDateProxy" transition-show="scale"
                                                           transition-hide="scale">
                                                <q-date v-model="form.birth_date" default-view="Years">
                                                    <div class="row items-center justify-end">
                                                        <q-btn v-close-popup label="Close" color="primary" flat/>
                                                    </div>
                                                </q-date>
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>
                                </q-input>
                            </div>
                            <div class="col-12">
                                <q-select outlined
                                          v-model="form.sum_assured"
                                          :options="cover_options"
                                          class="custom-select q-mb-md"
                                          stack-label
                                          label="Sum Assured"
                                >
                                </q-select>
                            </div>
                            <div class="col-12 q-px-xs-xl q-px-sm-none">
                                <q-btn class="full-width bg-theme-green text-white br-10 f-18 text-capitalize"
                                       label="Get Some Assured" ></q-btn>
                            </div>
                        </div>
                    </q-form>
</template>

<script>
    export default {
        name: "calculator-form",
        data(){
            return{
                form: {
                    birth_date: null
                },
                cover_options: [
                    {
                        label: 'Option 1',
                        value: '1',
                    },
                    {
                        label: 'Option 2',
                        value: '2',
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>