import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(question) {
    this.get('questions').pushObject(question);
  },
  includes(question){
    return this.get('questions').includes(question);
  }
});
