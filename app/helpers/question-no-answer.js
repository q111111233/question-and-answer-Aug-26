import Ember from 'ember';

export function questionNoAnswer(params) {
  var question = params[0];

  if(question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-phone-alt"></span>');
  }
  else{
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-earphone"></span>');
  }
}

export default Ember.Helper.helper(questionNoAnswer);
