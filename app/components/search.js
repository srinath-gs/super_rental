import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SearchComponent extends Component {
  @tracked arr = this.args.details;
  @action
  route_name(event) {
    this.arr = [];
    this.args.details.filter(async (value) => {

      if (value.attributes.title.includes(event.target.value)) {
        let home = await fetch(`${value.id}.json`);
        let item = await home.json();
        this.arr.push(item);
        this.arr = this.arr;
      }
    });

  }
}
