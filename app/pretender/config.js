export default function() {
  this.namespace = 'api';
  this.timing = 100;

  this.post('/v1/oauth/token', function() {
    return {
      "access_token": "fed17b7da45b2ac3d9c8c823a36ebcbf3a1cd3e18f6cd703781c9bebfa830e03",
      "token_type": "bearer",
      "expires_in": 7200,
      "refresh_token": "b9c0099a18eb99238b6ad48f831d0499fcde1a68f59102af6d09562c77b6d30c",
      "created_at": 1425027308
    };
  });

  this.get('/staff_members', 'staff-members');
  this.post('/staff_members', 'staff-member');
  this.get('/staff_members/:id', 'staff-member');
  this.del('/staff_members/:id', 'staff-member');
  this.put('/staff_members/:id', 'staff-member');

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Default config
  */
  // this.namespace = '';    make this `api`, for example, if your API is namespaced
  // this.timing = 400;      delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the store via

      - store.find(key, id)
      - store.findAll(key)
      - store.findQuery(key, query)
      - store.push(key, data)
      - store.remove(key, id)
      - store.removeQuery(key, query)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(store, request) {
      var contactId = +request.params.id;
      var contact = store.find('contact', contactId);
      var addresses = store.findAll('address')
        .filterBy('contact_id', contactId);

      return {
        contact: contact,
        addresses: addresses
      };
    });

  */
}
