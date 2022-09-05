import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let api_details = await fetch('../api_rental.json');
    let details = await api_details.json();
    return details;
  }
}
