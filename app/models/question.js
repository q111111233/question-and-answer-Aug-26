import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  note: DS.attr(),
  answers: DS.hasMany('answer', { async:true }),

  favoriteQuestions: Ember.inject.service(),
  onTeam: Ember.computed('favoriteQuestions.questions.[]', function(){
    return this.get('favoriteQuestions').includes(this);
  })
});
