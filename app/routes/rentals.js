import Route from '@ember/routing/route';

export default class RentalsRoute extends Route {
  model(params) {
    return fetch(`../${params.r_address}.json`).then((response) => {
      return response.json();
    });
  }
}
