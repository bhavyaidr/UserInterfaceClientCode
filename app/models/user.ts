import DS from 'ember-data';

export default DS.Model.extend({
  emailId: DS.attr('String'),
  phoneNumber: DS.attr('Number')
});