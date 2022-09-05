import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class ImageComponent extends Component {
  @tracked isChange = false;
  @action
  fullImage() {
    // this.toggleProperty("isChange");
    this.isChange = !this.isChange;
  }
}
