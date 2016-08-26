import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['upvote:desc'],
  sortedAnswer: Ember.computed.sort('answers', 'sortBy'),
  actions:{
    upvote(answer, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          answer.set(key,params[key]);
        }
      });
      answer.save();
    }
  }
});
