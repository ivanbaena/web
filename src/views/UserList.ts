import { CollectionView } from './CollectionView';

export class UserList extends CollectionView {
  constructor(public parentElement: string) {
    super();
    this.collection.fetch();
  }
  renderItem = () => {
    const users = this.collection.models;

    if (users) {
      let collection = '';
      for (let user of users) {
        const name = user.get('name');

        collection += `<li>${name}</li>`;
      }

      const list = `
      <ul>
        ${collection}
      </ul>
    `;
      const parent = document.querySelector(this.parentElement);

      if (parent) {
        parent.innerHTML = list;
      }
    }
  };
}
