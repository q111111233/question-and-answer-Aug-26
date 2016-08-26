import Ember from 'ember';

export default Ember.Route.extend({
  favoriteQuestions: Ember.inject.service(),
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions:{
    save(params){
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    addToFavorite(question) {
      this.get('favoriteQuestions').add(question);
    }
  }
});
