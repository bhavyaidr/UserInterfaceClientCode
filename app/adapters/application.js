

import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "https://backend",
  // headers: {
  // 	"Accept":"application/json"
  // }
});