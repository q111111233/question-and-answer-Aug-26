import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote(answer) {
      var params = {
        upvote: answer.get('upvote')+1
      };
      this.sendAction('upvote', answer, params);
    }
  }
});
